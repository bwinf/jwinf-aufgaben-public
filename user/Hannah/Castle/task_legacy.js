function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false,
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "castle",
      //Gibt an, ob die Programme gespeichert und geladen werden können über das Menu auf der rechten Seite.
      //Für Wettbewerbe immer auf true setzen
      hideSaveOrLoad: true,
      //Die BWINF-spezifischen Farben. Bitte in jeder Aufgabendatei laden, da die Blocktypen sonst nicht konsistent eingefärbt sind
      //(Unsere Farben sind natürlich schöner)
      blocklyColourTheme: "bwinf",
      //Wie viel Holz kann der Roboter auf einmal bei sich tragen
      bagSize: 1,
      //Wie viel Holz kann in jeen Kamin gelegt werden
      containerSize: 1,
      //Wie viele Plattformen dürfen konstrueiert werden
      nbPlatforms: 100,
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         easy: 12,
         medium: 12,
         hard: 20
      },
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         //Bei true werden die Blöcke nach Kategorien gruppiert. 
         //Dies kann Sinn ergebene, wenn sehr viele Blöcke zur Verfügung stehen.
         //Dies ist notwendig, wenn Funktionen oder Variablen (zum selber erstellen/nicht vordefiniert) benutzt werden.
         groupByCategory: false,
         //Alle Roboter spezifischen Blocks, welche für die Version jeweils genutzt werden.
         generatedBlocks: {
            robot: {
               easy: ["forward", "jump", "withdrawObject", "dropObject"],
               medium: ["forward", "withdrawObject", "dropObject",
                  "dropPlatformInFront", "dropPlatformAbove", "jump"
               ],
               hard: ["forward", "backwards", "turnAround", "jump", "withdrawObject", "dropObject"],
            }
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               easy: ["controls_repeat"],
               medium: ["controls_repeat"],
               hard: ["controls_repeat"],
            }
         }
      },
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version **
      easy: [{
         //Jede Zahl steht für ein spezifisches Object
         //5 ist zum Beispiel ein Stapel Holz, 4 ist ein Kamin und 2 eine Plattform
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1],
            [1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
         ],
         //Definieren, wo der Roboter starten soll
         //dir: Gibt die Richtung an, in die der Roboter bei Start schaut
         initItems: [{
            row: 3,
            col: 1,
            dir: 0,
            type: "robot"
         }, ]
      }],
      //Version ***
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 5, 4, 1, 1],
            [1, 1, 1, 1, 1, 1, 2, 2, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [2, 2, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 5,
            col: 1,
            dir: 0,
            type: "robot"
         }, ]
      }],
      //Version ****
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 5, 4, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 5, 4, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
         ],
         initItems: [{
            row: 7,
            col: 10,
            dir: 2,
            type: "robot"
         }]
      }]
   };
   initBlocklySubTask(subTask);
}

//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
initWrapper(initTask, ["easy", "medium", "hard"], null, true);