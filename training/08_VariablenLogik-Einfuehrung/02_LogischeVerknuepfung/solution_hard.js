const pythonCode_02_3 = `from robot import *

for i in range(8):
    oben()
    for j in range(14):
        rechts()
        if (spalteRoboter()>6 and spalteRoboter()<10) or (zeileRoboter()>3 and zeileRoboter()<6):
            faerbeFeld()
    for j in range(14):
        links()`;