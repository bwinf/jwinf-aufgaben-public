const pythonCode_01_1 = `from robot import *

anzahl = 0
rechts()

while farbeAufFeld():
    anzahl = anzahl + 1
    rechts()

for i in range(anzahl):
    faerbeFeld()
    rechts()`;