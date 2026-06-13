function initTask(subTask) {
  subTask.gridInfos = {
    conceptViewer: false,
    //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
    contextType: "paint",
    showCardinals: false,
    showLabels: true,
    blocklyColourTheme: "bwinf",
    //Gibt an, wie viele Blöcke zur Verfügung stehen
    //Für alle Versionen jeweils 20
    maxInstructions: {
      basic: 20,
      easy: 30,
      medium: 40,
      hard: 50
    },
    limitedUses:[
      //{blocks:['set'], nbUses: {easy: 1, medium: 1, hard: 1}}
    ],
    //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
    includeBlocks: {
      groupByCategory: true,
      //Alle Roboter spezifischen Blocks, welche für die Version jeweils genutzt werden.
      generatedBlocks: {
        robot: {
          shared: ["dropObject", "west", "east", "north", "south", "row", "col" , "readNumber"],
        },
      },
      //Allgemeine Blöcke wie Bedingungen und Schleifen.
      standardBlocks: {
        includeAll: false,
        wholeCategories: ["functions", 
          "variables"
        ],

        singleBlocks: {
          shared: [
            "controls_repeat_ext",
            "controls_untilWhile",
            "controls_for",
            "logic_compare",
            "controls_if",
            "controls_if_else",
            "math_number",
            "math_arithmetic",
          ],
          hard: ["math_extra_single_noShadow"]
        },
      },
      variables: {
        basic: [],
        easy: [],
        medium: ["Speicher"],
        hard: ["Speicher"]
      },
      variablesOnlyBlocks:{
        shared: ['set', 'get']
      }
    },
  };

  /**
   * Level werden auf der Basis von Koordinatenpaaren generiert.
   * Die erste Koordinate beschreibt die Zeile, die zweite Koordinate die Spalte des Feldes, welches eingefärbt werden soll
   */
  var basic1 = [[2, 2]];
  var basic2 = [[3, 2]];
  var basic3 = [[4, 3]];

  var pos1 = [
    [3, 1],
    [3, 3],
    [5, 4],
    [4, 3],
    [3, 4],
    [6, 6],
  ];
  var pos2 = [
    [5, 2],
    [3, 3],
    [4, 2],
    [3, 4],
    [5, 7],
    [3, 9],
    [5, 4],
    [5, 5],
  ];
 var pos3 = [
    [6, 6],
    [3, 1],
    [5, 4],
    [3, 3],
    [4, 3],
    [3, 4],
  ];

  // An welcher Koordinate startet der Roboter?
  const offset = 2

  function generateLevel(pos, showLength = false, showMarkers = true) {
    var maxX = Math.max(...pos.map((p) => p[1]));
    var maxY = Math.max(...pos.map((p) => p[0]));

    var height = Math.max(maxY, 2);

    var width = Math.max(pos.length + offset + 1, maxY);
    var tiles = tilesArray(width, height);

    if (showMarkers) {
      for (const p of pos) {
        tiles[p[0] - 1][p[1] - 1] = 2;
      }
    }

    return {
      tiles: tiles,
      initItems: generateCoordinates(pos, showLength),
    };
  }

  function tilesArray(width, height) {
    var boardLine = [1];
    var line = [1];
    for (var i = 1; i < width; i++) {
      boardLine.push(92);
      line.push[1];
    }
    var tiles = [boardLine.slice(), boardLine.slice()];
    for (var i = 2; i < height; i++) {
      tiles.push(line.slice());
    }
    return tiles;
  }

  function generateCoordinates(pos, showLength) {
    var items = [
      {
        row: 0,
        col: offset,
        type: "robot",
      },
    ];

    for (var i = 0; i < pos.length; i++) {
      items.push({
        row: 0,
        col: i + offset + 1,
        type: "board_notwritable",
        value: pos[i][0],
      });
      items.push({
        row: 1,
        col: i + offset + 1,
        type: "board_notwritable",
        value: pos[i][1],
      });
    }
    if (showLength) {
      items.push({
        row: 1,
        col: offset,
        type: "board_notwritable",
        value: pos.length,
      });
    }
    return items;
  }

  //Hier werden die Aufgaben definiert
  //Index row und col starten bei 0
  subTask.data = {
    //Version *
    basic: [basic1, basic2, basic3].map(p => generateLevel(p)),
    //Version **
    easy: [generateLevel(pos1)],
    //Version ***
    medium: [generateLevel(pos1, true), generateLevel(pos2, true)],
    // Version ****
    hard: [pos3, pos1, pos2].map(p => generateLevel(p, true)),
  };

  initBlocklySubTask(subTask);
  displayHelper.thresholdEasy = 5000;
  displayHelper.thresholdMedium = 10000;
}
//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
initWrapper(initTask, ["basic", "easy", "medium", "hard"], "basic", true);
