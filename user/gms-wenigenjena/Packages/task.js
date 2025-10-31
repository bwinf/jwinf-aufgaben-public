function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false, // Nicht für deutsche Plattform übersetzt.
      timeoutMinutes: 15, // Nach 15 Minuten wird eine Warnung angezeigt.
      // Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen.
      contextType: "packages",
      // Gibt an, ob die Programme gespeichert und geladen werden können über das Menu auf der rechten Seite.
      hideSaveOrLoad: false, // Speichern und Laden von Lösungen möglich.
      // Hier können lokale language-Strings von Bausteinen, Fehler- und Erfolgsmeldungen definiert werden.
      languageStrings: {
         blocklyRobot_lib: {
            label: {
               "nbWithdrawables": "Anzahl Bücher auf Stapel",
            },
            messages: {
               shared: {
                  nothingToPickUp: "An dieser Stelle gibt es nichts zum Aufheben oder nicht so viele Bücher, wie der Roboter aufheben möchte."
               },
               easy: {
                  successContainersFilled: "Bravo, die Kiste ist gepackt. Das Paket kann jetzt ausgeliefert werden!",
               },
            }
         }
      },
      // Die BWINF-spezifischen Farben. Bitte in jeder Aufgabendatei laden, da die Blocktypen sonst nicht konsistent eingefärbt sind
      blocklyColourTheme: "bwinf",
      // Wie viele Bücher kann der Roboter maximal aufsammeln/bei sich tragen
      bagSize: 1000,
      // Gibt an, wie viele Bausteine insgesamt für welche Versionen maximal zur Verfügung stehen.
      maxInstructions: {
         easy: 20,
         medium: 20,
         hard: 50,
      },
      // Hier könnten einzelne Bausteine limitiert werden.
      // limitedUses : [
      //    { blocks: ["jump"], nbUses: { hard: 10 }},
      // ],

      // Hier kann angegeben werden, welche Bausteine für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         // Für easy, medium und hard werden die Bausteine nach Kategorie gruppiert. 
         // Wenn wholeCategories Variablen oder Funktionen geladen werden, dann ist dies notwendig.
         groupByCategory: {
            easy: false,
            medium: false,
            hard: true
         },
         // Alle Roboter spezifischen Blocks, welche genutzt werden.
         generatedBlocks: {
            robot: {
               shared: ["forward", "backwards", "withdrawNum", "dropNum", "nbWithdrawables"],
               medium: ["jump"],
               hard: ["jump"]
            }
         },
         // Allgemeine Bausteine wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            // Für hard wird die komplette Variablen-Funktionalität inkludiert
            // Dies erlaubt den Usern selbst Variablen zu erstellen.
            wholeCategories: {
               easy: [],
               medium: [],
               hard: ["variables"],
            },
            // Weitere allgemeine Bausteine für jeweilige Versionen
            singleBlocks: {
               shared: [],
               easy: ["controls_repeat", "math_number", "math_arithmetic"],
               medium: ["controls_repeat", "math_number", "math_arithmetic", "lists_create_with_empty", "lists_setIndex_insert_last", "lists_setIndex", "lists_getIndex"],
               hard: ["controls_repeat", "math_number", "math_arithmetic", "lists_create_with_empty", "lists_setIndex_insert_last", "lists_setIndex", "lists_getIndex", "lists_length"],
            }
         },
         // Falls nicht selbst Variablen definiert werden sollen, sondern Variablen
         // vorgegeben werden, können die Namen hier definiert werden.
         variables: {
            easy: ["RoboterGedächtnis"],
            medium: ["Liste"],
            hard: []
         },
         // welche Funktionen für Variablen zur Verfügung stehen. Möglichkeiten sind "set", "get" und "incr"
         variablesOnlyBlocks: {
            easy: ['set', 'get'],
            medium: ['set', 'get'],
            hard: ['set', 'get'],
         }
      },
      // Dies ist die Standardendbedingung für den Context "packages" und muss nicht extra geladen werden. Es wird am Ende überprüft, ob die Kisten mit containerSize-Büchern gefüllt sind. containerSize wird weiter unten definiert.
      // checkEndCondition: robotEndConditions.checkContainersFilled
   };

   // Hier werden die Aufgaben definiert
   // Index row und col starten bei 0
   subTask.data = {
      // Version **
      easy: [{
            tiles: [
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 5, 5, 5, 1, 2, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 8, 1],
            ],
            initItems: [{
                     row: 1,
                     col: 1,
                     dir: 0,
                     type: "robot"
                  },
                  {
                     row: 1,
                     col: 6,
                     type: "box",
                     containerSize: 16
                  },
               ].concat(initArray(8, {
                  row: 1,
                  col: 2,
                  type: "books"
               }))
               .concat(initArray(3, {
                  row: 1,
                  col: 3,
                  type: "books"
               }))
               .concat(initArray(5, {
                  row: 1,
                  col: 4,
                  type: "books"
               }))
         },
         {
            tiles: [
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 5, 5, 5, 1, 2, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 8, 1],
            ],
            initItems: [{
                     row: 1,
                     col: 1,
                     dir: 0,
                     type: "robot"
                  },
                  {
                     row: 1,
                     col: 6,
                     type: "box",
                     containerSize: 31
                  },
               ]
               .concat(initArray(13, {
                  row: 1,
                  col: 2,
                  type: "books"
               }))
               .concat(initArray(11, {
                  row: 1,
                  col: 3,
                  type: "books"
               }))
               .concat(initArray(7, {
                  row: 1,
                  col: 4,
                  type: "books"
               }))
         },
         {
            tiles: [
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 5, 5, 5, 1, 2, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 8, 1],
            ],
            initItems: [{
                     row: 1,
                     col: 1,
                     dir: 0,
                     type: "robot"
                  },
                  {
                     row: 1,
                     col: 6,
                     type: "box",
                     containerSize: 45
                  },
               ].concat(initArray(12, {
                  row: 1,
                  col: 2,
                  type: "books"
               }))
               .concat(initArray(6, {
                  row: 1,
                  col: 3,
                  type: "books"
               }))
               .concat(initArray(27, {
                  row: 1,
                  col: 4,
                  type: "books"
               }))
         },
      ],
      // Version ***
      medium: [{
            tiles: [
               [1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
               [1, 1, 1, 5, 5, 5, 5, 5, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
            ],
            initItems: [{
                     row: 2,
                     col: 2,
                     dir: 0,
                     type: "robot"
                  },
                  {
                     row: 0,
                     col: 3,
                     type: "box",
                     containerSize: 9
                  },
                  {
                     row: 0,
                     col: 4,
                     type: "box",
                     containerSize: 8
                  },
                  {
                     row: 0,
                     col: 5,
                     type: "box",
                     containerSize: 6
                  },
                  {
                     row: 0,
                     col: 6,
                     type: "box",
                     containerSize: 3
                  },
                  {
                     row: 0,
                     col: 7,
                     type: "box",
                     containerSize: 5
                  },
               ].concat(initArray(9, {
                  row: 2,
                  col: 3,
                  type: "books"
               }))
               .concat(initArray(8, {
                  row: 2,
                  col: 4,
                  type: "books"
               }))
               .concat(initArray(6, {
                  row: 2,
                  col: 5,
                  type: "books"
               }))
               .concat(initArray(3, {
                  row: 2,
                  col: 6,
                  type: "books"
               }))
               .concat(initArray(5, {
                  row: 2,
                  col: 7,
                  type: "books"
               }))
         },
         {
            tiles: [
               [1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
               [1, 1, 1, 5, 5, 5, 5, 5, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
            ],
            initItems: [{
                     row: 2,
                     col: 2,
                     dir: 0,
                     type: "robot"
                  },
                  {
                     row: 0,
                     col: 3,
                     type: "box",
                     containerSize: 12
                  },
                  {
                     row: 0,
                     col: 4,
                     type: "box",
                     containerSize: 23
                  },
                  {
                     row: 0,
                     col: 5,
                     type: "box",
                     containerSize: 5
                  },
                  {
                     row: 0,
                     col: 6,
                     type: "box",
                     containerSize: 54
                  },
                  {
                     row: 0,
                     col: 7,
                     type: "box",
                     containerSize: 3
                  },
               ].concat(initArray(12, {
                  row: 2,
                  col: 3,
                  type: "books"
               }))
               .concat(initArray(23, {
                  row: 2,
                  col: 4,
                  type: "books"
               }))
               .concat(initArray(5, {
                  row: 2,
                  col: 5,
                  type: "books"
               }))
               .concat(initArray(54, {
                  row: 2,
                  col: 6,
                  type: "books"
               }))
               .concat(initArray(3, {
                  row: 2,
                  col: 7,
                  type: "books"
               }))
         },
         {
            tiles: [
               [1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
               [1, 1, 1, 5, 5, 5, 5, 5, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
            ],
            initItems: [{
                     row: 2,
                     col: 2,
                     dir: 0,
                     type: "robot"
                  },
                  {
                     row: 0,
                     col: 3,
                     type: "box",
                     containerSize: 1
                  },
                  {
                     row: 0,
                     col: 4,
                     type: "box",
                     containerSize: 2
                  },
                  {
                     row: 0,
                     col: 5,
                     type: "box",
                     containerSize: 3
                  },
                  {
                     row: 0,
                     col: 6,
                     type: "box",
                     containerSize: 4
                  },
                  {
                     row: 0,
                     col: 7,
                     type: "box",
                     containerSize: 5
                  },
               ].concat(initArray(1, {
                  row: 2,
                  col: 3,
                  type: "books"
               }))
               .concat(initArray(2, {
                  row: 2,
                  col: 4,
                  type: "books"
               }))
               .concat(initArray(3, {
                  row: 2,
                  col: 5,
                  type: "books"
               }))
               .concat(initArray(4, {
                  row: 2,
                  col: 6,
                  type: "books"
               }))
               .concat(initArray(5, {
                  row: 2,
                  col: 7,
                  type: "books"
               }))
         }
      ],
      // Version ****
      hard: [{
            tiles: [
               [1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
               [1, 1, 1, 5, 5, 5, 5, 5, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
               [1, 1, 1, 5, 5, 5, 5, 5, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
            ],
            initItems: [{
                     row: 4,
                     col: 2,
                     dir: 0,
                     type: "robot"
                  },
                  {
                     row: 0,
                     col: 3,
                     type: "box",
                     containerSize: 13
                  },
                  {
                     row: 0,
                     col: 4,
                     type: "box",
                     containerSize: 23
                  },
                  {
                     row: 0,
                     col: 5,
                     type: "box",
                     containerSize: 64
                  },
                  {
                     row: 0,
                     col: 6,
                     type: "box",
                     containerSize: 32
                  },
                  {
                     row: 0,
                     col: 7,
                     type: "box",
                     containerSize: 15
                  },
               ].concat(initArray(9, {
                  row: 4,
                  col: 3,
                  type: "books"
               }))
               .concat(initArray(10, {
                  row: 4,
                  col: 4,
                  type: "books"
               }))
               .concat(initArray(7, {
                  row: 4,
                  col: 5,
                  type: "books"
               }))
               .concat(initArray(10, {
                  row: 4,
                  col: 6,
                  type: "books"
               }))
               .concat(initArray(7, {
                  row: 4,
                  col: 7,
                  type: "books"
               }))
               .concat(initArray(4, {
                  row: 2,
                  col: 3,
                  type: "books"
               }))
               .concat(initArray(13, {
                  row: 2,
                  col: 4,
                  type: "books"
               }))
               .concat(initArray(57, {
                  row: 2,
                  col: 5,
                  type: "books"
               }))
               .concat(initArray(22, {
                  row: 2,
                  col: 6,
                  type: "books"
               }))
               .concat(initArray(8, {
                  row: 2,
                  col: 7,
                  type: "books"
               }))
         },
         {
            tiles: [
               [1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
               [1, 1, 1, 5, 5, 5, 5, 5, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
               [1, 1, 1, 5, 5, 5, 5, 5, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
            ],
            initItems: [{
                     row: 4,
                     col: 2,
                     dir: 0,
                     type: "robot"
                  },
                  {
                     row: 0,
                     col: 3,
                     type: "box",
                     containerSize: 28
                  },
                  {
                     row: 0,
                     col: 4,
                     type: "box",
                     containerSize: 69
                  },
                  {
                     row: 0,
                     col: 5,
                     type: "box",
                     containerSize: 30
                  },
                  {
                     row: 0,
                     col: 6,
                     type: "box",
                     containerSize: 20
                  },
                  {
                     row: 0,
                     col: 7,
                     type: "box",
                     containerSize: 20
                  },
               ].concat(initArray(3, {
                  row: 4,
                  col: 3,
                  type: "books"
               }))
               .concat(initArray(5, {
                  row: 4,
                  col: 4,
                  type: "books"
               }))
               .concat(initArray(8, {
                  row: 4,
                  col: 5,
                  type: "books"
               }))
               .concat(initArray(9, {
                  row: 4,
                  col: 6,
                  type: "books"
               }))
               .concat(initArray(13, {
                  row: 4,
                  col: 7,
                  type: "books"
               }))
               .concat(initArray(25, {
                  row: 2,
                  col: 3,
                  type: "books"
               }))
               .concat(initArray(64, {
                  row: 2,
                  col: 4,
                  type: "books"
               }))
               .concat(initArray(22, {
                  row: 2,
                  col: 5,
                  type: "books"
               }))
               .concat(initArray(11, {
                  row: 2,
                  col: 6,
                  type: "books"
               }))
               .concat(initArray(7, {
                  row: 2,
                  col: 7,
                  type: "books"
               }))
         },
         {
            tiles: [
               [1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
               [1, 1, 1, 5, 5, 5, 5, 5, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
               [1, 1, 1, 5, 5, 5, 5, 5, 1, 1, 1, 1],
               [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
            ],
            initItems: [{
                     row: 4,
                     col: 2,
                     dir: 0,
                     type: "robot"
                  },
                  {
                     row: 0,
                     col: 3,
                     type: "box",
                     containerSize: 16
                  },
                  {
                     row: 0,
                     col: 4,
                     type: "box",
                     containerSize: 6
                  },
                  {
                     row: 0,
                     col: 5,
                     type: "box",
                     containerSize: 38
                  },
                  {
                     row: 0,
                     col: 6,
                     type: "box",
                     containerSize: 28
                  },
                  {
                     row: 0,
                     col: 7,
                     type: "box",
                     containerSize: 16
                  },
               ].concat(initArray(2, {
                  row: 4,
                  col: 3,
                  type: "books"
               }))
               .concat(initArray(5, {
                  row: 4,
                  col: 4,
                  type: "books"
               }))
               .concat(initArray(9, {
                  row: 4,
                  col: 5,
                  type: "books"
               }))
               .concat(initArray(23, {
                  row: 4,
                  col: 6,
                  type: "books"
               }))
               .concat(initArray(6, {
                  row: 4,
                  col: 7,
                  type: "books"
               }))
               .concat(initArray(14, {
                  row: 2,
                  col: 3,
                  type: "books"
               }))
               .concat(initArray(1, {
                  row: 2,
                  col: 4,
                  type: "books"
               }))
               .concat(initArray(29, {
                  row: 2,
                  col: 5,
                  type: "books"
               }))
               .concat(initArray(5, {
                  row: 2,
                  col: 6,
                  type: "books"
               }))
               .concat(initArray(10, {
                  row: 2,
                  col: 7,
                  type: "books"
               }))
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

// Laden der definierten Informationen
// 2. Parameter: Die Liste gibt an, welche Versionen es gibt
// 3. Parameter: Gibt an bei welcher Version gestartet wird.
// initWrapper(initTask, ["basic", "easy", "medium", "hard"], "basic", true);
initWrapper(initTask, ["easy", "medium", "hard"], null, true);
