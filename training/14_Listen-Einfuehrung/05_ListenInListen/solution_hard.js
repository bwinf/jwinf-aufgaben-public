const pythonCode_05_3 = `from printer import *

eingabe = list(lies())
ziffern = [[] for _ in range(9)]

for i in range(len(eingabe)):
    ziffern[int(eingabe[i])-1].append(i+1)
    
for i in range(9):
    schreibe(str(i+1) + " " + str(ziffern[i]))`;