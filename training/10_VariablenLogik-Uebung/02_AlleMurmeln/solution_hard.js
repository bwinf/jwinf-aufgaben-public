const pythonCode_02_3 = `from robot import *

anzahl = 0
rechts()

while aufMurmel():
    anzahl = anzahl + 1
    rechts()

for i in range(anzahl):
    while not aufMurmel():
        links()
    hebeMurmelAuf()
    for j in range(anzahl):
        rechts()
    legeMurmelAb()
    links()
        `;