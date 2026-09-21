const pythonCode_01_3 = `from robot import *

vorwaerts()

for i in range(5):
    summe = 0
    for j in range(5):
        summe = summe + leseZahl()
        vorwaerts()
    vorwaerts()
    schreibeZahl(summe)
    dreheUm()
    for j in range(6):
        vorwaerts()
    dreheLinks()
    vorwaerts()
    dreheLinks()
    
for i in range(7):
    vorwaerts()`;