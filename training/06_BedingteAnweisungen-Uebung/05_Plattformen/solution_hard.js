const pythonCode_05_3 = `from robot import *

for i in range(11):
    vorwaerts()
    if aufHolz():
        holzEinsammeln()
        for j in range(5):
            spring()
            if beimKamin():
                holzAblegen()
        vorwaerts()
        for j in range(2):
            rueckwaerts()
            rueckwaerts()
            vorwaerts()
            vorwaerts()`;