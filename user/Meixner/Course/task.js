function initTask(subTask) {
   subTask.gridInfos = {
      context: "robot",
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
}

//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
window.initBlocklySubTask = function () {};
window.taskData = window.taskData || {};
window.taskData.waitInit = function () { initTask(window.taskData); };
window.taskData.codecastParameters = window.taskData.codecastParameters || {
    language: "de-DE",
    platform: "blockly",
    canChangePlatform: false,
    showStepper: true,
    showStack: false,
    showViews: true,
    showIO: true,
    controls: { reload: false },
    hideSettings: true,
    jwinfMenu: { copyPaste: true, undoRedo: true, svgExport: true }
};
