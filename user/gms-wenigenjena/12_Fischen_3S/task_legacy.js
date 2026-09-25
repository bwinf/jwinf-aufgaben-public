function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      conceptViewer: false,
      contextType: "fishing",
      maxInstructions: 22,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "north", "withdrawObject", "dropObject", "onObject", "onContainer"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat", "controls_if"]
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
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 5, 1, 6, 5, 1, 1, 6, 1, 5, 6, 1, 1, 5, 6, 5, 6, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
                  row: 1,
                  col: 0,
                  type: "robot"
               },
               {
                  row: 1,
                  col: 1,
                  type: "net"
               },
               {
                  row: 1,
                  col: 4,
                  type: "net"
               },
               {
                  row: 1,
                  col: 9,
                  type: "net"
               },
               {
                  row: 1,
                  col: 13,
                  type: "net"
               },
               {
                  row: 1,
                  col: 15,
                  type: "net"
               },
               {
                  row: 1,
                  col: 3,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 1,
                  col: 7,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 1,
                  col: 10,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 1,
                  col: 14,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 1,
                  col: 16,
                  type: "island",
                  containerSize: 1
               },
            ].concat(initArray(1, {
               row: 1,
               col: 1,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 1,
               col: 4,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 1,
               col: 9,
               type: "fishes"
            })).concat(initArray(1, {
               row: 1,
               col: 13,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 1,
               col: 15,
               type: "fishes"
            }))
      }],
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 5, 1, 1, 6, 1, 1, 1],
            [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1],
            [1, 1, 1, 5, 1, 1, 1, 1, 6, 1, 1, 1, 1],
            [1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 6, 1],
            [1, 1, 5, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1],
            [1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 6, 1, 1],
            [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1]
         ],
         initItems: [{
               row: 7,
               col: 0,
               type: "robot"
            },
            {
               row: 1,
               col: 6,
               type: "net"
            },
            {
               row: 2,
               col: 1,
               type: "net"
            },
            {
               row: 3,
               col: 3,
               type: "net"
            },
            {
               row: 4,
               col: 4,
               type: "net"
            },
            {
               row: 5,
               col: 2,
               type: "net"
            },
            {
               row: 6,
               col: 3,
               type: "net"
            },
            {
               row: 7,
               col: 1,
               type: "net"
            },

            {
               row: 1,
               col: 9,
               type: "island",
               containerSize: 1
            },
            {
               row: 2,
               col: 10,
               type: "island",
               containerSize: 1
            },
            {
               row: 3,
               col: 8,
               type: "island",
               containerSize: 1
            },
            {
               row: 4,
               col: 11,
               type: "island",
               containerSize: 1
            },
            {
               row: 5,
               col: 7,
               type: "island",
               containerSize: 1
            },
            {
               row: 6,
               col: 10,
               type: "island",
               containerSize: 1
            },
            {
               row: 7,
               col: 11,
               type: "island",
               containerSize: 1
            },
         ].concat(initArray(1, {
            row: 1,
            col: 6,
            type: "fishes"
         })).concat(initArray(1, {
            row: 2,
            col: 1,
            type: "fishes"
         })).concat(initArray(1, {
            row: 3,
            col: 3,
            type: "fishes"
         })).concat(initArray(1, {
            row: 4,
            col: 4,
            type: "fishes"
         })).concat(initArray(1, {
            row: 5,
            col: 2,
            type: "fishes"
         })).concat(initArray(1, {
            row: 6,
            col: 3,
            type: "fishes"
         })).concat(initArray(1, {
            row: 7,
            col: 1,
            type: "fishes"
         }))
      }],
      hard: [{
         tiles: [
            //  0  1  2  3  4  5  6  7  8  9 10 11 12
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
            [1, 1, 1, 1, 1, 6, 1, 1, 5, 1, 1, 1, 1], //1
            [1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1], //2
            [1, 5, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1], //3
            [1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 6, 1, 1], //4
            [1, 1, 1, 6, 1, 1, 1, 1, 5, 1, 1, 1, 1], //5
            [1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 5, 1], //6
            [1, 5, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1] //7
         ],
         initItems: [{
               row: 7,
               col: 0,
               type: "robot"
            },
            {
               row: 1,
               col: 8,
               type: "net"
            },
            {
               row: 2,
               col: 2,
               type: "net"
            },
            {
               row: 3,
               col: 1,
               type: "net"
            },
            {
               row: 4,
               col: 5,
               type: "net"
            },
            {
               row: 5,
               col: 8,
               type: "net"
            },
            {
               row: 6,
               col: 11,
               type: "net"
            },
            {
               row: 7,
               col: 1,
               type: "net"
            },

            {
               row: 1,
               col: 5,
               type: "island",
               containerSize: 1
            },
            {
               row: 2,
               col: 11,
               type: "island",
               containerSize: 1
            },
            {
               row: 3,
               col: 8,
               type: "island",
               containerSize: 1
            },
            {
               row: 4,
               col: 10,
               type: "island",
               containerSize: 1
            },
            {
               row: 5,
               col: 3,
               type: "island",
               containerSize: 1
            },
            {
               row: 6,
               col: 4,
               type: "island",
               containerSize: 1
            },
            {
               row: 7,
               col: 9,
               type: "island",
               containerSize: 1
            },
         ].concat(initArray(1, {
            row: 1,
            col: 8,
            type: "fishes"
         })).concat(initArray(1, {
            row: 2,
            col: 2,
            type: "fishes"
         })).concat(initArray(1, {
            row: 3,
            col: 1,
            type: "fishes"
         })).concat(initArray(1, {
            row: 4,
            col: 5,
            type: "fishes"
         })).concat(initArray(1, {
            row: 5,
            col: 8,
            type: "fishes"
         })).concat(initArray(1, {
            row: 6,
            col: 11,
            type: "fishes"
         })).concat(initArray(1, {
            row: 7,
            col: 1,
            type: "fishes"
         }))
      }]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["medium"], null, true);
