function initTask(subTask) {
   subTask.gridInfos = {
      context: "robot",
      conceptViewer: false,
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "course",
      //Die BWINF-spezifischen Farben. Bitte in jeder Aufgabendatei laden, da die Blocktypen sonst nicht konsistent eingefärbt sind
      //(Unsere Farben sind natürlich schöner)
      blocklyColourTheme: "bwinf",
      //Gibt an, ob die Programme gespeichert und geladen werden können über das Menu auf der rechten Seite.
      //Für Wettbewerbe immer auf true setzen
      hideSaveOrLoad: true,
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         easy: 5,
         medium: 10,
         hard: 15
      },
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         //Bei true werden die Blöcke nach Kategorien gruppiert. 
         //Dies kann Sinn ergebene, wenn sehr viele Blöcke zur Verfügung stehen.
         //Dies ist notwendig, wenn Funktionen oder Variablen (zum selber erstellen/nicht vordefiniert) benutzt werden.
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
            [15, 1, 2, 2, 2, 2, 1, 2, 13, 2, 2, 15, 1,],
            [2, 2, 2, 2, 1, 2, 1, 1, 13, 16, 1, 1, 1,],
            [16, 2, 16, 2, 2, 2, 2, 2, 13, 2, 1, 2, 1,],
            [2, 1, 1, 1, 1, 1, 1, 1, 14, 1, 3, 2, 2,],
            [2, 1, 2, 2, 2, 1, 1, 2, 13, 1, 2, 2, 2,],
            [2, 2, 2, 1, 2, 1, 1, 2, 13, 1, 2, 1, 2,],
            [15, 2, 2, 1, 2, 2, 2, 2, 13, 15, 15, 15, 15,],
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
            [2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2,],
            [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2,],
            [2, 1, 1, 1, 1, 1, 3, 2, 2, 1, 2, 1, 2,],
            [2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2,],
            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,],
            [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2,],
            [1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2,]
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
            [2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2,],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
            [2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2,],
            [2, 1, 2, 2, 2, 2, 3, 2, 2, 2, 1, 2, 1,],
            [2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2,],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2,],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1,],
            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2,],
            [2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2,],
            [2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2,]
         ],
         initItems: [{
            row: 8,
            col: 1,
            type: "robot"
         }]
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
