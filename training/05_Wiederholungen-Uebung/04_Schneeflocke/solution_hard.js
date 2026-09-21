const pythonCode_04_3 = `from turtle import *

for i in range(3):
    geheSchritte(6)
    dreheLinksGrad(90)
    for j in range(3):
        geheSchritte(2)
        dreheLinksGrad(45)
        for k in range(3):
            geheSchritte(2)
            dreheLinksGrad(30)
            for l in range(3):
                geheSchritte(2)
                geheZurueckSchritte(2)
                dreheRechtsGrad(30)
            dreheLinksGrad(60)
            geheZurueckSchritte(2)
            dreheRechtsGrad(45)
        dreheLinksGrad(90)
        geheZurueckSchritte(2)
        dreheRechtsGrad(90)
    dreheLinksGrad(180)
    geheZurueckSchritte(6)
    dreheLinksGrad(120)`;