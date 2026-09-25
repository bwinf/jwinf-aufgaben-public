function initTask(subTask) {
    //var cellSide = 60;
 
    subTask.gridInfos = {
      conceptViewer: false,
      contextType: "paint",
       //cellSide: cellSide,
       actionDelay: 200,
      //  itemTypes: {
      //     green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
      //     0: { num: 100, side: cellSide, category: "number", value: 0 },
      //     1: { num: 101, side: cellSide, category: "number", value: 1 },
      //     2: { num: 2, side: cellSide, category: "number", value: 2 },
      //     3: { num: 3, side: cellSide, category: "number", value: 3 },
      //     4: { num: 4, side: cellSide, category: "number", value: 4 },
      //     5: { num: 5, side: cellSide, category: "number", value: 5 },
      //     6: { num: 6, side: cellSide, category: "number", value: 6 },
      //     7: { num: 7, side: cellSide, category: "number", value: 7 },
      //     8: { num: 8, side: cellSide, category: "number", value: 8 },
      //     marker: { num: 9, img: "marker.png", side: cellSide, category: "paint", isObstacle: false, hasColor: true, color: "marker" },
      //     paint: { img: "paint.png", side: cellSide, category: "paint", color: "gris" }
      //  },
       blocklyColourTheme: "bwinf",
       maxInstructions: {
          easy: 15,
          medium: 25,
          hard: 30
       },
       includeBlocks: {
          groupByCategory: {
             easy: false,
             medium: true,
             hard: true
          },
          generatedBlocks: {
             robot: {
                easy: ["east", "readNumber", "dropObject"],
                medium: ["east", "west", "south", "readNumber", "dropObject"],
                hard: ["east", "west", "south", "readNumber", "dropObject"]
             }
          },
          standardBlocks: {
             includeAll: false,
             wholeCategories: {
                easy: [],
                medium: ["variables"],
                hard: ["variables"]
             },
             singleBlocks: {
                easy: ["controls_repeat_ext"],
                medium: ["controls_repeat_ext"],
                hard: ["controls_repeat_ext", "math_arithmetic", "math_number"]
             }
          },
          variables: {
             easy: ["anzahlMarkierungen"],
             medium: [],
             hard: []
          }
       },
       checkEndEveryTurn: false,
      //  checkEndCondition: function(context, lastTurn) {
      //     if (lastTurn) {
      //        for (var iRow = 0; iRow < context.tiles.length; iRow++) {
      //           var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
      //           for (var iCol = 0; iCol < row.length; iCol++) {
      //              var tile = row[iCol];
      //              var paints = context.getItems(iRow, iCol, {color: "gris"});
      //              if ((paints.length > 0) != (tile == 9)) {
      //                 context.success = false;
      //                 throw("Der Roboter hat nicht genau die vorgegebenen Felder eingefärbt.");
      //              }
      //           }
      //        }
      //        context.success = true;
      //        throw("Bravo! Du hast das Muster richtig gezeichnet!");
      //     }
      //  },
      //  computeGrade: function(context, message) {
      //     var rate = 0;
      //     if (context.success) {
      //        rate = 1;
      //     }
      //     return {
      //        successRate: rate,
      //        message: message
      //     };
      //  }
    };
 
    subTask.data = {
       easy: [
          {
             tiles: [
                    [1, 92, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1]
                ],
             initItems: [
                   { row: 0, col: 0, type: "robot" },
                   { row: 0, col: 1, type: "board_notwritable", value: 5}
   
                ]
          },
          {
             tiles: [
                    [1, 92, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1]
                ],
             initItems: [
                   { row: 0, col: 0, type: "robot" },
                   { row: 0, col: 1, type: "board_notwritable", value: 7}
                ]
          }
       ],
       medium: [
          {
             tiles: [
                    [1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 92, 92, 1, 1, 1, 1, 1],
                    [1, 1, 2, 2, 2, 2, 2, 1],
                    [1, 1, 2, 2, 2, 2, 2, 1],
                    [1, 1, 2, 2, 2, 2, 2, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1]
                ],
             initItems: [
                   { row: 1, col: 0, type: "robot" },
                   { row: 1, col: 1, type: "board_notwritable", value: 3},
                   { row: 1, col: 2, type: "board_notwritable", value: 5}
                ]
          },
          {
             tiles: [
                    [1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 92, 92, 1, 1, 1, 1, 1, 1],
                    [1, 1, 2, 2, 2, 2, 2, 2, 1],
                    [1, 1, 2, 2, 2, 2, 2, 2, 1],
                    [1, 1, 2, 2, 2, 2, 2, 2, 1],
                    [1, 1, 2, 2, 2, 2, 2, 2, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1]
                ],
             initItems: [
                   { row: 1, col: 0, type: "robot" },
                   { row: 1, col: 1, type: "board_notwritable", value: 4},
                   { row: 1, col: 2, type: "board_notwritable", value: 6}
                ]
          }
       ],
       hard: [
          {
             tiles: [
                    [1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 92, 1, 1, 1, 1, 1, 1],
                    [1, 1, 2, 1, 1, 1, 1, 1],
                    [1, 1, 2, 2, 1, 1, 1, 1],
                    [1, 1, 2, 2, 2, 1, 1, 1],
                    [1, 1, 2, 2, 2, 2, 1, 1],
                    [1, 1, 2, 2, 2, 2, 2, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1]
                ],
             initItems: [
                   { row: 1, col: 0, type: "robot" },
                   { row: 1, col: 1, type: "board_notwritable", value: 5},
                ]
          },
          {
             tiles: [
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 92, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
                    [1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
                    [1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1],
                    [1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1],
                    [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                ],
             initItems: [
                   { row: 1, col: 0, type: "robot" },
                   { row: 1, col: 1, type: "board_notwritable", value: 8},
                ]
          }
       ]
    };
 
    initBlocklySubTask(subTask);
    displayHelper.thresholdEasy = 5000;
    displayHelper.thresholdMedium = 10000;
 }
 
 initWrapper(initTask, ["easy", "medium", "hard"], null, true);
 