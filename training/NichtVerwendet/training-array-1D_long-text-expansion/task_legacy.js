function initTask(subTask) {
   subTask.gridInfos = {
      contextType: "paint",
      showLabels: true,
      maxInstructions: {
         easy: 40,
         medium: 30,
         hard: 60
      },
      includeBlocks: {
         groupByCategory: {
            easy: true,
            medium: true,
            hard: true
         },
         generatedBlocks: {
            robot: ["south", "east", "west", "dropObject", "onContainer", "col"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["variables"],
            singleBlocks: {
               shared: ["lists_repeat", "lists_getIndex", "lists_setIndex", "controls_repeat_ext", "controls_if", "math_number", "logic_compare", "logic_boolean"],
               easy: [],
               medium: ["math_arithmetic"],
               hard: ["lists_create_with_empty", "math_arithmetic"]
            }
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
                   [1, 4, 1, 4, 4, 1, 1, 4, 1, 4, 4, 4, 1, 4, 4, 1],
                   [1, 3, 4, 3, 3, 4, 4, 3, 4, 3, 3, 3, 4, 3, 3, 1]
               ],
            initItems: [
                  { row: 0, col: 0, type: "red_robot" }
               ]
         },
         {
            tiles: [
                   [1, 1, 4, 4, 4, 1, 4, 1, 4, 4, 1, 4, 1, 1, 4, 1],
                   [1, 4, 3, 3, 3, 4, 3, 4, 3, 3, 4, 3, 4, 4, 3, 1]
               ],
            initItems: [
                  { row: 0, col: 0, type: "red_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 4, 1, 4, 4, 1, 1, 4, 1, 4, 4, 4, 1, 4, 4, 1],
                   [1, 3, 3, 4, 3, 3, 3, 4, 3, 4, 4, 3, 3, 4, 3, 1]
               ],
            initItems: [
                  { row: 0, col: 0, type: "red_robot" }
               ]
         },
         {
            tiles: [
                   [1, 1, 4, 4, 4, 1, 4, 1, 4, 4, 1, 4, 1, 1, 4, 1],
                   [1, 3, 4, 4, 3, 4, 3, 3, 4, 3, 4, 3, 3, 3, 4, 1]
               ],
            initItems: [
                  { row: 0, col: 0, type: "red_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 4, 1, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 4, 4, 1],
                   [1, 4, 4, 1, 4, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 1],
                   [1, 4, 1, 4, 1, 1, 4, 1, 4, 4, 4, 1, 1, 4, 1, 1],
                   [1, 3, 4, 3, 3, 4, 4, 4, 3, 4, 3, 4, 4, 3, 3, 1]
               ],
            initItems: [
                  { row: 0, col: 0, type: "red_robot" }
               ]
         },
         {
            tiles: [
                   [1, 1, 1, 1, 4, 1, 1, 4, 4, 4, 1, 4, 4, 4, 1, 1],
                   [1, 4, 1, 4, 1, 4, 1, 4, 4, 4, 1, 4, 1, 1, 1, 1],
                   [1, 4, 4, 4, 1, 1, 4, 1, 4, 1, 4, 1, 1, 4, 1, 1],
                   [1, 3, 4, 3, 4, 4, 4, 3, 3, 3, 4, 3, 4, 3, 4, 1]
               ],
            initItems: [
                  { row: 0, col: 0, type: "red_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
