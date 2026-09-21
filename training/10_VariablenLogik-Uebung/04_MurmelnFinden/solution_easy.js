const pythonCode_04_1 = `from robot import *

rechts()
murmelRechts = leseZahl()
rechts()
murmelUnten = leseZahl()
links()
links()

for i in range(murmelRechts):
    rechts()
for i in range(murmelUnten):
    unten()

hebeMurmelAuf()

for i in range(murmelRechts):
    links()
for i in range(murmelUnten):
    oben()
    
unten()
legeMurmelAb()`;