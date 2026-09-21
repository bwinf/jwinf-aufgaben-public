function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false,
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "laser",
      blocklyColourTheme: "bwinf",
      hideSaveOrLoad: true,
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         // basic: 10,
         easy: 10,
         medium: 15,
         hard: 20
      },
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         groupByCategory: false,
         //Alle Roboter spezifischen Blocks, welche für die Version jeweils genutzt werden.
         generatedBlocks: {
            robot: {
               // basic: ["forward", "shoot"],
               easy: ["forward", "shoot"],
               medium: ["forward", "left", "right", "shoot"],
               hard: ["forward", "left", "right", "shoot"],
            }
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               shared: ["math_number"]
            }
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
      //    //5 ist zum Beispiel der Laser und 3 der off-spot
      //    tiles: [
      //       [1, 1, 1, 1, 1, 1],
      //       [1, 1, 5, 1, 1, 1],
      //       [1, 1, 1, 1, 1, 1],
      //       [1, 1, 1, 1, 3, 1],
      //       [1, 1, 1, 1, 1, 3]
      //    ],
      //    //Definieren, wo der Roboter starten soll
      //    //dir: Definiert in welche Richtung der Roboter bei Start schaut
      //    initItems: [{
      //       row: 1,
      //       col: 0,
      //       dir: 0,
      //       type: "robot"
      //    }, ]
      // }],
      //Version **
      easy: [{
         tiles: [
            [1, 1, 8, 1, 1, 1],
            [1, 3, 1, 1, 1, 1],
            [1, 1, 1, 1, 3, 1],
            [1, 1, 1, 1, 1, 9],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 5, 1, 1],
            [1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 5,
            col: 1,
            dir: 0,
            type: "robot"
         }, ]
      }],
      //Version ***
      medium: [{
         tiles: [
            [1, 1, 1, 7, 3, 6],
            [1, 1, 1, 1, 1, 3],
            [3, 1, 6, 1, 3, 7],
            [1, 2, 1, 1, 1, 1],
            [1, 1, 5, 1, 1, 1],
            [1, 1, 1, 5, 1, 1],
            [1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 5,
            col: 1,
            dir: 0,
            type: "robot"
         }]
      }],
      //Version ****
      hard: [{
         tiles: [
            [1, 7, 3, 1, 1, 1, 3, 6],
            [1, 1, 2, 1, 9, 3, 1, 7],
            [1, 1, 1, 1, 1, 2, 1, 1],
            [3, 1, 3, 1, 1, 1, 6, 1],
            [1, 1, 8, 1, 1, 1, 1, 1],
            [7, 5, 1, 1, 1, 1, 1, 1],
            [6, 1, 5, 1, 1, 1, 7, 1],
            [2, 1, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
            row: 6,
            col: 1,
            dir: 0,
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
// initWrapper(initTask, ["basic", "easy", "medium", "hard"], "basic", true);
initWrapper(initTask, ["easy", "medium", "hard"], null, true);