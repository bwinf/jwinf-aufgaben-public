function initTask(subTask) {
   // var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      conceptViewer: false,
      contextType: "paint",
      //actionDelay: 200,
      maxInstructions: {
         easy: 10,
         medium: 15,
         hard: 45
      },
      includeBlocks: {
         easy: {
            groupByCategory: false,
            generatedBlocks: {
               robot: ["east", "dropObject", "paintNorth"]
            },
            standardBlocks: {
               includeAll: false,
               wholeCategories: [],
               singleBlocks: ["controls_if", "controls_repeat"],
            }
         },
         medium: {
            groupByCategory: false,
            generatedBlocks: {
               robot: ["east", "dropObject", "paintNorth", "paintNorthWest"]
            },
            standardBlocks: {
               includeAll: false,
               wholeCategories: [],
               singleBlocks: ["logic_negate", "controls_if", "controls_if_else", "controls_repeat"],
            }
         },
         hard: {
            groupByCategory: false,
            generatedBlocks: {
               robot: ["east", "west", "south", "dropObject", "paintNorth", "paintNorthWest", "paintNorthEast"],
            },
            standardBlocks: {
               includeAll: false,
               wholeCategories: [],
               singleBlocks: ["logic_negate", "controls_if", "controls_if_else", "controls_repeat"],
            }
         },
         pythonAdditionalFunctions: {
            shared: ["range"]
         }
      },
      blocklyColourTheme: "bwinf",
      //ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
   };

   subTask.data = {
      easy: [{
         tiles: [
            [1, 1, 3, 1, 3, 3, 1, 3, 1, 3, 3, 3, 1, 3, 1],
            [1, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1]
         ],
         initItems: [{
            row: 1,
            col: 0,
            type: "robot"
         }, ]
      }],
      medium: [{
         tiles: [
            [1, 1, 3, 1, 3, 3, 1, 3, 3, 1, 1, 3, 3, 1, 1],
            [1, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1]
         ],
         initItems: [{
            row: 1,
            col: 0,
            type: "robot"
         }, ]
      }],
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1],
            [1, 1, 1, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1],
            [1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1],
            [1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 1, 1, 1, 2, 2, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 0,
            col: 0,
            type: "robot"
         }, ]
      }]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);