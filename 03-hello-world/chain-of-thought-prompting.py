from openai import OpenAI
import json
from dotenv import load_dotenv

load_dotenv()
client = OpenAI()

# Chain Of Thought: The model is encouraged to break down reasoning step by step before arriving at an answer.

SYSTEM_PROMPT = """
    You are an AI assistant who is specialized in solving user query.
    For the given input you need to analyse and break down the problem into step by step.
    
    The steps are you get a user input, you analyse, you think , you think again, you think for several times and then return the output with an explanation.
    
    Follow the steps in sequence - analyse, think, output, validate, result
    
    Rules:
    1. Follow strict JSON output.
    2. Always perform one step at a time and wait for the next input.
    3. Carefully analyse the user query.
    
    Output format:
    {{"step":"string","content":"string"}}


Example:
    Input: What is 2 + 2
    Output: {{ "step": "analyse", "content": "Alight! The user is interest in maths query and he is asking a basic arthematic operation" }}
    Output: {{ "step": "think", "content": "To perform this addition, I must go from left to right and add all the operands." }}
    Output: {{ "step": "output", "content": "4" }}
    Output: {{ "step": "validate", "content": "Seems like 4 is correct ans for 2 + 2" }}
    Output: {{ "step": "result", "content": "2 + 2 = 4 and this is calculated by adding all numbers" }}

    
"""

response = client.chat.completions.create(
    model="gpt-4.1-mini",
    response_format={"type": "json_object"},
    messages=[
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": "What is 5 / 2 * 3 to the power 4"},
        {
            "role": "assistant",
            "content": json.dumps(
                {
                    "step": "analyse",
                    "content": "The user is asking for the evaluation of the mathematical expression: 5 divided by 2, then multiplied by 3 to the power of 4.",
                }
            ),
        },
        {
            "role": "assistant",
            "content": json.dumps(
                {
                    "step": "think",
                    "content": "According to the order of operations, I should first calculate the exponent 3 to the power 4, then perform the division 5/2, and finally multiply the results.",
                }
            ),
        },
        {
            "role": "assistant",
            "content": json.dumps(
                {
                    "step": "output",
                    "content": "3 to the power 4 is 81, 5 divided by 2 is 2.5, and 2.5 multiplied by 81 is 202.5.",
                }
            ),
        },
        {
            "role": "assistant",
            "content": json.dumps(
                {
                    "step": "validate",
                    "content": "The calculations are correct: 3^4 = 81, 5/2 = 2.5, and 2.5 * 81 = 202.5.",
                }
            ),
        },
        {
            "role": "assistant",
            "content": json.dumps(
                {
                    "step": "result",
                    "content": "The value of the expression 5 / 2 * 3^4 is 202.5, calculated by first evaluating the exponentiation, then division, and finally multiplication.",
                }
            ),
        },
    ],
)

response2 = client.responses.create(
    model="gpt-4.1-mini",
    input=[
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": "What is 5 / 2 * 3 to the power 4"},
        {
            "role": "assistant",
            "content": json.dumps(
                {
                    "step": "analyse",
                    "content": "The user is asking to calculate a mathematical expression: 5 divided by 2, multiplied by 3 raised to the power 4.",
                }
            ),
        },
    ],
)

# print("\n\n👨‍💻 ", response2.output_text ,"\n\n")

print("\n\n🤖:", response.choices[0].message.content, "\n\n")
