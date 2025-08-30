import tiktoken

enc = tiktoken.encoding_for_model("gpt-4o")

text = "Hi, I am arun"
tokens = enc.encode(text)

print(tokens)

tokens = [12194, 11, 357, 939, 646, 373]

decoded=enc.decode(tokens)

print(decoded)