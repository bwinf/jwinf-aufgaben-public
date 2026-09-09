const pythonCode_01_3 = `from robot import *

rechts()
feld = [[0 for _ in range(7)] for _ in range(4)]
feld[0][0]=1
for i in range(4):
    for j in range(7):
        if farbeAufFeld():
            feld[i][j] = 1
        rechts()
    for j in range(7):
        links()
    oben()
    
for i in range(4):
    for j in range(7):
        if feld[i][j]==1:
            faerbeFeld()
        rechts()
    for j in range(7):
        links()
    oben()
        `;