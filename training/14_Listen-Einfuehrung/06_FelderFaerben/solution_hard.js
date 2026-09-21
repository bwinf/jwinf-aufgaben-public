const pythonCode_06_3 = `from robot import *

l = [0]*15

for i in range(3):
    for j in range(15):
        rechts()
        if farbeAufFeld():
            l[j] = l[j] + 1
    for j in range (15):
        links()
    unten()
        
for i in range(15):
    rechts()
    if l[i]>1:
        faerbeFeld()
    `;