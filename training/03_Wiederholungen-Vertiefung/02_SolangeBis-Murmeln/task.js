function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      conceptViewer: false,
      contextType: "marbles",
      //cellSide: cellSide,
      actionDelay: 200,
      // itemTypes: {
      //    green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
      //    hole: { num: 2, img: "hole.png", side: cellSide, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
      //    marble: { num: 3, img: "marble.png", side: cellSide, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 }
      // },
      maxInstructions: {
         easy: 15,
         medium: 15,
         hard: 20
      },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: {
               easy: ["east", "withdrawObject", "dropObject", "onContainer"],
               medium: ["east", "west", "south", "withdrawObject", "dropObject", "onObject", "onContainer"],
               hard: ["east", "west", "south", "withdrawObject", "dropObject", "onObject", "onContainer"]
            }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               easy: ["controls_whileUntil", "logic_negate"],
               medium: ["controls_repeat", "controls_whileUntil", "logic_negate"],
               hard: ["controls_whileUntil", "logic_negate", "controls_repeat"]
            }
         },
         pythonAdditionalFunctions: {
            shared: ["range"]
         },
      },
      blocklyColourTheme: "bwinf",
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      // checkEndCondition: function(context, lastTurn) {
      //    var solved = true;
      //    for (var iRow = 0; iRow < context.tiles.length; iRow++) {
      //       var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
      //       for (var iCol = 0; iCol < row.length; iCol++) {
      //          var marbles = context.getItems(iRow, iCol, {category: "marble"});
      //          var holes = context.getItems(iRow, iCol, {category: "hole"});
      //          if (marbles.length != holes.length) {
      //             solved = false;
      //          }
      //       }
      //    }
      //    if (solved) {
      //       context.success = true;
      //       throw("Bravo! Du hast alle Murmeln richtig abgelegt!");
      //    }
      //    if (lastTurn) {
      //       context.success = false;
      //       throw("Die Murmeln liegen nicht an der richtigen Stelle!");
      //    }
      // },
      // computeGrade: function(context, message) {
      //    var rate = 0;
      //    if (context.success) {
      //       rate = 1;
      //    }
      //    return {
      //       successRate: rate,
      //       message: message
      //    };
      // }
   };

   subTask.data = {
      easy: [{
            tiles: [
               [1, 4, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1]
            ],
            initItems: [{
               row: 0,
               col: 0,
               type: "robot"
            }, ]
         },
         {
            tiles: [
               [1, 4, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1]
            ],
            initItems: [{
               row: 0,
               col: 0,
               type: "robot"
            }, ]
         }
      ],
      medium: [{
            tiles: [
               [1, 4, 1, 1, 3, 1, 1],
               [1, 4, 1, 1, 3, 1, 1],
               [1, 4, 1, 1, 3, 1, 1],
               [1, 4, 1, 1, 3, 1, 1],
               [1, 4, 1, 1, 3, 1, 1],
               [1, 4, 1, 1, 3, 1, 1],
               [1, 1, 1, 1, 1, 1, 1],
            ],
            initItems: [{
               row: 0,
               col: 0,
               type: "robot"
            }, ]
         },
         {
            tiles: [
               [1, 4, 1, 1, 3, 1, 1],
               [1, 4, 1, 1, 3, 1, 1],
               [1, 4, 1, 1, 3, 1, 1],
               [1, 4, 1, 1, 3, 1, 1],
               [1, 1, 1, 1, 1, 1, 1],
            ],
            initItems: [{
               row: 0,
               col: 0,
               type: "robot"
            }, ]
         }
      ],
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 4, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 4, 1, 1, 1, 3, 1, 1, 1, 1],
            [1, 1, 1, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 4, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1],
            [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 0,
            col: 0,
            type: "robot"
         }, ]
      }]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);