const pythonCode_04_2 = `from robot import *

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

for i in range(11-murmelRechts):
    rechts()
for i in range(7-murmelUnten):
    unten()
    
legeMurmelAb()`;