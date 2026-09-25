const pythonCode_02_3 = `from printer import *

l = []

while not eingabeEnde():
    l.append(lies())

l.append("nicht")
l.append(l.index("nicht")+1)
l.remove("nicht")    
schreibe(l)`;