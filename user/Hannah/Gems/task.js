function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false,
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "gems",
      blocklyColourTheme: "bwinf",
      hideSaveOrLoad: true,
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         basic: 10,
         easy: 5,
         medium: 10,
         hard: 15
      },
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         groupByCategory: false,
         //Alle Roboter spezifischen Blocks, welche für die Version jeweils genutzt werden.
         generatedBlocks: {
            robot: {
               basic: ["forward"],
               easy: ["forward"],
               medium: ["left", "forward"],
               hard: ["left", "right", "forward"]
            }
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               basic: [],
               easy: ["controls_repeat"],
               medium: ["controls_repeat"],
               hard: ["controls_repeat"],
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
      basic: [{
         //Jede Zahl steht für ein spezifisches Object
         //3 sind die Diamanten
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 3, 3, 3, 3, 3, 3, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         //Definieren, wo der Roboter starten soll
         //dir: Definiert in welche Richtung der Roboter bei Start schaut
         initItems: [{
            row: 1,
            col: 1,
            dir: 0,
            type: "robot"
         }, ]
      }],
      //Version **
      easy: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
            row: 1,
            col: 0,
            dir: 0,
            type: "robot"
         }, ]
      }],
      //Version ***
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 3, 3, 1, 3, 1, 3, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 7,
            col: 0,
            dir: 0,
            type: "robot"
         }]
      }],
      //Version ****
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 3, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 3, 1, 1, 1, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 3, 1, 1, 3, 1, 1, 1, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 1,
            col: 0,
            dir: 0,
            type: "robot"
         }, ]
      }]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
initWrapper(initTask, ["basic", "easy", "medium", "hard"], "basic", true);