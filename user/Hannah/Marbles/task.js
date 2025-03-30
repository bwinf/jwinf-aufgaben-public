function initTask(subTask) {
   subTask.gridInfos = {
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "marbles",
      blocklyColourTheme: "bwinf",
      //Gibt an, wie viele Blöcke zur Verfügung stehen
      //Für alle Versionen jeweils 20
      maxInstructions: 20,
      showCardinals: false,
      hideSaveOrLoad: true,
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         groupByCategory: false,
         //Alle Roboter spezifischen Blocks, welche für die Version jeweils genutzt werden.
         //Blöcke bei shared werden für alle Versionen angezeigt
         generatedBlocks: {
            robot: {
               shared: ["east", "withdrawObject", "dropObject"],
               medium: ["west"],
               hard: ["west"]
            }

         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: []
         }
      }
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version **
      easy: [{
         //Jede Zahl steht für ein spezifisches Object
         //4 ist eine Murmel und 3 das Loch
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 4, 1, 1, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
         ],
         //Definieren, wo der Roboter starten soll
         initItems: [{
            row: 1,
            col: 1,
            type: "robot"
         }]
      }],
      //Version ***
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 3, 1, 4, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 1,
            col: 1,
            type: "robot"
         }]
      }],
      //Version ****
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 4, 4, 1, 1, 3, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 1,
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
initWrapper(initTask, ["easy", "medium", "hard"], "easy", true);