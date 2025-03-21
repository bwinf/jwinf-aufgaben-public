function initTask(subTask) {
   subTask.gridInfos = {
      contextType: "paint",
      hideSaveOrLoad: true,
      maxInstructions: {
         easy: 16,
         medium: 35,
         hard: 55,
      },
      includeBlocks: {
        groupByCategory: {easy: false, medium: true, hard: true},
        generatedBlocks: {
          robot: {
            easy: ["east", "dropObject", "onPaint"],
            medium: ["east", "west", "north", "dropObject", "onPaint"],
            hard: ["east", "west", "north", "dropObject", "onPaint"]
          }
        },
        standardBlocks: {
          includeAll: false,
          wholeCategories: {easy: [], medium: ["variables"], hard: ["variables"]},
          singleBlocks: {
            easy: ["controls_repeat_ext", "controls_whileUntil", "controls_if", "math_number"],
            medium: ["lists_create_with_empty", "lists_repeat", "lists_getIndex", "lists_setIndex", "controls_repeat_ext", "controls_if", "controls_for", "math_number", "math_arithmetic", "logic_compare"],
            hard: ["lists_create_with_empty", "lists_repeat", "lists_getIndex", "lists_setIndex", "controls_repeat_ext", "controls_if", "controls_for", "math_number", "math_arithmetic", "logic_compare"]
          }

        },
        variables: {easy: ["Anzahl"]},
        //variablesOnlyBlocks: ['set','get']
      },

      blocklyColourTheme: "bwinf",
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
   };

   subTask.data = {
      easy: [
         {
           tiles: [
              [1, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1],
           ],
           initItems: [
              { row: 0, col: 0, type: "robot" },
           ]
         },
         {
           tiles: [
              [1, 3, 3, 3, 3, 3, 3, 3,2,2,2,2,2,2,2, 1],
           ],
           initItems: [
              { row: 0, col: 0, type: "robot" },
           ]
         },
         {
           tiles: [
           [1, 3, 3, 3,2,2,2, 1],
           ],
           initItems: [
           { row: 0, col: 0, type: "robot" },
           ]
         },
      ],
      medium: [
         {
           tiles: [
              [1,2, 1,2,2,2,2,2, 1,2,2, 1,2, 1, 1],
              [1, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 1, 3, 1, 1]
           ],
           initItems: [
              { row: 1, col: 0, type: "robot" },
           ]
         },
         {
           tiles: [
              [1,2,2,2, 1, 1,2,2, 1,2, 1,2,2, 1, 1],
              [1, 3, 3, 3, 1, 1, 3, 3, 1, 3, 1, 3, 3, 1, 1]
           ],
           initItems: [
              { row: 1, col: 0, type: "robot" },
           ]
         }
      ],
      hard: [
         {
           tiles: [
              [1, 1, 1, 1, 1, 1, 1, 1, 1],
              [1,2,2,2,2,2, 1, 1, 1],
              [1,2, 1, 1,2,2,2, 1, 1],
              [1, 1, 1, 1,2,2,2, 1, 1],
              [1, 1, 1,2,2,2, 1, 1, 1],
              [1, 1, 1, 3, 3, 3, 1, 1, 1],
              [1, 1, 3, 3, 3, 1, 1, 1, 1],
              [1, 1, 3, 3, 3, 1, 1, 3, 1],
              [1, 1, 1, 3, 3, 3, 3, 3, 1]
           ],
           initItems: [
              { row: 8, col: 0, type: "robot" },
           ]
         },
         {
           tiles: [
           [1, 1, 1, 1, 1, 1, 1, 1, 1],
           [1,2, 1, 1, 1, 1, 1,2, 1],
           [1,2,2, 1, 1, 1, 1,2, 1],
           [1,2,2,2, 1, 1,2,2, 1],
           [1,2,2,2,2, 1,2,2, 1],
           [1, 3, 3, 1, 3, 3, 3, 3, 1],
           [1, 3, 3, 1, 1, 3, 3, 3, 1],
           [1, 3, 1, 1, 1, 1, 3, 3, 1],
           [1, 3, 1, 1, 1, 1, 1, 3, 1]
           ],
           initItems: [
           { row: 8, col: 0, type: "robot" },
           ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
