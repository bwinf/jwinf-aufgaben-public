const pythonCode_01_2 = `from robot import *

def faerben():
    for i in range(5):
        faerbeFeld()
        oben()
    unten()
    unten()
    rechts()
    faerbeFeld()
    for i in range(3):
        unten()
    rechts()
    rechts()

rechts()
rechts()
faerben()
rechts()
faerben()
rechts()
rechts()
faerben()
faerben()`;