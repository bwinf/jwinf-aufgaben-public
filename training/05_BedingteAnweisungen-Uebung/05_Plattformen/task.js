function initTask(subTask) {
   //var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      conceptViewer: false,
      contextType: "castle",
      //cellSide: cellSide,
      actionDelay: 200,
      hasGravity: true,
      // itemTypes: {
      //    green_robot: { img: "green_robot.png", side: 80, nbStates: 9, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
      //    platform: { num: 2, img: "platform.png", side: cellSide, category: "platform", isObstacle: true, zOrder: 0 },
      //    hole: { num: 3, img: "hole.png", side: cellSide, category: "hole", isHole: true, zOrder: 0 },
      //    obstacle: { num: 4, img: "obstacle.png", side: cellSide, category: "obstacle", isObstacle: true, zOrder: 0 },
      //    marble: { num: 5, img: "marble.png", side: cellSide, category: "marble", isTransportable: true, zOrder: 1 }
      // },
      maxInstructions: {
         easy: 12,
         medium: 20,
         hard: 20
      },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: {
               easy: ["forward", "jump", "withdrawObject", "dropObject", "platformAbove"],
               medium: ["forward", "turnAround", "jump", "withdrawObject", "dropObject", "onContainer", "platformAbove", "obstacleInFront"],
               hard: ["forward", "jump", "backwards", "turnAround", "withdrawObject", "dropObject", "onContainer", "onObject"]
            }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {
               easy: [],
               medium: [],
               hard: []
            },
            singleBlocks: {
               easy: ["controls_repeat", "controls_if"],
               medium: ["controls_repeat", "controls_if", "controls_if_else"],
               hard: ["controls_repeat", "controls_if", "controls_if_else"]
            }
         },
         pythonAdditionalFunctions: {
            shared: ["range"]
         }
      },
      multiple_marbles: {easy:false, medium:false, hard:true,},
      blocklyColourTheme: "bwinf",
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
      //       if (context.infos.multiple_marbles) {
      //         throw(window.languageStrings.messages.successAllMarblesInHoles);
      //       }
      //       throw(window.languageStrings.messages.successOneMarbleInHole);
      //    }
      //    if (lastTurn) {
      //       context.success = false;
      //       if (context.infos.multiple_marbles) {
      //         throw(window.languageStrings.messages.failureAllMarblesInHoles);
      //       }
      //       throw(window.languageStrings.messages.failureOneMarbleInHole);
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
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ],
            initItems: [
                  { row: 15, col: 0, dir:0, type: "robot" }
            ]
         }
      ],
      medium: [
         {
            tiles: [
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [6, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 6],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1],
               [1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1],
               [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
               [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ],
            initItems: [
                  { row: 15, col: 0, dir: 0, type: "robot" }
            ]
         }
      ],
      hard: [
         {
            tiles: [
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
               [1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2],
               [1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
               [1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1],
               [1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [
                  { row: 12, col: 0, dir: 0, type: "robot" }
            ]
         }
      ]
   };
   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
