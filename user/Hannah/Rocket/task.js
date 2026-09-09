function initTask(subTask) {
   subTask.gridInfos = {
      context: "robot",
      //Die BWINF-spezifischen Farben. Bitte in jeder Aufgabendatei laden, da die Blocktypen sonst nicht konsistent eingefärbt sind
      //(Unsere Farben sind natürlich schöner)
      blocklyColourTheme: "bwinf",
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "rocket",
      //Gibt an, ob die Programme gespeichert und geladen werden können über das Menu auf der rechten Seite.
      //Für Wettbewerbe immer auf true setzen
      hideSaveOrLoad: true,
      //Gibt an, wie viele Blöcke zur Verfügung stehen
      maxInstructions: {
         easy: 6,
         medium: 10,
         hard: 15
      },
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         //Bei true werden die Blöcke nach Kategorien gruppiert. 
         //Dies kann Sinn ergebene, wenn sehr viele Blöcke zur Verfügung stehen.
         //Dies ist notwendig, wenn Funktionen oder Variablen (zum selber erstellen/nicht vordefiniert) benutzt werden.
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
      checkEndCondition: robotEndConditions.checkBothReachAndCollect,
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
