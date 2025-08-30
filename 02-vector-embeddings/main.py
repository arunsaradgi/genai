from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

text = "cat sits on a mat"

client=OpenAI()

response = client.embeddings.create(model="text-embedding-3-small", input=text)

print(response.data[0].embedding)
print(len(response.data[0].embedding))
