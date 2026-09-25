function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false,
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "dominoes",
      blocklyColourTheme: "bwinf",
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         easy: 6,
         medium: 30,
         hard: 45
      },
      //Gibt an, ob die Programme gespeichert und geladen werden können über das Menu auf der rechten Seite.
      //Für Wettbewerbe immer auf true setzen
      hideSaveOrLoad: true,
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {

         groupByCategory: false,
         //Alle Roboter spezifischen Blocks, welche für die Version jeweils genutzt werden.
         //Blöcke bei shared werden für alle Versionen angezeigt
         generatedBlocks: {
            robot: {
               medium: ["onStar", "onCross", "onSquare", "left", "right"],
               hard: ["onStar", "onCross", "onSquare", "left", "right", ],
               shared: ["forward", "withdrawObject"]
            }
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               medium: ["controls_if", "logic_negate", "logic_operation"],
               hard: ["controls_if", "logic_negate", "logic_operation"],
               shared: ["controls_repeat"]
            }
         }
      },
      //Erfolgsbedingung
      checkEndCondition: {
         easy: robotEndFunctionGenerator.allFilteredPicked(function (obj) {
            return obj.isSquare === true && !(obj.isCross === true || obj.isStar === true);
         }),
         medium: robotEndFunctionGenerator.allFilteredPicked(function (obj) {
            return obj.isSquare === true && !(obj.isCross === true || obj.isStar === true);
         }),
         hard: robotEndFunctionGenerator.allFilteredPicked(function (obj) {
            return (obj.isSquare === true && !(obj.isCross === true || obj.isStar === true)) || (obj.isStar === true && !(obj.isCross === true || obj.isSquare === true)) || (obj.isCross === true && !(obj.isSquare === true || obj.isStar === true));
         })
      }
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version **
      easy: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         //Definieren, wo der Roboter starten soll
         //dir: Definiert in welche Richtung der Roboter bei Start schaut
         initItems: [{
               row: 1,
               col: 0,
               dir: 0,
               type: "robot"
            },
            //Hier werden die entsprechenden Dominosteine auf die Felder gelegt
            {
               row: 1,
               col: 1,
               type: "BB"
            },
            {
               row: 1,
               col: 2,
               type: "GO"
            },
            {
               row: 1,
               col: 3,
               type: "BB"
            },
            {
               row: 1,
               col: 4,
               type: "OO"
            },
            {
               row: 1,
               col: 5,
               type: "BB"
            },
            {
               row: 1,
               col: 6,
               type: "GO"
            },
            {
               row: 1,
               col: 7,
               type: "BB"
            },
            {
               row: 1,
               col: 8,
               type: "OG"
            },
            {
               row: 1,
               col: 9,
               type: "BB"
            },
            {
               row: 1,
               col: 10,
               type: "GG"
            }

         ]
      }],
      //Version ***
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

         ],
         initItems: [{
               row: 3,
               col: 0,
               dir: 0,
               type: "robot"
            },
            {
               row: 3,
               col: 8,
               type: "BB"
            },
            {
               row: 2,
               col: 9,
               type: "BB"
            },
            {
               row: 1,
               col: 10,
               type: "BB"
            },
            {
               row: 3,
               col: 9,
               type: "OO"
            },
            {
               row: 3,
               col: 10,
               type: "OO"
            },
            {
               row: 2,
               col: 8,
               type: "GO"
            },
            {
               row: 2,
               col: 10,
               type: "OB"
            },
            {
               row: 1,
               col: 8,
               type: "OG"
            },
            {
               row: 1,
               col: 9,
               type: "BG"
            }
         ]
      }],
      //Version ****
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
               row: 1,
               col: 0,
               dir: 0,
               type: "robot"
            },
            {
               row: 1,
               col: 1,
               type: "BB"
            },
            {
               row: 1,
               col: 2,
               type: "OB"
            },
            {
               row: 1,
               col: 3,
               type: "GO"
            },
            {
               row: 1,
               col: 4,
               type: "BB"
            },
            {
               row: 1,
               col: 5,
               type: "BB"
            },
            {
               row: 1,
               col: 6,
               type: "OG"
            },
            {
               row: 1,
               col: 7,
               type: "BB"
            },
            {
               row: 1,
               col: 8,
               type: "OG"
            },
            {
               row: 1,
               col: 9,
               type: "BB"
            },
            {
               row: 1,
               col: 10,
               type: "OG"
            },
            {
               row: 2,
               col: 1,
               type: "OB"
            },
            {
               row: 2,
               col: 2,
               type: "OO"
            },
            {
               row: 2,
               col: 3,
               type: "BO"
            },
            {
               row: 2,
               col: 4,
               type: "GB"
            },
            {
               row: 2,
               col: 5,
               type: "OO"
            },
            {
               row: 2,
               col: 6,
               type: "OG"
            },
            {
               row: 2,
               col: 7,
               type: "OO"
            },
            {
               row: 2,
               col: 8,
               type: "BO"
            },
            {
               row: 2,
               col: 9,
               type: "GB"
            },
            {
               row: 2,
               col: 10,
               type: "OG"
            },
            {
               row: 3,
               col: 1,
               type: "OG"
            },
            {
               row: 3,
               col: 2,
               type: "GG"
            },
            {
               row: 3,
               col: 3,
               type: "GG"
            },
            {
               row: 3,
               col: 4,
               type: "GG"
            },
            {
               row: 3,
               col: 5,
               type: "GG"
            },
            {
               row: 3,
               col: 6,
               type: "GG"
            },
            {
               row: 3,
               col: 7,
               type: "BO"
            },
            {
               row: 3,
               col: 8,
               type: "GG"
            },
            {
               row: 3,
               col: 9,
               type: "GO"
            },
            {
               row: 3,
               col: 10,
               type: "GG"
            }
         ]
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