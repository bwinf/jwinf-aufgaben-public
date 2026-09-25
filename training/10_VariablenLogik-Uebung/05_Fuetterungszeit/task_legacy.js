function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: "extra_variable",
      contextType: "veterinary",
      //hideControls: { saveOrLoad: true},
      bagSize: 100,
      maxInstructions: {
         easy: 20,
         medium: 30,
         hard: 70,
      },
      blocklyColourTheme: "bwinf",
      includeBlocks: {
         groupByCategory: {
            easy: false,
            medium: false,
            hard: false
         },
         generatedBlocks: {
            robot: {
               easy: ["forward", "backwards", "withdrawNum", "dropNum", "nbWithdrawables",  "containerSize"],
               medium: ["forward", "backwards", "left", "right", "withdrawNum", "dropNum",  "containerSize"],
               hard: ["forward", "backwards", "left", "right", "withdrawNum", "dropNum", "nbWithdrawables", "containerSize"],
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
               easy: ["controls_repeat"],
               medium: ["controls_repeat", "math_number", "math_arithmetic"],
               hard: ["controls_repeat", "controls_if_else", "math_number", "math_arithmetic", "logic_compare"],
            }
         },
         variables : {
           easy: [],
           medium: ["RoboterGedächtnis"],
           hard: ["RoboterGedächtnis"]
         },
         variablesOnlyBlocks: {
            easy: [],
            medium: ["get", "set"],
            hard: ["get", "set", "incr"]
         },
         pythonAdditionalFunctions: {
            shared: ["range"]
         },
      }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [4, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 6, 6, 6, 6, 6, 1, 7, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 4, 4, 1, 1, 1, 4, 1, 1, 1],
               ],
            initItems: [
                  { row: 2, col: 1, dir: 0, type: "robot" },
                  { row: 2, col: 9, type: "beaver", containerSize: 12 }
               ].concat(initArray(2, {row: 2, col: 3, type: "wood_outside"}))
                .concat(initArray(3, {row: 2, col: 4, type: "wood_outside"}))
                .concat(initArray(1, {row: 2, col: 5, type: "wood_outside"}))
                .concat(initArray(2, {row: 2, col: 6, type: "wood_outside"}))
                .concat(initArray(4, {row: 2, col: 7, type: "wood_outside"}))
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 7, 1, 6, 1, 4, 1],
                   [1, 1, 1, 1, 7, 1, 6, 1, 1, 1],
                   [4, 1, 1, 1, 7, 1, 6, 1, 1, 1],
                   [1, 4, 1, 1, 7, 1, 6, 1, 1, 1],
                   [1, 1, 1, 1, 7, 1, 6, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 3, dir: 0, type: "robot" },
                  { row: 1, col: 4, type: "beaver", containerSize: 4 },
                  { row: 2, col: 4, type: "beaver", containerSize: 2 },
                  { row: 3, col: 4, type: "beaver", containerSize: 1 },
                  { row: 4, col: 4, type: "beaver", containerSize: 2 },
                  { row: 5, col: 4, type: "beaver", containerSize: 4 }
               ].concat(initArray(5, {row: 1, col: 6, type: "wood_outside"}))
                .concat(initArray(4, {row: 2, col: 6, type: "wood_outside"}))
                .concat(initArray(5, {row: 3, col: 6, type: "wood_outside"}))
                .concat(initArray(3, {row: 4, col: 6, type: "wood_outside"}))
                .concat(initArray(4, {row: 5, col: 6, type: "wood_outside"}))
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 4, 1, 1, 1, 1, 1, 4, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 7, 7, 7, 1, 6, 6, 1],
                   [4, 1, 1, 7, 7, 7, 1, 6, 6, 1],
                   [4, 1, 1, 7, 7, 7, 1, 6, 6, 1],
                   [1, 1, 1, 7, 7, 7, 1, 6, 6, 1],
                   [4, 1, 1, 7, 7, 7, 1, 6, 6, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 2, col: 1, dir: 0, type: "robot" },
                  { row: 2, col: 3, type: "beaver", containerSize: 5 },
                  { row: 2, col: 4, type: "beaver", containerSize: 2 },
                  { row: 2, col: 5, type: "beaver", containerSize: 1 },

                  { row: 3, col: 3, type: "beaver", containerSize: 1 },
                  { row: 3, col: 4, type: "beaver", containerSize: 3 },
                  { row: 3, col: 5, type: "beaver", containerSize: 1 },

                  { row: 4, col: 3, type: "beaver", containerSize: 2 },
                  { row: 4, col: 4, type: "beaver", containerSize: 3 },
                  { row: 4, col: 5, type: "beaver", containerSize: 1 },

                  { row: 5, col: 3, type: "beaver", containerSize: 4 },
                  { row: 5, col: 4, type: "beaver", containerSize: 4 },
                  { row: 5, col: 5, type: "beaver", containerSize: 4 },

                  { row: 6, col: 3, type: "beaver", containerSize: 5 },
                  { row: 6, col: 4, type: "beaver", containerSize: 1 },
                  { row: 6, col: 5, type: "beaver", containerSize: 7 },
               ].concat(initArray(5, {row: 2, col: 7, type: "wood_outside"}))
               .concat(initArray(3, {row: 3, col: 7, type: "wood_outside"}))
               .concat(initArray(4, {row: 2, col: 8, type: "wood_outside"}))
                .concat(initArray(6, {row: 3, col: 8, type: "wood_outside"}))

                .concat(initArray(2, {row: 4, col: 7, type: "wood_outside"}))
                .concat(initArray(4, {row: 4, col: 8, type: "wood_outside"}))

                .concat(initArray(9, {row: 5, col: 7, type: "wood_outside"}))
                .concat(initArray(5, {row: 5, col: 8, type: "wood_outside"}))

                .concat(initArray(11, {row: 6, col: 7, type: "wood_outside"}))
                .concat(initArray(7, {row: 6, col: 8, type: "wood_outside"}))
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
