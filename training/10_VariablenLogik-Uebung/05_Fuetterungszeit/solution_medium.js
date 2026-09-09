const pythonCode_05_2 = `from robot import *

vorwaerts()

for i in range(5):
    holz = anzahlBestelltesHolz()
    vorwaerts()
    vorwaerts()
    nimmObjekte(holz)
    rueckwaerts()
    rueckwaerts()
    legeAb(holz)
    dreheRechts()
    vorwaerts()
    dreheLinks()`;