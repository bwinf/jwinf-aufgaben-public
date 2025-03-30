function initTask(subTask) {
   subTask.gridInfos = {
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "sokoban",
      blocklyColourTheme: "bwinf",
      //Mit true wird eine Nummerierung des grids angezeigt.
      //Die Nummberierung beginnt bei 1
      showLabels: true,
      hideSaveOrLoad: true,
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         easy: 20,
         medium: 30,
         hard: 40
      },
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         groupByCategory: false,
         //Alle Roboter spezifischen Blocks, welche für die Version jeweils genutzt werden.
         generatedBlocks: {
            robot: {
               easy: ["pushObject", "forward", "right", "readNumber", "col"],
               medium: ["pushObject", "forward", "right", "left", "readNumber", "col", "row"],
               hard: ["pushObject", "forward", "backwards", "right", "left", "readNumber", "col", "row"],
            }
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            wholeCategories: false,
            singleBlocks: {
               //Alle Blöcke bei shared weden für alle Versionen angezeigt
               shared: ["controls_repeat", "controls_whileUntil", "logic_compare"],
               medium: ["math_number", "math_arithmetic"],
               hard: ["controls_repeat_ext", "math_number", "math_arithmetic"]
            }
         },
         //Für jeder Version stehen vordefinierte Variablen zur Verfügung
         variables: {
            easy: ["Spalte"],
            medium: ["Zeile", "Spalte"],
            hard: ["AnzahlKisten", "Spalte"]
         },
         //welche Funktionen für Variablen zur Verfügung stehen.
         variablesOnlyBlocks: {
            easy: ['get', 'set'],
            medium: ['set', 'get'],
            hard: ['set', 'get'],
         }
      }
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version **
      easy: [{
            //Testfall 1
            //Jede Zahl steht für ein spezifisches Object
            //2 ist zum Beispiel die Wand und 3 die Markierung
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 2],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ],
            //Definieren, wo der Roboter starten soll
            //dir: Definiert in welche Richtung der Roboter bei Start schaut
            initItems: [{
                  row: 1,
                  col: 1,
                  dir: 0,
                  type: "robot"
               },
               //So wird eine Zahl auf ein Feld geschrieben.
               {
                  row: 1,
                  col: 2,
                  type: "number",
                  value: 9
               },
               //So wird die Box auf ein Feld gestellt
               {
                  row: 2,
                  col: 8,
                  type: "box"
               }
            ]
         },
         {
            //Testfall 2
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 2],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [{
                  row: 1,
                  col: 1,
                  dir: 0,
                  type: "robot"
               },
               {
                  row: 1,
                  col: 2,
                  type: "number",
                  value: 5
               },
               {
                  row: 2,
                  col: 4,
                  type: "box"
               }
            ]
         },
         {
            //Testfall 3
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 2],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [{
                  row: 1,
                  col: 1,
                  dir: 0,
                  type: "robot"
               },
               {
                  row: 1,
                  col: 2,
                  type: "number",
                  value: 8
               },
               {
                  row: 2,
                  col: 7,
                  type: "box"
               }
            ]
         }
      ],
      //Version ***
      medium: [{
            //Testfall 1
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [{
                  row: 1,
                  col: 1,
                  dir: 0,
                  type: "robot"
               },
               {
                  row: 1,
                  col: 2,
                  type: "number",
                  value: 4
               },
               {
                  row: 1,
                  col: 3,
                  type: "number",
                  value: 8
               },
               {
                  row: 3,
                  col: 7,
                  type: "box"
               }
            ]
         },
         {
            //Testfall 2
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [{
                  row: 1,
                  col: 1,
                  dir: 0,
                  type: "robot"
               },
               {
                  row: 1,
                  col: 2,
                  type: "number",
                  value: 5
               },
               {
                  row: 1,
                  col: 3,
                  type: "number",
                  value: 5
               },
               {
                  row: 4,
                  col: 4,
                  type: "box"
               }
            ]
         },
         {
            //Testfall 3
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [{
                  row: 1,
                  col: 1,
                  dir: 0,
                  type: "robot"
               },
               {
                  row: 1,
                  col: 2,
                  type: "number",
                  value: 6
               },
               {
                  row: 1,
                  col: 3,
                  type: "number",
                  value: 10
               },
               {
                  row: 5,
                  col: 9,
                  type: "box"
               }
            ]
         }
      ],
      //Version ****
      hard: [{
            //Testfall 1
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [{
                  row: 5,
                  col: 1,
                  dir: 1,
                  type: "robot"
               },
               {
                  row: 6,
                  col: 1,
                  type: "number",
                  value: 4
               },
               {
                  row: 6,
                  col: 3,
                  type: "number",
                  value: 4
               },
               {
                  row: 6,
                  col: 4,
                  type: "number",
                  value: 6
               },
               {
                  row: 6,
                  col: 5,
                  type: "number",
                  value: 3
               },
               {
                  row: 6,
                  col: 6,
                  type: "number",
                  value: 5
               },
               {
                  row: 3,
                  col: 3,
                  type: "box"
               },
               {
                  row: 5,
                  col: 4,
                  type: "box"
               },
               {
                  row: 2,
                  col: 5,
                  type: "box"
               },
               {
                  row: 4,
                  col: 6,
                  type: "box"
               }
            ]
         },
         {
            //Testfall 2
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [{
                  row: 5,
                  col: 1,
                  dir: 1,
                  type: "robot"
               },
               {
                  row: 6,
                  col: 1,
                  type: "number",
                  value: 8
               },
               {
                  row: 6,
                  col: 3,
                  type: "number",
                  value: 4
               },
               {
                  row: 6,
                  col: 4,
                  type: "number",
                  value: 6
               },
               {
                  row: 6,
                  col: 5,
                  type: "number",
                  value: 4
               },
               {
                  row: 6,
                  col: 6,
                  type: "number",
                  value: 5
               },
               {
                  row: 6,
                  col: 7,
                  type: "number",
                  value: 3
               },
               {
                  row: 6,
                  col: 8,
                  type: "number",
                  value: 4
               },
               {
                  row: 6,
                  col: 9,
                  type: "number",
                  value: 3
               },
               {
                  row: 6,
                  col: 10,
                  type: "number",
                  value: 5
               },
               {
                  row: 3,
                  col: 3,
                  type: "box"
               },
               {
                  row: 5,
                  col: 4,
                  type: "box"
               },
               {
                  row: 3,
                  col: 5,
                  type: "box"
               },
               {
                  row: 4,
                  col: 6,
                  type: "box"
               },
               {
                  row: 2,
                  col: 7,
                  type: "box"
               },
               {
                  row: 3,
                  col: 8,
                  type: "box"
               },
               {
                  row: 2,
                  col: 9,
                  type: "box"
               },
               {
                  row: 4,
                  col: 10,
                  type: "box"
               }
            ]
         },
         {
            //Testfall 3
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [{
                  row: 5,
                  col: 1,
                  dir: 1,
                  type: "robot"
               },
               {
                  row: 6,
                  col: 1,
                  type: "number",
                  value: 5
               },
               {
                  row: 6,
                  col: 3,
                  type: "number",
                  value: 5
               },
               {
                  row: 6,
                  col: 4,
                  type: "number",
                  value: 3
               },
               {
                  row: 6,
                  col: 5,
                  type: "number",
                  value: 4
               },
               {
                  row: 6,
                  col: 6,
                  type: "number",
                  value: 6
               },
               {
                  row: 6,
                  col: 7,
                  type: "number",
                  value: 3
               },
               {
                  row: 4,
                  col: 3,
                  type: "box"
               },
               {
                  row: 2,
                  col: 4,
                  type: "box"
               },
               {
                  row: 3,
                  col: 5,
                  type: "box"
               },
               {
                  row: 5,
                  col: 6,
                  type: "box"
               },
               {
                  row: 2,
                  col: 7,
                  type: "box"
               }
            ]
         },
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
initWrapper(initTask, ["easy", "medium", "hard"], null, true);