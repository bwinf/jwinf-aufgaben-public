function initTask(subTask) {
   subTask.gridInfos = {
      context: "robot",
      conceptViewer: false,
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "gems",
      //Die BWINF-spezifischen Farben. Bitte in jeder Aufgabendatei laden, da die Blocktypen sonst nicht konsistent eingefärbt sind
      //(Unsere Farben sind natürlich schöner)
      blocklyColourTheme: "bwinf",
      //Gibt an, ob die Programme gespeichert und geladen werden können über das Menu auf der rechten Seite.
      //Für Wettbewerbe immer auf true setzen
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
         //Bei true werden die Blöcke nach Kategorien gruppiert. 
         //Dies kann Sinn ergebene, wenn sehr viele Blöcke zur Verfügung stehen.
         //Dies ist notwendig, wenn Funktionen oder Variablen (zum selber erstellen/nicht vordefiniert) benutzt werden.
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
         },]
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
         },]
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
