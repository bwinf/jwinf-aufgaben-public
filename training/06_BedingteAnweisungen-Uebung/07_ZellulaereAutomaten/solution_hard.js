const pythonCode_07_3 = `from robot import *

for i in range(9):
    unten()
    for j in range(20):
        if farbeObenLinks():
            if not farbeOben():
                if not farbeObenRechts():
                    faerbeFeld()
        else:
            if farbeOben():
                faerbeFeld()
            else:
                if farbeObenRechts():
                    faerbeFeld()
        rechts()
    for j in range(20):
        links()`;