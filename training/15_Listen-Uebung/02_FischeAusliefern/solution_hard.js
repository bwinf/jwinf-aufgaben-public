const pythonCode_02_3 = `from robot import *

unten()
rechts()
l = [0]*10

for i in range(10):
    l[i] = anzahlFische()
    fangeFische(anzahlFische())
    rechts()
for i in range(10):
    links()
    
for i in range(3):
    unten()
for i in range(10):
    legeFischeAb([l[i]])
    rechts()`;