const pythonCode_07_2 = `from robot import *

for i in range(14):
    rechts()
    if farbeOben():
        if not farbeObenLinks():
            faerbeFeld()
    if farbeObenLinks():
        if not farbeOben():
            faerbeFeld()`;