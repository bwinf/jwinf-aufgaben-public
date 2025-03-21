function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false,
      contextType: "castle",
      //hideControls: { saveOrLoad: true},
      nbPlatforms: 100,
      maxInstructions: {
         basic: 12,
         easy: 12,
         medium: 20,
         hard: 30
      },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: {
               easy: ["forward", "withdrawObject", "dropObject", "dropPlatformInFront", "platformInFront"],
               medium: ["forward", "withdrawObject", "dropObject", "dropPlatformInFront", "platformInFront", "onObject", "onContainer"],
               hard: ["forward", "turnAround","jump", "withdrawObject", "dropObject", "dropPlatformInFront", "dropPlatformAbove", "platformInFront", "platformAbove", "onObject", "onContainer"],
            }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               easy: ["controls_if", "logic_negate"],
               medium: ["controls_repeat", "controls_if", "logic_negate"],
               hard: ["controls_repeat", "controls_if", "logic_negate"],
            }
         },
         pythonAdditionalFunctions: {
            shared: ["range"]
         },
      },
      blocklyColourTheme: "bwinf",
   };

   subTask.data = {
      easy: [{
            tiles: [
               [1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1],
               [1, 1, 5, 4, 1],
               [2, 1, 2, 2, 2],
               [1, 1, 1, 1, 1],
            ],
            initItems: [{
               row: 2,
               col: 0,
               dir: 0,
               type: "robot"
            }, ]
         },
         {
            tiles: [
               [1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1],
               [1, 1, 5, 4, 1],
               [2, 2, 2, 2, 2],
               [1, 1, 1, 1, 1],
            ],
            initItems: [{
               row: 2,
               col: 0,
               dir: 0,
               type: "robot"
            }, ]
         }
      ],
      medium: [{
            tiles: [
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
               [2, 2, 1, 2, 2, 1, 2, 1, 1, 2, 2, 2],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ],
            initItems: [{
               row: 2,
               col: 0,
               dir: 0,
               type: "robot"
            }, ]
         },
         {
            tiles: [
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 4],
               [2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ],
            initItems: [{
               row: 2,
               col: 0,
               dir: 0,
               type: "robot"
            }, ]
         },
         {
            tiles: [
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 5, 1, 1, 1, 1, 1, 4, 1, 1],
               [2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ],
            initItems: [{
               row: 2,
               col: 0,
               dir: 0,
               type: "robot"
            }, ]
         }
      ],
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 4, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 5, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 4, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 10,
            col: 0,
            dir: 0,
            type: "robot"
         }, ]
      }]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);