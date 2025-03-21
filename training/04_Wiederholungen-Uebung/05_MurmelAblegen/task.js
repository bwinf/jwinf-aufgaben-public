function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      conceptViewer: false,
      contextType: "marbles",
      //cellSide: cellSide,
      actionDelay: 200,
      hasGravity: false,
      // itemTypes: {
      //    green_robot: { img: "green_robot.png", side: 80, nbStates: 9, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
      //    hole: { num: 2, img: "hole.png", side: cellSide, category: "hole", isHole: true, zOrder: 0 },
      //    obstacle: { num: 3, img: "obstacle.png", side: cellSide, category: "obstacle", isObstacle: true, zOrder: 0 },
      //    marble: { num: 4, img: "marble.png", side: cellSide, category: "marble", isTransportable: true, zOrder: 1 }
      // },
      maxInstructions: {
         easy: 12,
         medium: 20,
         hard: 28

      },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: {
               shared: ["withdrawObject", "dropObject", "onObject", "onContainer"],
               easy: ["east"],
               medium: ["north", "east"],
               hard: ["north", "east", "west", "gridEdgeEast"]
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
               shared: ["controls_untilWhile", "logic_negate"],
               easy: [],
               medium: [],
               hard: []
            }
         }
      },
      multiple_marbles: { easy: false, medium: false, hard: true, },
      blocklyColourTheme: "bwinf",
      // checkEndCondition: robotEndConditions.checkMarblesInHoles,
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
               [1, 4, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1],
            ],
            initItems: [
               { row: 0, col: 0, type: "robot" }
            ]
         },
         {
            tiles: [
               [1, 1, 1, 4, 1, 1, 1, 1, 3, 1, 1, 1, 1],
            ],
            initItems: [
               { row: 0, col: 2, type: "robot" }
            ]
         }
      ],
      medium: [
         {
            tiles: [
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 4, 1, 1, 1, 3, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ],
            initItems: [
               { row: 6, col: 1, type: "robot" }
            ]
         },
         {
            tiles: [
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 4, 1, 1, 1, 1, 1, 1, 3, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ],
            initItems: [
               { row: 6, col: 1, type: "robot" }
            ]
         }
      ],
      hard: [
         {
            tiles: [
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ],
            initItems: [
               { row: 5, col: 1, type: "robot" }
            ]
         },
         {
            tiles: [
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 4, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ],
            initItems: [
               { row: 5, col: 1, type: "robot" }
            ]
         }
      ]
   };
   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
