const pythonCode_05_3 = `from robot import *

vorwaerts()
vorwaerts()

for i in range(5):
    holz = 0
    for j in range(3):
        holz = holz + anzahlBestelltesHolz()
        vorwaerts()
    vorwaerts()
    
    if holz>anzahlHolzscheite():
        holz = holz - anzahlHolzscheite()
        nimmObjekte(anzahlHolzscheite())
        vorwaerts()
        nimmObjekte(holz)
        rueckwaerts()
    else:
        nimmObjekte(holz)
        
    rueckwaerts()
    for j in range(3):
        rueckwaerts()
        legeAb(anzahlBestelltesHolz())
        
    dreheRechts()
    vorwaerts()
    dreheLinks()`;