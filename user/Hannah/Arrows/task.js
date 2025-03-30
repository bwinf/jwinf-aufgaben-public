function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false,
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "arrows",
      blocklyColourTheme: "bwinf",
      maxInstructions: {
         easy: 12,
         medium: 12,
         hard: 12
      },
      hideSaveOrLoad: false, //Speichern möglich
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         //Muss true sein, wenn Funktionen oder Variablen (zum selber erstellen/nicht vordefiniert) benutzt werden.
         groupByCategory: false,
         //Alle Roboter spezifischen Blocks, welche für die Version jeweils genutzt werden.
         //Bausteine bei shared werden für alle Versionen angezeigt
         generatedBlocks: {
            robot: {
               shared: ["east", "onRightArrow"],
               medium: ["west", "onLeftArrow", "onTopArrow", "north"],
               hard: ["west", "onLeftArrow", "onTopArrow", "onBottomArrow", "north", "south"]
            }
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_whileUntil"]
         }
      },
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version **
      easy: [{
         //Jede Zahl steht für ein spezifisches Object
         //1 ist zum Beispiel ein leeres Feld, 5 sind Pfeile nach rechts und 3 ist die Schatztruhe (der Ausgang)
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 3, 4, 4, 4, 4, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1],
            [1, 5, 5, 5, 5, 5, 5, 5, 5, 6, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 5,
            col: 1,
            type: "robot"
         }]
      }],
      //Version ****
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 5, 5, 5, 7, 5, 5, 5, 7, 5, 5, 1],
            [1, 1, 1, 1, 7, 1, 1, 1, 7, 1, 7, 1],
            [1, 1, 1, 1, 7, 1, 1, 1, 7, 1, 7, 1],
            [1, 1, 1, 1, 7, 1, 1, 1, 3, 1, 7, 1],
            [1, 1, 1, 1, 7, 1, 1, 1, 6, 1, 7, 1],
            [1, 1, 1, 1, 7, 1, 1, 1, 6, 1, 7, 1],
            [1, 1, 1, 1, 5, 5, 5, 5, 6, 4, 4, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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

initWrapper(initTask, ["easy", "medium", "hard"], null, false);