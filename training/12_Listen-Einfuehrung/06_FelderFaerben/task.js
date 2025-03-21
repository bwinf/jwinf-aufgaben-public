function initTask(subTask) {
subTask.gridInfos = {
      showLabels: true,
      contextType: "paint",
      //maxIterWithoutAction: 2000,
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
            robot: {
               easy: ["south", "east", "west", "dropObject", "onPaint", "col"],
               medium: ["south", "east", "west", "dropObject", "onPaint", "col"],
               hard: ["south", "east", "west", "dropObject", "onPaint", "col"]
            }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["variables"],
            singleBlocks: {
               easy: ["lists_repeat", "lists_getIndex", "lists_setIndex", "controls_repeat_ext", "controls_if", "math_number", "logic_compare", "logic_boolean"],
               medium: ["lists_repeat", "lists_getIndex", "lists_setIndex", "controls_repeat_ext", "controls_if", "math_number", "math_arithmetic", "logic_compare"],
               hard: ["lists_repeat", "lists_create_with_empty", "lists_getIndex", "lists_setIndex", "controls_repeat_ext", "controls_if", "math_number", "math_arithmetic", "logic_compare"]
            }
         }
      },
      blocklyColourTheme: "bwinf",
      checkEndEveryTurn: false,
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 3, 1, 3, 3, 1, 1, 3, 1, 3, 3, 3, 1, 3, 3, 1],
                   [1, 2, 1, 2, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2, 2, 1],
               ],
            initItems: [
                  { row: 0, col: 0, type: "robot" },
               ]
         },
         {
            tiles: [
                   [1, 1, 3, 3, 3, 1, 3, 1, 3, 3, 1, 3, 1, 1, 3, 1],
                   [1, 1, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1],
               ],
            initItems: [
                  { row: 0, col: 0, type: "robot" },
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 3, 1, 3, 3, 1, 1, 3, 1, 3, 3, 3, 1, 3, 3, 1],
                   [1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2, 1],
               ],
            initItems: [
                  { row: 0, col: 0,type: "robot" },
               ]
         },
         {
            tiles: [
                   [1, 1, 3, 3, 3, 1, 3, 1, 3, 3, 1, 3, 1, 1, 3, 1],
                   [1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1],
               ],
            initItems: [
                  { row: 0, col: 0, type: "robot" },
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 3, 1, 3, 3, 3, 1, 1, 1, 1, 3, 1, 1, 3, 3, 1],
                   [1, 3, 3, 1, 3, 1, 1, 1, 3, 1, 3, 1, 3, 1, 3, 1],
                   [1, 3, 1, 3, 1, 1, 3, 1, 3, 3, 3, 1, 1, 3, 1, 1],
                   [1, 2, 1, 2, 2, 1, 1, 1, 2, 1, 2, 1, 1, 2, 2, 1]
               ],
            initItems: [
                  { row: 0, col: 0, type: "robot" },
               ]
         },
         {
            tiles: [
                   [1, 1, 1, 1, 3, 1, 1, 3, 3, 3, 1, 3, 3, 3, 1, 1],
                   [1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 1, 3, 1, 1, 1, 1],
                   [1, 3, 3, 3, 1, 1, 3, 1, 3, 1, 3, 1, 1, 3, 1, 1],
                   [1, 2, 1, 2, 1, 1, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 0, type: "robot" },
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
