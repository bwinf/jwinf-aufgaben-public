const pythonCode_01_3 = `from printer import *

text = input()
if text[-1] == "?":
    print("Frage")
elif text[-1] == " ":
    print("Mitte")
else:
    print("keine Frage")`;