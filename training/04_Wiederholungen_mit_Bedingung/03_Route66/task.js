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
      timeoutMinutes: 10, // Nach 15 Minuten warnen
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         easy: 5,
         medium: 8,
         hard: 10
      },
      languageStrings: {
         blocklyRobot_lib: {
            messages: {
               "successPickedAllWithdrawables": "Super, der Roboter hat alle Diamanten eingesammelt!",
               "failurePickedAllWithdrawables": "Der Roboter hat nicht alle Diamanten eingesammelt."
            }
         }
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
               shared: ["forward", "obstacleInFront"],
               easy: ["obstacleInFront"],
               medium: ["right", "obstacleInFront"],
               hard: ["right"]
            }
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               shared: ["controls_untilWhile"],
               easy: [],
               medium: ["controls_repeat"],
               hard: ["controls_repeat"]
            }
         }
      }
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version **
      easy: [{
         tiles: [
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            [4, 1, 3, 3, 3, 3, 3, 3, 3, 3, 4],
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
         ],
         initItems: [{
            row: 1,
            col: 1,
            dir: 0,
            type: "robot"
         }, ]
      },
   ],
      //Version ***
      medium: [{
         tiles: [
            [4, 4, 4, 4, 4, 4],
            [4, 3, 4, 4, 4, 4],
            [4, 3, 4, 4, 4, 4],
            [4, 1, 3, 3, 3, 4],
            [4, 3, 4, 4, 3, 4],
            [4, 3, 3, 3, 3, 4],
            [4, 4, 4, 4, 4, 4]
         ],
         initItems: [{
            row: 3,
            col: 1,
            dir: 0,
            type: "robot"
         }]
      }],
      //Version ****
      hard: [{
         tiles: [
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            [4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4],
            [4, 3, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4],
            [4, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 4],
            [4, 3, 4, 3, 4, 4, 4, 4, 3, 4, 4, 3, 4, 3, 4],
            [4, 3, 4, 1, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 4],
            [4, 3, 4, 3, 4, 4, 3, 4, 4, 4, 4, 4, 4, 3, 4],
            [4, 3, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 3, 4],
            [4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4],
            [4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4],
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
         ],
         initItems: [{
            row: 5,
            col: 3,
            dir: 0,
            type: "robot"
         }, ]
      }]
   };

   initBlocklySubTask(subTask);
}

//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
window.initBlocklySubTask = function () {};
window.taskData = {};
window.taskData.waitInit = function () { initTask(window.taskData); };
window.taskData.codecastParameters = {
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
