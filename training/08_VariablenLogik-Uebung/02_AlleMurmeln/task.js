function initTask(subTask) {
   // var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      conceptViewer: false,
      contextType: "marbles",
      // cellSide: cellSide,
      actionDelay: 200,
      hasGravity: false,
      // itemTypes: {
      //    green_robot: { img: "green_robot.png", side: 80, nbStates: 9, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
      //    hole: { num: 2, img: "hole.png", side: cellSide, category: "hole", isHole: true, zOrder: 0 },
      //    obstacle: { num: 3, img: "obstacle.png", side: cellSide, category: "obstacle", isObstacle: true, zOrder: 0 },
      //    marble: { num: 4, img: "marble.png", side: cellSide, category: "marble", isTransportable: true, zOrder: 1 },
      //    4: { num: 6, side: cellSide, category: "number", value: 4 },
      //    7: { num: 7, side: cellSide, category: "number", value: 7 },
      //    2: { num: 8, side: cellSide, category: "number", value: 2 },
      // },
      maxInstructions: {
         easy: 20,
         medium: 20,
         hard: 30
      },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: {
              shared: ["east", "west"],
              easy: ["north", "south", "readNumber", "withdrawObject", "dropObject"],
              medium: ["north", "south", "withdrawObject", "dropObject"],
              hard: ["onObject", "withdrawObject", "dropObject"]
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
              shared: ["controls_repeat_ext_noShadow"],
               easy: [],
               medium: ["controls_for", "math_number"],
               hard: ["controls_whileUntil", "math_number", "logic_negate"]
            }
         },
         variables: {easy:["Anzahl Murmeln"],medium:["i"],hard:["Anzahl Murmeln"]},
         pythonAdditionalFunctions: {
            shared: ["range"]
         },
      },
      multiple_marbles: {easy:false, medium:false, hard:true,},
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
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,4,3,1,1,1,1,1],
        [1,1,1,4,3,1,1,1,1,1],
        [1,1,1,4,3,1,1,1,1,1],
        [1,1,1,4,3,1,1,1,1,1],
        [1,92,1,1,1,1,1,1,1,1]
        ],
        initItems: [
        { row: 9, col: 0, type: "robot" },
        { row: 9, col: 1, type: "board", value: 4},
        ]
      },
      {
        tiles: [
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,4,3,1,1,1,1,1],
        [1,1,1,4,3,1,1,1,1,1],
        [1,1,1,4,3,1,1,1,1,1],
        [1,1,1,4,3,1,1,1,1,1],
        [1,1,1,4,3,1,1,1,1,1],
        [1,1,1,4,3,1,1,1,1,1],
        [1,1,1,4,3,1,1,1,1,1],
        [1,92,1,1,1,1,1,1,1,1]
        ],
        initItems: [
        { row: 9, col: 0, type: "robot" },
        { row: 9, col: 1, type: "board", value: 7}
        ]
      },
      {
        tiles: [
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,4,3,1,1,1,1,1],
        [1,1,1,4,3,1,1,1,1,1],
        [1,92,1,1,1,1,1,1,1,1]
        ],
        initItems: [
        { row: 9, col: 0, type: "robot" },
        { row: 9, col: 1, type: "board", value: 2}
        ]
      }

      ],
      medium: [
         {
           tiles: [
           [1,1,1,1,1,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,4,1],
           [1,1,1,1,1,1,1,4,1,1],
           [1,1,1,1,1,1,4,1,1,1],
           [1,1,1,1,1,4,1,1,1,1],
           [1,1,1,1,4,1,1,1,1,1],
           [1,1,1,4,1,1,1,1,1,1],
           [1,1,4,1,1,1,1,1,1,1],
           [1,4,1,1,1,1,1,1,1,1],
           [1,3,3,3,3,3,3,3,3,1]
           ],
           initItems: [
           { row: 9, col: 0, type: "robot" }
           ]
         }
      ],
      hard: [
         {
           tiles: [
           [1,4,4,4,4,4,3,3,3,3,3,1,1,1],
           ],
           initItems: [
           { row: 0, col: 0, type: "robot" }
           ]
         },
         {
           tiles: [
           [1,4,4,4,3,3,3,1,1,1,1,1,1,1],
           ],
           initItems: [
           { row: 0, col: 0, type: "robot" }
           ]
         },
         {
           tiles: [
           [1,4,4,4,4,4,4,3,3,3,3,3,3,1],
           ],
           initItems: [
           { row: 0, col: 0, type: "robot" }
           ]
         },
      ]
   };
   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
