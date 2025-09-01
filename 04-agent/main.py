from openai import OpenAI
import json
from dotenv import load_dotenv

load_dotenv()

client = OpenAI()


SYSTEM_PROMPT = """You are an AI assistant that can use tools to help with user queries.
    Rules:
    - Follow the Output JSON Format.
    - Always perform one step at a time and wait for next input
    - Carefully analyse the user query
    """


messages = [
    {"role": "system", "content": SYSTEM_PROMPT},
]

query = input("Enter your query: ")

messages.append({"role": "user", "content": query})

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=messages,
    response_format={"type": "json_object"},
)

print("Response:", response.choices[0].message.content)
