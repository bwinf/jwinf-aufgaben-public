function initTask(subTask) {
   subTask.gridInfos = {
      blocklyColourTheme: "bwinf",
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "rocket",
      hideSaveOrLoad: true,
      //Gibt an, wie viele Blöcke zur Verfügung stehen
      maxInstructions: {
         easy: 6,
         medium: 10,
         hard: 15
      },
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         groupByCategory: false,
         //Alle Roboter spezifischen Blocks, welche für die Version jeweils genutzt werden.
         //Blöcke bei shared werden für alle Versionen angezeigt
         generatedBlocks: {
            robot: {
               easy: ["left", "right", "forward"],
               medium: ["left", "right", "forward", "withdrawObject"],
               hard: ["left", "right", "forward", "withdrawObject"],
            }
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
         //4 ist zum Beispiel ein Asteroid
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 4, 1, 1, 1, 4, 1, 1],
            [1, 1, 1, 4, 1, 4, 1, 1, 1],
            [1, 1, 1, 1, 4, 1, 1, 1, 1],
            [1, 1, 4, 1, 1, 1, 4, 1, 1],
            [1, 1, 1, 4, 4, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 4, 1, 5, 1],
            [1, 1, 1, 1, 4, 1, 1, 1, 1]
         ],
         //Definieren, wo der Roboter starten soll
         //dir: Gibt die Richtung an, in die der Roboter bei Start schaut
         initItems: [{
            row: 7,
            col: 1,
            dir: 3,
            type: "robot"
         }]
      }],
      //Version ***
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 7, 1, 1, 1, 1, 1, 1],
            [1, 1, 4, 1, 1, 1, 4, 7, 1],
            [1, 1, 1, 4, 1, 4, 1, 1, 1],
            [1, 1, 1, 1, 4, 1, 1, 1, 1],
            [1, 1, 4, 1, 1, 1, 4, 1, 1],
            [1, 7, 1, 4, 4, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 4, 1, 5, 1],
            [1, 1, 1, 1, 4, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 7,
            col: 1,
            dir: 3,
            type: "robot"
         }]
      }],
      //Version ****
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 1, 1],
            [1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1],
            [1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 4, 1],
            [1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 4],
            [1, 4, 1, 1, 4, 1, 1, 1, 4, 1, 1, 4, 4, 1, 4],
            [1, 1, 1, 1, 1, 7, 4, 4, 1, 7, 1, 1, 1, 1, 1],
            [4, 1, 1, 4, 1, 4, 1, 1, 4, 1, 1, 4, 4, 1, 1],
            [1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 4, 1, 1, 4],
            [1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 4, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 7, 1, 1, 4, 5, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1]
         ],
         initItems: [{
            row: 9,
            col: 6,
            dir: 2,
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