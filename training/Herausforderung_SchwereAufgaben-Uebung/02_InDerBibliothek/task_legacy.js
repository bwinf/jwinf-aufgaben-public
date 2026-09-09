function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false,
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "packages",
      //Gibt an, ob die Programme gespeichert und geladen werden können über das Menu auf der rechten Seite.
      //Für Wettbewerbe immer auf true setzen
      hideSaveOrLoad: false,
      //Die BWINF-spezifischen Farben. Bitte in jeder Aufgabendatei laden, da die Blocktypen sonst nicht konsistent eingefärbt sind
      //(Unsere Farben sind natürlich schöner)
      blocklyColourTheme: "bwinf",
      //Wie viele Bücher kann der Roboter maximal aufsammeln/bei sich tragen
      bagSize: 100,
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         // basic: 100,
         easy: 25,
         medium: 100,
         hard: 100,
      },
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         //Für easy, medium und hard werden die Blöcke nach Kategorie gruppiert, da hier 
         //die komplette Kategorie "Variablen" eingebunden ist und die 
         //Funktionen bzw. die Anzeige nur korrekt ist bei Gruppierung.
         groupByCategory: {
            // basic: false,
            easy: true,
            medium: true,
            hard: true
         },
         //Alle Roboter spezifischen Blocks, welche genutzt werden.
         generatedBlocks: {
            robot: ["forward", "backwards", "jump", "withdrawNum", "dropNum", "containerSize", "nbWithdrawables"],
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            //Für alles hard wird die komplette Variablen-Funktionalität inkludiert
            //Dies erlaubt den Usern selbst Variablen zu erstellen.
            wholeCategories: {
               basic: [],
               easy: [],
               medium: [],
               hard: ["variables"],
            },
            //Weitere allgemeine Blöcke für jeweilige Versionen
            singleBlocks: {
               shared: [],
               easy: ["controls_repeat", "controls_if", "controls_if_else", "math_number", "math_arithmetic",
                  "logic_compare", "procedures_defnoreturn"
               ],
               medium: ["controls_repeat", "controls_if", "controls_if_else", "math_number", "math_arithmetic",
                  "logic_compare", "procedures_defnoreturn"
               ],
               hard: ["controls_repeat", "controls_if", "controls_if_else", "math_number", "math_arithmetic",
                  "logic_compare", "procedures_defnoreturn"
               ],

            }
         },
         //Falls nicht selbst Variablen definiert werden sollen, sondern Variablen
         //vorgegeben werden, können die Namen hier definiert werden.
         variables: {
            // basic: [],
            easy: ["RoboterGedächtnis"],
            medium: ["RoboterGedächtnis"],
            hard: []
         },
         //welche Funktionen für Variablen zur Verfügung stehen.
         variablesOnlyBlocks: {
            // basic: [],
            easy: ['set', 'get'],
            medium: ['set', 'get', 'incr'],
            hard: ['set', 'get', 'incr'],
         }
      }
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version *
      //Eigentlich verwenden wir nur easy bis hard, aber hier wurde
      //für mehr Aufgabenbeispiele auch eine basic Version erstellt
      // basic: [{
      //    //Jede Zahl steht für ein spezifisches Object
      //    //6 ist zum Beispiel ein Box-Container und 5 ein Buch-Container
      //    tiles: [
      //       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      //       [1, 1, 1, 1, 6, 6, 1, 1, 1, 1, 1],
      //       [1, 1, 8, 7, 7, 8, 1, 1, 1, 1, 1],
      //       [1, 1, 6, 1, 1, 1, 1, 1, 1, 5, 1],
      //       [1, 1, 8, 7, 7, 7, 7, 7, 7, 7, 8],
      //       [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      //       [7, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1],
      //    ],
      //    //Definieren, wo der Roboter starten soll
      //    //dir: Gibt an, in welche Richtung der Roboter bei Start schaut
      //    initItems: [{
      //             row: 5,
      //             col: 0,
      //             dir: 0,
      //             type: "robot"
      //          },
      //          //Legt eine Box in den Box-Container und sag
      //          //wie viele Bücher einsortiert werden müssen (containerSize:)
      //          //row und col muss mit der Box oben (6)
      //          //übereinstimmen
      //          {
      //             row: 1,
      //             col: 4,
      //             type: "box",
      //             containerSize: 3
      //          },
      //          {
      //             row: 1,
      //             col: 5,
      //             type: "box",
      //             containerSize: 4
      //          },
      //          {
      //             row: 3,
      //             col: 2,
      //             type: "box",
      //             containerSize: 2
      //          },
      //          //Hier wird in alle Büchercontainer Bücher gefüllt
      //          //Die erste Zahl (6) gibt an, wie viele Bücher
      //          //row und col muss mit dem zu füllenden Büchercontainer oben (5)
      //          //übereinstimmen
      //       ].concat(initArray(6, {
      //          row: 3,
      //          col: 9,
      //          type: "books_outside"
      //       }))
      //       .concat(initArray(3, {
      //          row: 5,
      //          col: 1,
      //          type: "books_outside"
      //       }))
      // }],
      //Version **
      easy: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 8, 7, 7, 7, 8, 1],
            [1, 1, 1, 1, 1, 5, 1, 6, 1, 1, 1],
            [1, 1, 1, 1, 8, 7, 7, 7, 8, 1, 1],
            [1, 1, 1, 1, 5, 1, 6, 1, 1, 1, 1],
            [1, 1, 1, 8, 7, 7, 7, 8, 1, 1, 1],
            [1, 1, 1, 5, 1, 6, 1, 1, 1, 1, 1],
            [1, 1, 8, 7, 7, 7, 8, 1, 1, 1, 1],
            [1, 1, 5, 1, 6, 1, 1, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 8, 1, 1, 1, 1, 1],
         ],
         initItems: [{
                  row: 8,
                  col: 3,
                  dir: 0,
                  type: "robot"
               },
               {
                  row: 2,
                  col: 7,
                  type: "box",
                  containerSize: 6
               },
               {
                  row: 4,
                  col: 6,
                  type: "box",
                  containerSize: 3
               },
               {
                  row: 6,
                  col: 5,
                  type: "box",
                  containerSize: 1
               },
               {
                  row: 8,
                  col: 4,
                  type: "box",
                  containerSize: 4
               }
            ].concat(initArray(8, {
               row: 2,
               col: 5,
               type: "books_outside"
            }))
            .concat(initArray(3, {
               row: 4,
               col: 4,
               type: "books_outside"
            }))
            .concat(initArray(5, {
               row: 6,
               col: 3,
               type: "books_outside"
            }))
            .concat(initArray(6, {
               row: 8,
               col: 2,
               type: "books_outside"
            }))
      },
      {
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 8, 7, 7, 7, 8, 1],
            [1, 1, 1, 1, 1, 5, 1, 6, 1, 1, 1],
            [1, 1, 1, 1, 8, 7, 7, 7, 8, 1, 1],
            [1, 1, 1, 1, 5, 1, 6, 1, 1, 1, 1],
            [1, 1, 1, 8, 7, 7, 7, 8, 1, 1, 1],
            [1, 1, 1, 5, 1, 6, 1, 1, 1, 1, 1],
            [1, 1, 8, 7, 7, 7, 8, 1, 1, 1, 1],
            [1, 1, 5, 1, 6, 1, 1, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 8, 1, 1, 1, 1, 1],
         ],
         initItems: [{
                  row: 8,
                  col: 3,
                  dir: 0,
                  type: "robot"
               },
               {
                  row: 2,
                  col: 7,
                  type: "box",
                  containerSize: 2
               },
               {
                  row: 4,
                  col: 6,
                  type: "box",
                  containerSize: 5
               },
               {
                  row: 6,
                  col: 5,
                  type: "box",
                  containerSize: 12
               },
               {
                  row: 8,
                  col: 4,
                  type: "box",
                  containerSize: 7
               }
            ].concat(initArray(13, {
               row: 2,
               col: 5,
               type: "books_outside"
            }))
            .concat(initArray(5, {
               row: 4,
               col: 4,
               type: "books_outside"
            }))
            .concat(initArray(13, {
               row: 6,
               col: 3,
               type: "books_outside"
            }))
            .concat(initArray(9, {
               row: 8,
               col: 2,
               type: "books_outside"
            }))
      }],
      //Version ***
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 7, 7, 7, 8, 1, 1, 1],
            [1, 1, 1, 5, 1, 6, 6, 6, 1, 1, 1, 1],
            [1, 1, 8, 7, 7, 7, 7, 7, 7, 8, 1, 1],
            [1, 1, 1, 5, 1, 6, 6, 6, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 7, 7, 7, 8, 1, 1, 1],
            [1, 1, 1, 5, 1, 6, 6, 6, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
         ],
         initItems: [{
                  row: 6,
                  col: 4,
                  dir: 0,
                  type: "robot"
               },
               {
                  row: 2,
                  col: 5,
                  type: "box",
                  containerSize: 1
               },
               {
                  row: 2,
                  col: 6,
                  type: "box",
                  containerSize: 4
               },
               {
                  row: 2,
                  col: 7,
                  type: "box",
                  containerSize: 3
               },
               {
                  row: 4,
                  col: 5,
                  type: "box",
                  containerSize: 2
               },
               {
                  row: 4,
                  col: 6,
                  type: "box",
                  containerSize: 3
               },
               {
                  row: 4,
                  col: 7,
                  type: "box",
                  containerSize: 2
               },
               {
                  row: 6,
                  col: 5,
                  type: "box",
                  containerSize: 2
               },
               {
                  row: 6,
                  col: 6,
                  type: "box",
                  containerSize: 1
               },
               {
                  row: 6,
                  col: 7,
                  type: "box",
                  containerSize: 1
               }
            ].concat(initArray(9, {
               row: 2,
               col: 3,
               type: "books_outside"
            }))
            .concat(initArray(8, {
               row: 4,
               col: 3,
               type: "books_outside"
            }))
            .concat(initArray(6, {
               row: 6,
               col: 3,
               type: "books_outside"
            }))
      },
      {
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 7, 7, 7, 8, 1, 1, 1],
            [1, 1, 1, 5, 1, 6, 6, 6, 1, 1, 1, 1],
            [1, 1, 8, 7, 7, 7, 7, 7, 7, 8, 1, 1],
            [1, 1, 1, 5, 1, 6, 6, 6, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 7, 7, 7, 8, 1, 1, 1],
            [1, 1, 1, 5, 1, 6, 6, 6, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
         ],
         initItems: [{
                  row: 6,
                  col: 4,
                  dir: 0,
                  type: "robot"
               },
               {
                  row: 2,
                  col: 5,
                  type: "box",
                  containerSize: 3
               },
               {
                  row: 2,
                  col: 6,
                  type: "box",
                  containerSize: 4
               },
               {
                  row: 2,
                  col: 7,
                  type: "box",
                  containerSize: 6
               },
               {
                  row: 4,
                  col: 5,
                  type: "box",
                  containerSize: 1
               },
               {
                  row: 4,
                  col: 6,
                  type: "box",
                  containerSize: 1
               },
               {
                  row: 4,
                  col: 7,
                  type: "box",
                  containerSize: 1
               },
               {
                  row: 6,
                  col: 5,
                  type: "box",
                  containerSize: 5
               },
               {
                  row: 6,
                  col: 6,
                  type: "box",
                  containerSize: 9
               },
               {
                  row: 6,
                  col: 7,
                  type: "box",
                  containerSize: 2
               }
            ].concat(initArray(14, {
               row: 2,
               col: 3,
               type: "books_outside"
            }))
            .concat(initArray(4, {
               row: 4,
               col: 3,
               type: "books_outside"
            }))
            .concat(initArray(17, {
               row: 6,
               col: 3,
               type: "books_outside"
            }))
      }],
      //Version ****
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 8, 7, 7, 7, 7, 7, 7, 7, 8, 1],
            [1, 1, 1, 5, 1, 6, 6, 6, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 7, 7, 7, 8, 1, 1, 1],
            [1, 1, 1, 5, 1, 6, 6, 6, 1, 1, 1, 1],
            [1, 1, 1, 8, 7, 7, 7, 7, 7, 7, 8, 1],
            [1, 1, 1, 5, 1, 6, 6, 6, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 7, 7, 7, 7, 8, 1, 1],
         ],
         initItems: [{
                  row: 6,
                  col: 4,
                  dir: 0,
                  type: "robot"
               },
               {
                  row: 2,
                  col: 6,
                  type: "box",
                  containerSize: 1
               },
               {
                  row: 2,
                  col: 7,
                  type: "box",
                  containerSize: 4
               },
               {
                  row: 2,
                  col: 5,
                  type: "box",
                  containerSize: 3
               },
               {
                  row: 4,
                  col: 5,
                  type: "box",
                  containerSize: 3
               },
               {
                  row: 4,
                  col: 6,
                  type: "box",
                  containerSize: 3
               },
               {
                  row: 4,
                  col: 7,
                  type: "box",
                  containerSize: 1
               },
               {
                  row: 6,
                  col: 5,
                  type: "box",
                  containerSize: 3
               },
               {
                  row: 6,
                  col: 6,
                  type: "box",
                  containerSize: 2
               },
               {
                  row: 6,
                  col: 7,
                  type: "box",
                  containerSize: 4
               },
            ].concat(initArray(9, {
               row: 2,
               col: 3,
               type: "books_outside"
            }))
            .concat(initArray(10, {
               row: 4,
               col: 3,
               type: "books_outside"
            }))
            .concat(initArray(7, {
               row: 6,
               col: 3,
               type: "books_outside"
            }))
      },
      {
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 8, 7, 7, 7, 7, 7, 7, 7, 8, 1],
            [1, 1, 1, 5, 1, 6, 6, 6, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 7, 7, 7, 8, 1, 1, 1],
            [1, 1, 1, 5, 1, 6, 6, 6, 1, 1, 1, 1],
            [1, 1, 1, 8, 7, 7, 7, 7, 7, 7, 8, 1],
            [1, 1, 1, 5, 1, 6, 6, 6, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 7, 7, 7, 7, 8, 1, 1],
         ],
         initItems: [{
                  row: 6,
                  col: 4,
                  dir: 0,
                  type: "robot"
               },
               {
                  row: 2,
                  col: 6,
                  type: "box",
                  containerSize: 3
               },
               {
                  row: 2,
                  col: 7,
                  type: "box",
                  containerSize: 3
               },
               {
                  row: 2,
                  col: 5,
                  type: "box",
                  containerSize: 3
               },
               {
                  row: 4,
                  col: 5,
                  type: "box",
                  containerSize: 4
               },
               {
                  row: 4,
                  col: 6,
                  type: "box",
                  containerSize: 5
               },
               {
                  row: 4,
                  col: 7,
                  type: "box",
                  containerSize: 6
               },
               {
                  row: 6,
                  col: 5,
                  type: "box",
                  containerSize: 8
               },
               {
                  row: 6,
                  col: 6,
                  type: "box",
                  containerSize: 1
               },
               {
                  row: 6,
                  col: 7,
                  type: "box",
                  containerSize: 2
               },
            ].concat(initArray(9, {
               row: 2,
               col: 3,
               type: "books_outside"
            }))
            .concat(initArray(12, {
               row: 4,
               col: 3,
               type: "books_outside"
            }))
            .concat(initArray(15, {
               row: 6,
               col: 3,
               type: "books_outside"
            }))
      }]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird.
// initWrapper(initTask, ["basic", "easy", "medium", "hard"], "basic", true);
initWrapper(initTask, ["easy", "medium", "hard"], null, true);