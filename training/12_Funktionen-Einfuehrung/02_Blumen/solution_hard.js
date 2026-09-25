const pythonCode_02_3 = `from turtle import *

def blume(groesse):
    stiftRunter()
    geheSchritte(5*groesse)
    dreheRechtsGrad(90)

    for i in range(8):
        geheSchritte(groesse)
        dreheLinksGrad(45)
    
    stiftHoch()
    dreheRechtsGrad(90)
    geheSchritte(5*groesse)
    dreheRechtsGrad(180)
    
blume(1)
dreheRechtsGrad(90)
geheSchritte(4)
dreheLinksGrad(90)
blume(0.5)
dreheRechtsGrad(90)
geheSchritte(6)
dreheLinksGrad(90)
blume(1)
dreheLinksGrad(90)
geheSchritte(20)
dreheRechtsGrad(90)
blume(1.5)`;