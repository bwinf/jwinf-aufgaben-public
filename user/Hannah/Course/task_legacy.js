function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false,
      contextType: "course",
      blocklyColourTheme: "bwinf",
      hideSaveOrLoad: true,
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         easy: 5,
         medium: 10,
         hard: 15
      },
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         groupByCategory: false,
         //Alle Roboter spezifischen Blocks, welche genutzt werden.
         //Hier stehen für alle Versionen die gleichen Blöcke zur Verfügung
         generatedBlocks: {
            robot: ["east", "west", "north", "south"]
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat"]
         }
      },
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version **
      easy: [{
         //Jede Zahl steht für ein spezifisches Object
         //2 ist zum Beispiel ein Busch und 3 die Fahne (der Ausgang)
         tiles: [
            [15, 1, 2, 2, 2, 2, 1, 2, 13, 2, 2, 15, 1, ],
            [2, 2, 2, 2, 1, 2, 1, 1, 13, 16, 1, 1, 1, ],
            [16, 2, 16, 2, 2, 2, 2, 2, 13, 2, 1, 2, 1, ],
            [2, 1, 1, 1, 1, 1, 1, 1, 14, 1, 3, 2, 2, ],
            [2, 1, 2, 2, 2, 1, 1, 2, 13, 1, 2, 2, 2, ],
            [2, 2, 2, 1, 2, 1, 1, 2, 13, 1, 2, 1, 2, ],
            [15, 2, 2, 1, 2, 2, 2, 2, 13, 15, 15, 15, 15, ],
         ],
         initItems: [{
            row: 3,
            col: 1,
            type: "robot"
         }]
      }],
      //Version ***
      medium: [{
         tiles: [
            [2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, ],
            [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, ],
            [2, 1, 1, 1, 1, 1, 3, 2, 2, 1, 2, 1, 2, ],
            [2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, ],
            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, ],
            [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, ],
            [1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, ]
         ],
         initItems: [{
            row: 4,
            col: 11,
            type: "robot"
         }]
      }],
      //Version ****
      hard: [{
         tiles: [
            [2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, ],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, ],
            [2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, ],
            [2, 1, 2, 2, 2, 2, 3, 2, 2, 2, 1, 2, 1, ],
            [2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, ],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, ],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, ],
            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, ],
            [2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, ],
            [2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, ]
         ],
         initItems: [{
            row: 8,
            col: 1,
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