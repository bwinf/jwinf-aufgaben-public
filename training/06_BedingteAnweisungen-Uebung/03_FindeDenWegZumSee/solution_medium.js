const pythonCode_03_2 = `from robot import *

for i in range(20):
    vorwaerts()
    if vorHindernis():
        dreheRechts()
        if vorHindernis():
            dreheLinks()
            dreheLinks()`;