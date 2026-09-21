const pythonCode_05_3 = `from printer import *

text = input()
anfang = text.find("<")
ende = text.find(">")

while not eingabeEnde():
    name = input()
    print(text[:anfang] + name + text[ende+1:])`;