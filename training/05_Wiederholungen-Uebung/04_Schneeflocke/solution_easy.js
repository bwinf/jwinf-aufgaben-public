const pythonCode_04_1 = `from turtle import *

for i in range(8):
    geheSchritte(5)
    dreheLinksGrad(30)
    for j in range(3):
        geheSchritte(5)
        geheZurueckSchritte(5)
        dreheRechtsGrad(30)
    dreheLinksGrad(60)
    geheZurueckSchritte(5)
    dreheLinksGrad(45)`;