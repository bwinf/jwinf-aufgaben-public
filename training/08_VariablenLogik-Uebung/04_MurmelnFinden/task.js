function initTask(subTask) {
   //var cellSide = 60;

   subTask.gridInfos = {
      //cellSide: cellSide,
      conceptViewer: false,
      contextType: "marbles",
      actionDelay: 200,
      // itemTypes: {
      //    green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
      //    0: { num: 100, side: cellSide, category: "number", value: 0 },
      //    1: { num: 101, side: cellSide, category: "number", value: 1 },
      //    2: { num: 2, side: cellSide, category: "number", value: 2 },
      //    3: { num: 3, side: cellSide, category: "number", value: 3 },
      //    4: { num: 4, side: cellSide, category: "number", value: 4 },
      //    5: { num: 5, side: cellSide, category: "number", value: 5 },
      //    6: { num: 6, side: cellSide, category: "number", value: 6 },
      //    7: { num: 7, side: cellSide, category: "number", value: 7 },
      //    8: { num: 8, side: cellSide, category: "number", value: 8 },
      //    9: { num: 9, side: cellSide, category: "number", value: 9 },
      //    10: { num: 10, side: cellSide, category: "number", value: 10 },
      //    11: { num: 11, side: cellSide, category: "number", value: 11 },
      //    12: { num: 12, side: cellSide, category: "number", value: 12 },
      //    13: { num: 13, side: cellSide, category: "number", value: 13 },
      //    14: { num: 14, side: cellSide, category: "number", value: 14 },
      //    15: { num: 15, side: cellSide, category: "number", value: 15 },
      //    16: { num: 16, side: cellSide, category: "number", value: 16 },
      //    17: { num: 17, side: cellSide, category: "number", value: 17 },
      //    18: { num: 18, side: cellSide, category: "number", value: 18 },
      //    19: { num: 19, side: cellSide, category: "number", value: 19 },
      //    20: { num: 20, side: cellSide, category: "number", value: 20 },
      //    hole: { num: 21, img: "hole.png", side: cellSide, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
      //    marble: { num: 22, img: "marble.png", side: cellSide, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 }
      // },
      blocklyColourTheme: "bwinf",
      maxInstructions: 40,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
           robot: ["east", "west", "south", "north", "readNumber", "withdrawObject", "dropObject"]
         },
         standardBlocks: {
            includeAll: false,
            singleBlocks: {
               easy: ["controls_repeat_ext"],
               medium: ["controls_repeat_ext", "math_arithmetic", "math_number"],
               hard: ["controls_repeat_ext"]
            },
            wholeCategories: ["variables"],
         },
         variables: {easy:["rechts", "unten"],medium:["rechts", "unten"]},
         pythonAdditionalFunctions: {
            shared: ["range"]
         },
      },
      checkEndEveryTurn: true,
      // checkEndCondition: function(context, lastTurn) {
      //   var solved = true;
      //   for (var iRow = 0; iRow < context.tiles.length; iRow++) {
      //     var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
      //     for (var iCol = 0; iCol < row.length; iCol++) {
      //       var marbles = context.getItems(iRow, iCol, {category: "marble"});
      //       var holes = context.getItems(iRow, iCol, {category: "hole"});
      //       if (marbles.length != holes.length) {
      //         solved = false;
      //       }
      //     }
      //   }
      //   if (solved) {
      //     context.success = true;
      //     throw("Bravo! Du hast alle Murmeln richtig abgelegt!");
      //   }
      //   if (lastTurn) {
      //     context.success = false;
      //     throw("Die Murmeln liegen nicht an der richtigen Stelle!");
      //   }
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
            [1,92,92,1,1,1,1,1,1,1,1,1],
            [3,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,4,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1]
               ],
            initItems: [
                  { row: 0, col: 0, type: "robot" },
                  { row: 0, col: 1, type: "board", value: 3},
                  { row: 0, col: 2, type: "board", value: 5},
               ]
         },
         {
           tiles: [
           [1,92,92,1,1,1,1,1,1,1,1,1],
           [3,1,1,1,1,1,1,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,1,4,1,1],
           [1,1,1,1,1,1,1,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,1,1,1,1]
           ],
           initItems: [
           { row: 0, col: 0, type: "robot" },
           { row: 0, col: 1, type: "board", value: 9},
           { row: 0, col: 2, type: "board", value: 4},
           ]
         }
      ],
      medium: [
      {
        tiles: [
        [1,92,92,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,4,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,3]
        ],
        initItems: [
        { row: 0, col: 0, type: "robot" },
        { row: 0, col: 1, type: "board", value: 3},
        { row: 0, col: 2, type: "board", value: 5},
        ]
      },
      {
        tiles: [
        [1,92,92,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,4,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,3]
        ],
        initItems: [
        { row: 0, col: 0, type: "robot" },
        { row: 0, col: 1, type: "board", value: 7},
        { row: 0, col: 2, type: "board", value: 3},
        ]
      }
      ],
      hard: [
      {
        tiles: [
        [1,92,92,92,92,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,3,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,4,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        initItems: [
        { row: 0, col: 0, type: "robot" },
        { row: 0, col: 1, type: "board", value: 3},
        { row: 0, col: 2, type: "board", value: 5},
        { row: 0, col: 3, type: "board", value: 8},
        { row: 0, col: 4, type: "board", value: 2},
        ]
      },
      {
        tiles: [
        [1,92,92,92,92,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,4,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,3,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        initItems: [
        { row: 0, col: 0, type: "robot" },
        { row: 0, col: 1, type: "board", value: 8},
        { row: 0, col: 2, type: "board", value: 2},
        { row: 0, col: 3, type: "board", value: 3},
        { row: 0, col: 4, type: "board", value: 5},
        ]
      }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
