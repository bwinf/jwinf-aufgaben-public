const pythonCode_02_3 = `from robot import *

while not flaggeErobert():
    dreheRechts()
    if vorHindernis():
        dreheLinks()
        if not vorHindernis():
            vorwaerts()
        else:
            dreheLinks()
    else:
        vorwaerts()`;