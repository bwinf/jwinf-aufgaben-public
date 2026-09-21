const pythonCode_05_2 = `from printer import *

eingabe = list(lies())
ziffern = [0]*9

for ele in eingabe:
    ziffern[int(ele)-1] = ziffern[int(ele)-1] + 1
    
for i in range(9):
    schreibe(str(i+1) + " " + str(ziffern[i]))`;