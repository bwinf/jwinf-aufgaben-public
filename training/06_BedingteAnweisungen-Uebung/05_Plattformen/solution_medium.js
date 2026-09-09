const pythonCode_05_2 = `from robot import *

vorwaerts()
holzEinsammeln()
for i in range(40):
    if plattformOben():
        spring()
    else:
        if vorHindernis():
            dreheUm()
        vorwaerts()
holzAblegen()`;