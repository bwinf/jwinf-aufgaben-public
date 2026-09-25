const pythonCode_02_2 = `from turtle import *

def kreuz():
    stiftRunter()
    for i in range(4):
        for j in range(3):
            geheSchritte(4)
            dreheRechts90Grad()
        dreheLinks90Grad()
        dreheLinks90Grad()
    stiftHoch()
    
kreuz()
geheSchritte(5)
dreheRechts90Grad()
geheSchritte(10)
dreheLinks90Grad()
kreuz()
geheSchritte(10)
dreheRechts90Grad()
geheSchritte(5)
dreheLinks90Grad()
kreuz()`;