function initTask(subTask) {
  subTask.gridInfos = {
    conceptViewer: false,
    timeoutMinutes: 15, // Nach 15 Minuten warnen
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
      medium: 15,
      hard: 35
    },
    //Gibt an, ob die Programme gespeichert und geladen werden können über das Menu auf der rechten Seite.
    //Für Wettbewerbe immer auf true setzen
    hideSaveOrLoad: true,
    itemTypes: {
      robot: { img: imgPath + "blue_robot.png", side: 45, nbStates: 1, isRobot: true, offsetX: 5, offsetY: -5, zOrder: 2 },
      cell: { num: 1, color: "#d3e7b6", side: 60, isObstacle: false, zOrder: 0 },
      box: { num: 3, img: imgPath + "chest.png", side: 80, isExit: true, zOrder: 1, offsetX: -10, offsetY: 5 },
      leftArrow: { num: 4, img: imgPath + "leftArrow.png", side: 60, forwardsLeft: true, zOrder: 0 },
      rightArrow: { num: 5, img: imgPath + "rightArrow.png", side: 60, forwardsRight: true, zOrder: 0 },
      topArrow: { num: 6, img: imgPath + "topArrow.png", side: 60, forwardsTop: true, zOrder: 0 },
      bottomArrow: { num: 7, img: imgPath + "bottomArrow.png", side: 60, forwardsBottom: true, zOrder: 0 },
      marker: { num: 2, img: imgPath + "paint_marker.png", side: 60, isContainer: true, containerFilter: function (item) { return item.type === "paint"; }, zOrder: 0 },
      paint: { img: imgPath + "paint.png", side: 60, isWithdrawable: true, isColor: true, zOrder: 1 },
      obstacle: { num: 8, img: imgPath+"grey_brick_wall.png", side: 60, isObstacle: true, zOrder: 1 }
    },
    showIfMutator: true,

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
          shared: ["east", "south", "onBottomArrow"],
          easy: [],
          medium: [],
          hard: ["west", "onLeftArrow", "onRightArrow"],

        }
      },
      //Allgemeine Blöcke wie Bedingungen und Schleifen.
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: {
          shared: [],
          easy: ["controls_untilWhile"],
          medium: ["controls_infiniteloop", "controls_flow_statements", "controls_if"],
          hard: ["controls_infiniteloop", "controls_flow_statements", "controls_if", "logic_operation_or"],
        }
      },
    },
  };

  //Hier werden die Aufgaben definiert
  //Index row und col starten bei 0
  subTask.data = {
    easy: [{
      tiles: [
        [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
        [8, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 8],
        [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
        [8, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 8],
        [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
      ],
      initItems: [{
        row: 1,
        col: 1,
        // dir: 0,
        type: "robot"
      },]
    },
    {
      tiles: [
        [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
        [8, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 8],
        [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
        [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 8],
        [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
      ],
      initItems: [{
        row: 1,
        col: 1,
        // dir: 0,
        type: "robot"
      },]
    }
    ],
    medium: [{
      tiles: [
        [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
        [8, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 8],
        [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
        [8, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 8],
        [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
      ],
      initItems: [{
        row: 1,
        col: 1,
        // dir: 0,
        type: "robot"
      },]
    }, {
      tiles: [
        [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
        [8, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 8],
        [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
        [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 8],
        [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
      ],
      initItems: [{
        row: 1,
        col: 1,
        //   dir: 0,
        type: "robot"
      },]
    }
    ],
    hard: [
      {
        tiles: [
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
          [8, 5, 1, 1, 7, 1, 1, 1, 1, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
          [8, 1, 1, 1, 5, 1, 1, 1, 7, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
          [8, 1, 1, 1, 1, 5, 3, 1, 4, 1, 1, 8],
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
        ],
        initItems: [{
          row: 1,
          col: 1,
          //   dir: 0,
          type: "robot"
        },]
      },
      {
        tiles: [
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
          [8, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
          [8, 1, 1, 5, 1, 1, 1, 7, 1, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 5, 1, 1, 7, 8],
          [8, 5, 3, 1, 1, 1, 1, 1, 1, 1, 4, 8],
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
        ],
        initItems: [{
          row: 1,
          col: 1,
          //   dir: 0,
          type: "robot"
        },]
      },
      {
        tiles: [
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
          [8, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 5, 7, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 1, 5, 1, 7, 8],
          [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
          [8, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 8],
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
        ],
        initItems: [{
          row: 1,
          col: 1,
          //   dir: 0,
          type: "robot"
        },]
      }
    ]
  };

  initBlocklySubTask(subTask);
  displayHelper.thresholdEasy = 5000;
  displayHelper.thresholdMedium = 10000;
}

//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
initWrapper(initTask, ["easy", "medium", "hard"], null, false);