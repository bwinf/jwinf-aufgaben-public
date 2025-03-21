function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      conceptViewer: false,
      contextType: "gems",
      // cellSide: cellSide,
      actionDelay: 200,
      // itemTypes: {
      //    green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, dir: 1, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
      //    obstacle: { num: 2, img: "obstacle.png", side: cellSide, category: "obstacle", isObstacle: true, isHole: false, zOrder: 0 },
      //    gem: { num: 3, img: "blue_gem.png", side: cellSide, category: "marble", isObstacle: false, isCollectible: true, zOrder: 1 },
      // },
      maxInstructions: {
            easy: 10,
            medium: 20,
            hard: 20
         },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["left", "right", "forward"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               easy: [],
               medium: ["controls_repeat"],
               hard: ["controls_repeat"]
            }
         },
         pythonAdditionalFunctions: {
            medium: ["range"],
            hard: ["range"]
         },
      },
      blocklyColourTheme: "bwinf",
      additionalBlocksByLevel: {
          easy: {generatedBlocks: {}, standardBlocks: {}},
          medium: {standardBlocks: {},},
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      // checkEndCondition: function(context, lastTurn) {
      //    var solved = true;
      //    for (var iRow = 0; iRow < context.tiles.length; iRow++) {
      //       var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
      //       for (var iCol = 0; iCol < row.length; iCol++) {
      //          var collectibles = context.getItems(iRow, iCol, {isCollectible: true});
      //          if (collectibles.length != 0) {
      //             solved = false;
      //          }
      //       }
      //    }
      //    if (solved) {
      //       context.success = true;
      //       throw(window.taskStrings.success);
      //    }
      //    if (lastTurn) {
      //       context.success = false;
      //       throw(window.taskStrings.failure);
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
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 3, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 4, col: 0, dir: 0, type: "robot" },
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 3, 1, 1, 3, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 3, 1, 1, 1, 3, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 8, col: 0, dir: 0, type: "robot" },
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 10, col: 0, dir: 0, type: "robot" },
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
