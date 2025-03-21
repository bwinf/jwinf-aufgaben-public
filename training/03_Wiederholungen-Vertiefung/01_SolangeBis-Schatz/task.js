function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false,
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "arrows",
      //Falls man die Hintergrundfarbe ändern möchte, dann geht das hier. Hier gibt es allerings eine 
      //für diese Aufgabe als ItemType spezifizierte Zellenfarbe: grün. Wenn man also das grün komplett weg haben möchte,
      //dann müssen die ItemTypes lokal in dieser Datei definiert werden (siehe den auskommentierten Block unten)
      //backgroundColor: "#FFFFFF",

      //Die BWINF-spezifischen Farben. Bitte in jeder Aufgabendatei laden, da die Blocktypen sonst nicht konsistent eingefärbt sind
      //(Unsere Farben sind natürlich schöner)
      blocklyColourTheme: "bwinf",
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         easy: 12,
         medium: 12,
         hard: 12
      },
      //Gibt an, ob die Programme gespeichert und geladen werden können über das Menu auf der rechten Seite.
      //Für Wettbewerbe immer auf true setzen
      hideSaveOrLoad: true,
      //Die ItemTyper, wie sie in der library definiert sind. Mit der Änderung, dass für die cell weiß angegeben wird.
      /*itemTypes: {
         red_robot: {
            img: "blue_robot.png",
            side: 80,
            nbStates: 1,
            isRobot: true,
            offsetX: -10,
            offsetY: 10,
            zOrder: 2
         },
         cell: {
            num: 1,
            color: "#FFFFFF",
            side: 60,
            isObstacle: true,
            zOrder: 0
         },
         box: {
            num: 3,
            img: "box.png",
            side: 60,
            isExit: true
         },
         leftArrow: {
            num: 4,
            img: "leftArrow.png",
            side: 60,
            forwardsLeft: true,
            zOrder: 0
         },
         rightArrow: {
            num: 5,
            img: "rightArrow.png",
            side: 60,
            forwardsRight: true,
            zOrder: 0
         },
         topArrow: {
            num: 6,
            img: "topArrow.png",
            side: 60,
            forwardsTop: true,
            zOrder: 0
         },
         bottomArrow: {
            num: 7,
            img: "bottomArrow.png",
            side: 60,
            forwardsBottom: true,
            zOrder: 0
         }
      },*/
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

//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
initWrapper(initTask, ["easy", "medium", "hard"], null, false);