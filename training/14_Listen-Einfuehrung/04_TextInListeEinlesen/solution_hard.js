const pythonCode_04_3 = `from printer import *

liste = input().split(" ")
index = liste.pop(0)

liste.insert(int(index)-1, "super")
print(" ".join(liste))`;