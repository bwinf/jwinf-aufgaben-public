function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false,
      contextType: "course",
      blocklyColourTheme: "bwinf",
      hideSaveOrLoad: true,
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         medium: 10,
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
      medium: [{
         //Jede Zahl steht für ein spezifisches Object
         //2 ist zum Beispiel ein Busch und 3 die Fahne (der Ausgang)
         tiles: [
            [2, 1, 2, 2, 2, 2, 2, 2, ],
            [2, 1, 2, 2, 2, 2, 2, 2, ],
            [2, 1, 1, 1, 1, 1, 1, 2, ],
            [2, 2, 2, 2, 2, 2, 1, 2, ],
            [2, 1, 1, 1, 1, 1, 1, 2, ],
            [2, 1, 2, 2, 2, 2, 2, 2, ],
            [2, 1, 1, 1, 1, 1, 1, 2, ],
            [2, 2, 2, 2, 2, 2, 1, 2, ],
            [2, 1, 1, 1, 1, 1, 1, 2, ],
            [2, 3, 2, 1, 2, 1, 1, 2, ],
            [2, 2, 2, 2, 2, 2, 2, 2, ],
         ],
         initItems: [{
            row: 0,
            col: 1,
            type: "robot"
         }]
      }],
      //Version ****
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
initWrapper(initTask, ["medium"], "medium", true);