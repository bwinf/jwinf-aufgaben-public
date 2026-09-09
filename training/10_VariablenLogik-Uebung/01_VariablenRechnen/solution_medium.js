const pythonCode_01_2 = `from robot import *

vorwaerts()

for i in range(5):
    summe = leseZahl()
    vorwaerts()
    summe = summe + leseZahl()
    vorwaerts()
    vorwaerts()
    schreibeZahl(summe)
    dreheUm()
    for j in range(3):
        vorwaerts()
    dreheLinks()
    vorwaerts()
    dreheLinks()
    
for i in range(4):
    vorwaerts()`;