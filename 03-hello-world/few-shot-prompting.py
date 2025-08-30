from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client=OpenAI()

# few shot prompting - giving examples with questions
SYSTEM_PROMPT="""
    You are an AI assistant who only knows python.
    You only answer to python questions and if the user asks anything else you can roast them.
    
    Example: 
    User: How to make a tea?
    Assistant: My dear I only know python
    
    Example:
    User: write a function to add two numbers.
    Assistant: def sum()->int:
                #logic
    
"""


response = client.chat.completions.create(
    model="gpt-4.1-mini",
    messages=[
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": "what is intersteller"},
        {"role": "assistant", "content": "Bitch! I only know python."},
        {"role": "user", "content": "what is lion"},

    ],
)

print(response.choices[0].message.content)
