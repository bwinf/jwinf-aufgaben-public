function initTask(subTask) {
   subTask.gridInfos = {
      contextType: "rocket",
      blocklyColourTheme: "bwinf",
      maxInstructions: 40,
      includeBlocks: {
         groupByCategory: {
            easy: false,
            medium: false,
            hard: false
         },
         generatedBlocks: {
            robot: ["turnAround", "forward", "right", "left", "readNumber", "writeNumber"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               easy: ["controls_repeat_ext"],
               medium: ["controls_repeat_ext", "math_arithmetic", "math_number"],
               hard: ["controls_repeat_ext", "math_arithmetic", "math_number"]
            }
         },
         variables: ["RoboterGedächtnis"],
         pythonAdditionalFunctions: {
            shared: ["range"]
         },
      },
      checkEndEveryTurn: true,
      checkEndCondition: function (context, lastTurn) {
         if (lastTurn) {
            for (var iRow = 0; iRow < context.tiles.length; iRow++) {
               var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
               for (var iCol = 0; iCol < row.length; iCol++) {
                  var items = context.getItemsOn(iRow, iCol, function (obj) {
                     return obj.isBoard === true;
                  });
                  var hasNumber = (items.length != 0);
                  if (hasNumber) {
                     var item = items[0];
                     if (item.value != item.answer) {
                        context.success = false;
                        throw ("Es steht nicht überall die richtige Zahl.");
                     }
                  }
               }
            }
            if (context.isOn(function (obj) {
                  return obj.isExit === true;
               })) {
               context.success = true;
               throw (window.languageStrings.messages.successReachExit);
            } else {
               context.success = false;
               throw (window.languageStrings.messages.failureReachExit)
            }
         }
      }
   };

   subTask.data = {
      easy: [{
         tiles: [
            [1, 4, 1, 1, 1, 4, 4],
            [1, 1, 1, 1, 90, 1, 4],
            [1, 1, 1, 1, 90, 1, 1],
            [1, 1, 1, 1, 90, 1, 1],
            [1, 1, 1, 1, 90, 1, 1],
            [1, 1, 1, 1, 90, 1, 1],
            [1, 1, 1, 1, 1, 5, 4]
         ],
         initItems: [{
               row: 1,
               col: 0,
               dir: 0,
               type: "robot"
            },
            {
               row: 1,
               col: 4,
               type: "board",
               answer: 3
            },
            {
               row: 2,
               col: 4,
               type: "board",
               answer: 6
            },
            {
               row: 3,
               col: 4,
               type: "board",
               answer: 2
            },
            {
               row: 4,
               col: 4,
               type: "board",
               answer: 3
            },
            {
               row: 5,
               col: 4,
               type: "board",
               answer: 5
            },
            {
               row: 1,
               col: 2,
               type: "board_notwritable",
               value: 3,
            },
            {
               row: 2,
               col: 2,
               type: "board_notwritable",
               value: 6,
            },
            {
               row: 3,
               col: 2,
               type: "board_notwritable",
               value: 2,
            },
            {
               row: 4,
               col: 2,
               type: "board_notwritable",
               value: 3,
            },
            {
               row: 5,
               col: 2,
               type: "board_notwritable",
               value: 5,
            },

         ]
      }],
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 4],
            [1, 1, 1, 1, 90, 1, 1],
            [1, 1, 1, 1, 90, 4, 4],
            [1, 1, 1, 1, 90, 1, 1],
            [1, 1, 1, 1, 90, 1, 1],
            [1, 1, 1, 1, 90, 1, 1],
            [1, 1, 1, 1, 1, 5, 1]
         ],
         initItems: [{
               row: 1,
               col: 0,
               dir: 0,
               type: "robot"
            },
            {
               row: 1,
               col: 4,
               type: "board",
               answer: 8
            },
            {
               row: 2,
               col: 4,
               type: "board",
               answer: 9
            },
            {
               row: 3,
               col: 4,
               type: "board",
               answer: 7
            },
            {
               row: 4,
               col: 4,
               type: "board",
               answer: 9
            },
            {
               row: 5,
               col: 4,
               type: "board",
               answer: 7
            },
            {
               row: 1,
               col: 1,
               type: "board_notwritable",
               value: 4,
            },
            {
               row: 1,
               col: 2,
               type: "board_notwritable",
               value: 4,
            },
            {
               row: 2,
               col: 1,
               type: "board_notwritable",
               value: 3,
            },
            {
               row: 2,
               col: 2,
               type: "board_notwritable",
               value: 6,
            },
            {
               row: 3,
               col: 1,
               type: "board_notwritable",
               value: 5,
            },
            {
               row: 3,
               col: 2,
               type: "board_notwritable",
               value: 2,
            },
            {
               row: 4,
               col: 1,
               type: "board_notwritable",
               value: 6,
            },
            {
               row: 4,
               col: 2,
               type: "board_notwritable",
               value: 3,
            },
            {
               row: 5,
               col: 1,
               type: "board_notwritable",
               value: 2,
            },
            {
               row: 5,
               col: 2,
               type: "board_notwritable",
               value: 5,
            },
         ]
      }],
      hard: [{
         tiles: [
            [4, 4, 1, 1, 1, 1, 1, 1, 4, 1],
            [1, 1, 1, 1, 1, 1, 1, 90, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 90, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 90, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 90, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 90, 1, 4],
            [1, 1, 1, 1, 1, 1, 1, 1, 5, 1]
         ],
         initItems: [{
               row: 1,
               col: 0,
               dir: 0,
               type: "robot"
            },
            {
               row: 1,
               col: 1,
               type: "board_notwritable",
               value: 2,
            },
            {
               row: 1,
               col: 2,
               type: "board_notwritable",
               value: 3,
            },
            {
               row: 1,
               col: 3,
               type: "board_notwritable",
               value: 4,
            },
            {
               row: 1,
               col: 4,
               type: "board_notwritable",
               value: 3,
            },
            {
               row: 1,
               col: 5,
               type: "board_notwritable",
               value: 2,
            },

            {
               row: 2,
               col: 1,
               type: "board_notwritable",
               value: 3,
            },
            {
               row: 2,
               col: 2,
               type: "board_notwritable",
               value: 5,
            },
            {
               row: 2,
               col: 3,
               type: "board_notwritable",
               value: 3,
            },
            {
               row: 2,
               col: 4,
               type: "board_notwritable",
               value: 2,
            },
            {
               row: 2,
               col: 5,
               type: "board_notwritable",
               value: 2,
            },

            {
               row: 3,
               col: 1,
               type: "board_notwritable",
               value: 4,
            },
            {
               row: 3,
               col: 2,
               type: "board_notwritable",
               value: 6,
            },
            {
               row: 3,
               col: 3,
               type: "board_notwritable",
               value: 2,
            },
            {
               row: 3,
               col: 4,
               type: "board_notwritable",
               value: 4,
            },
            {
               row: 3,
               col: 5,
               type: "board_notwritable",
               value: 2,
            },

            {
               row: 4,
               col: 1,
               type: "board_notwritable",
               value: 5,
            },
            {
               row: 4,
               col: 2,
               type: "board_notwritable",
               value: 5,
            },
            {
               row: 4,
               col: 3,
               type: "board_notwritable",
               value: 1,
            },
            {
               row: 4,
               col: 4,
               type: "board_notwritable",
               value: 1,
            },
            {
               row: 4,
               col: 5,
               type: "board_notwritable",
               value: 2,
            },

            {
               row: 5,
               col: 1,
               type: "board_notwritable",
               value: 6,
            },
            {
               row: 5,
               col: 2,
               type: "board_notwritable",
               value: 4,
            },
            {
               row: 5,
               col: 3,
               type: "board_notwritable",
               value: 2,
            },
            {
               row: 5,
               col: 4,
               type: "board_notwritable",
               value: 3,
            },
            {
               row: 5,
               col: 5,
               type: "board_notwritable",
               value: 1,
            },

            {
               row: 1,
               col: 7,
               type: "board",
               answer: 14
            },
            {
               row: 2,
               col: 7,
               type: "board",
               answer: 15
            },
            {
               row: 3,
               col: 7,
               type: "board",
               answer: 18,
            },
            {
               row: 4,
               col: 7,
               type: "board",
               answer: 14,
            },
            {
               row: 5,
               col: 7,
               type: "board",
               answer: 16,
            },
         ]
      }]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
