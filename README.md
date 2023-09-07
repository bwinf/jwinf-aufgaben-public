# Öffentliche Aufgaben für die Wettbewerbsplattfom [jwinf.de](https://jwinf.de/)

Dieses Repository enthält die öffentlichen Aufgaben für die Programmierwettbewerbsseite [jwinf.de](https://jwinf.de/).

Pull-Requests / Merge-Requests zum Hinzufügen eigener Aufgaben sind möglich und erwünscht!

## Lokale Entwicklung der Aufgaben

Für das lokale Ausführen der Aufgaben muss das Git-Repository 
[bebras-modules](https://github.com/bwinf/bebras-modules) im Branch `jwinf` als `../_common/modules/` geklont werden. 

Dies geht z. B. durch Ausführen des folgenden Kommandos (im selben Verzeichnis in dem auch dieses Repository geklont wurde):

```
git clone https://github.com/bwinf/bebras-modules _common/modules -b jwinf
```

Die Verzeichnisstruktur muss dann so aussehen:

```
.
├── _common
│   └── modules
│       ├── …
│       …
└── jwinf-aufgaben-public
    ├── …
    …
```
