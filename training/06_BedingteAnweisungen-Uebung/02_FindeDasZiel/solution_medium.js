const pythonCode_02_2 = `from robot import *

while not flaggeErobert():
    dreheLinks()
    if vorHindernis():
        dreheRechts()
        dreheRechts()
        if vorHindernis():
            dreheLinks()
    vorwaerts()`;