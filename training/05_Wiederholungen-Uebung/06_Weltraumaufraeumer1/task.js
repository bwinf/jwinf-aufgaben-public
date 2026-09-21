function initTask(subTask) {
   subTask.gridInfos = {
      context: "robot",
      conceptViewer: false,
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "objects_in_space",
      //Die BWINF-spezifischen Farben. Bitte in jeder Aufgabendatei laden, da die Blocktypen sonst nicht konsistent eingefärbt sind
      //(Unsere Farben sind natürlich schöner)
      blocklyColourTheme: "bwinf",
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         easy: 10,
         medium: 20,
         hard: 50
      },
      //Gibt an, ob die Programme gespeichert und geladen werden können über das Menu auf der rechten Seite.
      //Für Wettbewerbe immer auf true setzen
      hideSaveOrLoad: true,
      timeoutMinutes: 10, // Nach 15 Minuten warnen
      languageStrings: {
         blocklyRobot_lib: {
            label: {
               "onObject": "auf Weltraumschrott",
               "withdrawObject": "hebe Weltraumschrott auf",
             },
            }
         },
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         //Bei true werden die Blöcke nach Kategorien gruppiert. 
         //Dies kann Sinn ergebene, wenn sehr viele Blöcke zur Verfügung stehen.
         //Dies ist notwendig, wenn Funktionen oder Variablen (zum selber erstellen/nicht vordefiniert) benutzt werden.
         groupByCategory: false,
         generatedBlocks: {
            //Hier stehen für alle Versionen die gleichen Blöcke zur Verfügung
            robot: {
               shared:[ "withdrawObject", "onObject", "forward"],
               easy:[],
               medium: ["left", "right", "turnAround"],
               hard: ["left", "right", "turnAround", "obstacleInFront" ]
            }
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               shared: ["controls_if", ],
               easy: ["controls_repeat"],
               medium: ["controls_repeat"],
               hard: ["controls_repeat","controls_untilWhile"]
            }
         }
      }
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version **
      easy: [{
         //Jede Zahl steht für ein spezifisches Object
         //3 ist zum Beispiel Sterne und 4 ein Object, welches eingesammelt werden soll
         tiles: [
            [1, 1, 4, 1, 4, 1, 5, 7, 1, 1],
            
         ],
         //Definieren, wo der Roboter starten soll
         //dir: Gibt die Richtung an, in die der Roboter bei Start schaut
         initItems: [{
            row: 0,
            col: 0,
            dir: 0,
            type: "robot"
         }, ]
      },
      {
      tiles: [
         [1, 1, 1, 1, 4, 1, 5, 7, 4, 1],
         
      ],
      //Definieren, wo der Roboter starten soll
      //dir: Gibt die Richtung an, in die der Roboter bei Start schaut
      initItems: [{
         row: 0,
         col: 0,
         dir: 0,
         type: "robot"
      }, ]
   }],
      //Version ***
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 5, 7, 4, 1],
            [1, 1, 1, 1, 4, 1, 5, 7, 4, 5],
            [1, 1, 1, 1, 5, 1, 1, 1, 1, 1],
            [1, 1, 7, 1, 1, 1, 1, 1, 1, 1],
            [1, 4, 1, 5, 1, 4, 1, 1, 1, 1],
            [1, 5, 1, 4, 1, 1, 1, 7, 1, 1],
            [7, 1, 4, 1, 1, 1, 5, 1, 1, 7],
            [1, 1, 1, 1, 7, 1, 1, 1, 1, 1],
            [1, 7, 1, 1, 1, 1, 7, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
            row: 0,
            col: 0,
            dir: 0,
            type: "robot"
         }]
      },
      {
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 4, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 5, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 7, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
            row: 0,
            col: 0,
            dir: 0,
            type: "robot"
         }]
      },
      {
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
            [1, 1, 1, 1, 5, 1, 1, 1, 4, 1],
            [1, 4, 1, 1, 1, 1, 1, 1, 4, 1],
            [1, 1, 1, 1, 5, 1, 1, 1, 7, 1],
            [1, 4, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 5, 1, 1, 1, 1, 1],
            [1, 4, 1, 1, 1, 1, 1, 7, 1, 1],
            [1, 1, 1, 1, 5, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
            row: 0,
            col: 0,
            dir: 0,
            type: "robot"
         }]
       },
         {
            tiles: [
               [1, 7, 1, 4, 1, 1, 1, 1, 1, 1],
               [1, 4, 1, 1, 1, 1, 7, 1, 4, 1],
               [1, 7, 1, 1, 5, 1, 1, 1, 1, 1],
               [1, 4, 7, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 7, 5, 1, 1, 1, 7, 1],
               [1, 4, 1, 1, 1, 1, 5, 1, 4, 1],
               [1, 1, 7, 1, 5, 1, 1, 1, 1, 1],
               [1, 4, 1, 1, 1, 1, 1, 7, 1, 1],
               [1, 1, 1, 1, 5, 1, 1, 1, 5, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ],
            initItems: [{
               row: 0,
               col: 0,
               dir: 0,
               type: "robot"
            }]
         }

   ],
      //Version ****
      hard: [{
         tiles: [
            [6, 1, 1, 4, 1, 1, 6, 6, 6, 6],
            [6, 1, 1, 6, 6, 6, 6, 6, 6, 6],
            [6, 3, 1, 5, 1, 6, 6, 6, 6, 6],
            [6, 1, 1, 1, 1, 1, 6, 6, 6, 6],
            [6, 1, 1, 7, 1, 1, 6, 6, 6, 6],
            [6, 1, 1, 1, 1, 4, 1, 6, 6, 6],
            [6, 1, 1, 7, 1, 1, 1, 6, 6, 6],
            [6, 1, 1, 6, 6, 6, 6, 6, 6, 6],
            [6, 1, 1, 3, 1, 1, 1, 6, 6, 6],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
            row: 0,
            col: 1,
            dir: 0,
            type: "robot"
         }]
      },
      {
         tiles: [
            [6, 1, 1, 4, 1, 1, 1, 7, 1, 6],
            [6, 1, 1, 1, 5, 1, 1, 6, 6, 6],
            [6, 3, 1, 5, 1, 1, 1, 1, 1, 6],
            [6, 1, 1, 1, 7, 1, 6, 6, 6, 6],
            [6, 1, 1, 7, 1, 1, 1, 1, 1, 6],
            [6, 1, 4, 1, 1, 1, 1, 6, 6, 6],
            [6, 1, 1, 7, 1, 1, 1, 1, 1, 6],
            [6, 5, 1, 6, 6, 6, 6, 6, 6, 6],
            [6, 1, 1, 3, 1, 1, 1, 7, 1, 6],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
            row: 0,
            col: 1,
            dir: 0,
            type: "robot"
         }]
      },
      {
         tiles: [
            [6, 1, 1, 1, 1, 7, 1, 1, 1, 6],
            [6, 1, 1, 1, 1, 3, 1, 1, 1, 6],
            [6, 3, 1, 1, 1, 1, 1, 4, 1, 6],
            [6, 1, 1, 1, 5, 1, 1, 3, 1, 6],
            [6, 1, 1, 1, 1, 1, 1, 1, 1, 6],
            [6, 1, 1, 1, 1, 3, 1, 1, 1, 6],
            [6, 1, 1, 7, 1, 1, 7, 1, 1, 6],
            [6, 1, 1, 1, 1, 1, 1, 1, 4, 6],
            [6, 1, 1, 3, 1, 1, 1, 4, 1, 6],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
            row: 0,
            col: 1,
            dir: 0,
            type: "robot"
         }]
      },
      {
         tiles: [
            [6, 1, 1, 1, 6, 6, 6, 6, 6, 6],
            [6, 1, 1, 1, 1, 6, 6, 6, 6, 6],
            [6, 3, 1, 1, 1, 1, 6, 6, 6, 6],
            [6, 1, 1, 1, 1, 1, 1, 6, 6, 6],
            [6, 1, 1, 1, 1, 1, 1, 1, 6, 6],
            [6, 1, 1, 1, 1, 1, 1, 1, 1, 6],
            [6, 1, 1, 1, 1, 1, 1, 1, 6, 6],
            [6, 1, 1, 1, 1, 1, 1, 6, 6, 6],
            [6, 1, 1, 3, 1, 1, 6, 6, 6, 6],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
            row: 0,
            col: 1,
            dir: 0,
            type: "robot"
         }]
      }
   ]
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
