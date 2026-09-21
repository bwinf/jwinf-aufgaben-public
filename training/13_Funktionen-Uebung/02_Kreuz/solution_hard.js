const pythonCode_02_3 = `from turtle import *

def kreuz(groesse):
    stiftRunter()
    for i in range(4):
        for j in range(3):
            geheSchritte(groesse)
            dreheRechts90Grad()
        dreheLinks90Grad()
        dreheLinks90Grad()
    stiftHoch()
    
kreuz(4)
geheSchritte(5)
dreheRechts90Grad()
geheSchritte(10)
dreheLinks90Grad()
kreuz(3)
geheSchritte(7)
dreheRechts90Grad()
geheSchritte(5)
dreheLinks90Grad()
kreuz(2)`;