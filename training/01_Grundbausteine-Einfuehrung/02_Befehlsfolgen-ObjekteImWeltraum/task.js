function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false,
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "objects_in_space",
      //Die BWINF-spezifischen Farben. Bitte in jeder Aufgabendatei laden, da die Blocktypen sonst nicht konsistent eingefärbt sind
      //(Unsere Farben sind natürlich schöner)
      blocklyColourTheme: "bwinf",
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         easy: 10,
         medium: 10,
         hard: 20
      },
      //Gibt an, ob die Programme gespeichert und geladen werden können über das Menu auf der rechten Seite.
      //Für Wettbewerbe immer auf true setzen
      hideSaveOrLoad: true,
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         //Bei true werden die Blöcke nach Kategorien gruppiert. 
         //Dies kann Sinn ergebene, wenn sehr viele Blöcke zur Verfügung stehen.
         //Dies ist notwendig, wenn Funktionen oder Variablen (zum selber erstellen/nicht vordefiniert) benutzt werden.
         groupByCategory: false,
         generatedBlocks: {
            //Hier stehen für alle Versionen die gleichen Blöcke zur Verfügung
            robot: ["left", "right", "forward", "withdrawObject"]
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               easy: [],
               medium: [],
               hard: []
            }
         }
      }
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version **
      easy: [{
         //Jede Zahl steht für ein spezifisches Object
         //3 ist zum Beispiel Sterne und 4 ein Object, welches eingesammelt werden soll
         tiles: [
            [3, 1, 1, 1, 1],
            [1, 1, 1, 1, 3],
            [1, 1, 1, 1, 1],
            [1, 1, 4, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 3, 1, 1, 1],
         ],
         //Definieren, wo der Roboter starten soll
         //dir: Gibt die Richtung an, in die der Roboter bei Start schaut
         initItems: [{
            row: 2,
            col: 0,
            dir: 0,
            type: "robot"
         }, ]
      }],
      //Version ***
      medium: [{
         tiles: [
            [1, 1, 1, 1, 3],
            [3, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 5, 1, 1],
            [1, 4, 1, 1, 1],
            [1, 1, 1, 3, 1],
         ],
         initItems: [{
            row: 3,
            col: 0,
            dir: 0,
            type: "robot"
         }]
      }],
      //Version ****
      hard: [{
         tiles: [
            [6, 1, 1, 1, 3],
            [1, 1, 6, 1, 1],
            [1, 6, 6, 5, 1],
            [1, 1, 6, 6, 1],
            [1, 1, 4, 1, 1],
            [3, 1, 6, 1, 1],
         ],
         initItems: [{
            row: 5,
            col: 3,
            dir: 3,
            type: "robot"
         }]
      }]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
initWrapper(initTask, ["easy", "medium", "hard"], null, true);