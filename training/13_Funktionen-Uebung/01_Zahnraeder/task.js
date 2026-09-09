function initTask(subTask) {
   subTask.gridInfos = {
      context: "robot",
      conceptViewer: false,
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "gears",
      //Die BWINF-spezifischen Farben. Bitte in jeder Aufgabendatei laden, da die Blocktypen sonst nicht konsistent eingefärbt sind
      //(Unsere Farben sind natürlich schöner)
      blocklyColourTheme: "bwinf",
      //Wie viele Plattformen maximal gebaut werden dürfen
      nbPlatforms: 10,
      //Gibt an, ob die Programme gespeichert und geladen werden können über das Menu auf der rechten Seite.
      //Für Wettbewerbe immer auf true setzen
      hideSaveOrLoad: true,
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         easy: 16,
         medium: 25,
         hard: 30
      },
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         //Bei true werden die Blöcke nach Kategorien gruppiert. 
         //Notwendig, da Funktionen verwendet werden
         groupByCategory: true,
         //Alle Roboter spezifischen Block, welche genutzt werden.
         //Hier stehen für alle Versionen die gleichen Blöcke zur Verfügung
         generatedBlocks: {
            robot: {
               shared: ["forward", "withdrawObject", "dropObject"],
               medium: ["backwards"],
               hard: ["backwards"],
            }
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               shared: ["procedures_defnoreturn"]
            }
         },
         pythonAdditionalFunctions: {
            shared: ["range"]
         }

      },
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version **
      easy: [{
         //Jede Zahl steht für ein spezifisches Object
         //2 ist zum Beispiel eine Plattform, 5 ein Zahnrad und 4 eine Maschine
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 5, 4, 5, 4, 1, 1, 5, 4, 1, 5, 4, 5, 4],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
         ],
         //Definieren, wo der Roboter starten soll
         //dir: Definiert in welche Richtung der Roboter bei Start schaut
         initItems: [{
            row: 1,
            col: 0,
            dir: 0,
            type: "robot"
         },]
      }],
      //Version ***
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 4, 5, 1, 1, 4, 5, 4, 5, 1, 4, 5, 1, 4, 5],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
         ],
         initItems: [{
            row: 1,
            col: 0,
            dir: 0,
            type: "robot"
         },]
      }],
      //Version ****
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 5, 1, 4, 4, 1, 5, 5, 4, 4, 5, 5, 5, 4, 4],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
         ],
         initItems: [{
            row: 1,
            col: 0,
            dir: 0,
            type: "robot"
         },]
      }]
   };

   initBlocklySubTask(subTask);
}

//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
window.initBlocklySubTask = function () { };
window.taskData = window.taskData || {};
window.taskData.waitInit = function () { initTask(window.taskData); };
window.taskData.codecastParameters = window.taskData.codecastParameters || {
   language: "de-DE",
   platform: "blockly",
   canChangePlatform: false,
   showStepper: true,
   showStack: true,
   showViews: true,
   showIO: true,
   controls: { reload: false },
   hideSettings: true,
   jwinfMenu: { copyPaste: true, undoRedo: true, svgExport: true }
};
window.taskData.codecastParameters.showStack = true;