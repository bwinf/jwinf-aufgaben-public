const pythonCode_05_1 = `from robot import *

vorwaerts()
holzEinsammeln()
for i in range(15):
    vorwaerts()
    if plattformOben():
        spring()
holzAblegen()`;