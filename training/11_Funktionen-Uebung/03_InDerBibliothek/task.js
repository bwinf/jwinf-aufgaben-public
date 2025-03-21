function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false,
      blocklyColourTheme: "bwinf",
      contextType: "packages",
      hideControls: {
         saveOrLoad: false
      },
      bagSize: 100,
      maxInstructions: {
         easy: 15,
         medium: 15,
         hard: 30,
      },
      includeBlocks: {
         groupByCategory: {
            easy: false,
            medium: true,
            hard: true,
         },
         generatedBlocks: {
            robot: {
               easy: ["forward", "withdrawNum", "dropNum", "containerSize", "nbWithdrawables"],
               medium: ["forward", "backwards", "jump", "withdrawNum", "dropNum", "containerSize", "nbWithdrawables"],
               hard: ["forward", "backwards", "jump", "withdrawNum", "dropNum", "containerSize"]
            }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {
               easy: [],
               medium: [],
               hard: ["variables"],
            },
            singleBlocks: {
               shared: [],
               easy: ["controls_repeat"],
               medium: ["controls_repeat", "procedures_defnoreturn"],
               hard: ["controls_repeat", "math_number", "procedures_defnoreturn"
               ]

            },
         },
      }
   };

   subTask.data = {
      easy: [{
            tiles: [
               [1, 1, 1, 1, 1, 1, 1],
               [1, 5, 1, 1, 1, 6, 1],
               [8, 7, 7, 7, 7, 7, 8],
               [1, 1, 1, 1, 1, 1, 1],
            ],
            initItems: [{
                  row: 1,
                  col: 0,
                  dir: 0,
                  type: "robot"
               },
               {
                  row: 1,
                  col: 5,
                  type: "box",
                  containerSize: 3
               },
            ].concat(initArray(3, {
               row: 1,
               col: 1,
               type: "books_outside"
            }))
         },
         {
            tiles: [
               [1, 1, 1, 1, 1, 1, 1],
               [1, 5, 1, 1, 1, 6, 1],
               [8, 7, 7, 7, 7, 7, 8],
               [1, 1, 1, 1, 1, 1, 1],
            ],
            initItems: [{
                  row: 1,
                  col: 0,
                  dir: 0,
                  type: "robot"
               },
               {
                  row: 1,
                  col: 5,
                  type: "box",
                  containerSize: 6
               },
            ].concat(initArray(6, {
               row: 1,
               col: 1,
               type: "books_outside"
            }))
         },
      ],
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 8, 7, 7, 7, 8, 1],
            [1, 1, 1, 1, 1, 5, 1, 6, 1, 1, 1],
            [1, 1, 1, 1, 8, 7, 7, 7, 8, 1, 1],
            [1, 1, 1, 1, 5, 1, 6, 1, 1, 1, 1],
            [1, 1, 1, 8, 7, 7, 7, 8, 1, 1, 1],
            [1, 1, 1, 5, 1, 6, 1, 1, 1, 1, 1],
            [1, 1, 8, 7, 7, 7, 8, 1, 1, 1, 1],
            [1, 1, 5, 1, 6, 1, 1, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 8, 1, 1, 1, 1, 1],
         ],
         initItems: [{
                  row: 8,
                  col: 3,
                  dir: 0,
                  type: "robot"
               },
               {
                  row: 2,
                  col: 7,
                  type: "box",
                  containerSize: 6
               },
               {
                  row: 4,
                  col: 6,
                  type: "box",
                  containerSize: 3
               },
               {
                  row: 6,
                  col: 5,
                  type: "box",
                  containerSize: 1
               },
               {
                  row: 8,
                  col: 4,
                  type: "box",
                  containerSize: 4
               }
            ].concat(initArray(6, {
               row: 2,
               col: 5,
               type: "books_outside"
            }))
            .concat(initArray(3, {
               row: 4,
               col: 4,
               type: "books_outside"
            }))
            .concat(initArray(1, {
               row: 6,
               col: 3,
               type: "books_outside"
            }))
            .concat(initArray(4, {
               row: 8,
               col: 2,
               type: "books_outside"
            }))
      }],
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 7, 7, 7, 8, 1, 1, 1],
            [1, 1, 1, 5, 1, 6, 6, 6, 1, 1, 1, 1],
            [1, 1, 8, 7, 7, 7, 7, 7, 7, 8, 1, 1],
            [1, 1, 1, 5, 1, 6, 6, 6, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 7, 7, 7, 8, 1, 1, 1],
            [1, 1, 1, 5, 1, 6, 6, 6, 1, 1, 1, 1],
            [1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1],
         ],
         initItems: [{
                  row: 6,
                  col: 4,
                  dir: 0,
                  type: "robot"
               },
               {
                  row: 2,
                  col: 5,
                  type: "box",
                  containerSize: 1
               },
               {
                  row: 2,
                  col: 6,
                  type: "box",
                  containerSize: 4
               },
               {
                  row: 2,
                  col: 7,
                  type: "box",
                  containerSize: 3
               },
               {
                  row: 4,
                  col: 5,
                  type: "box",
                  containerSize: 2
               },
               {
                  row: 4,
                  col: 6,
                  type: "box",
                  containerSize: 3
               },
               {
                  row: 4,
                  col: 7,
                  type: "box",
                  containerSize: 2
               },
               {
                  row: 6,
                  col: 5,
                  type: "box",
                  containerSize: 2
               },
               {
                  row: 6,
                  col: 6,
                  type: "box",
                  containerSize: 1
               },
               {
                  row: 6,
                  col: 7,
                  type: "box",
                  containerSize: 1
               }
            ].concat(initArray(9, {
               row: 2,
               col: 3,
               type: "books_outside"
            }))
            .concat(initArray(8, {
               row: 4,
               col: 3,
               type: "books_outside"
            }))
            .concat(initArray(6, {
               row: 6,
               col: 3,
               type: "books_outside"
            }))
      }],
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);