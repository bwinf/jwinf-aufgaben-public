const pythonCode_06_3 = `from robot import *

for i in range(40):
    dreheRechts()
    for j in range(4):
        if vorHindernis():
            dreheLinks()
    vorwaerts()`;