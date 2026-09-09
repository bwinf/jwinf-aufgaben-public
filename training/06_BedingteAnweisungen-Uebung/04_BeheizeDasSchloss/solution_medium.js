const pythonCode_04_2 = `from robot import *

for i in range(11):
    if not plattformVorne():
        bauePlattformVorne()
    vorwaerts()
    if aufHolz():
        holzEinsammeln()
    if beimKamin():
        holzAblegen()`;