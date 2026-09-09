function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      conceptViewer: false,
      contextType: "fishing",
      maxInstructions: 15,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "north", "withdrawObject", "dropObject"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat"]
         },
         pythonAdditionalFunctions: {
            shared: ["range"]
         }
      },
      blocklyColourTheme: "bwinf",
   };

   subTask.data = {
      easy: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 5, 6, 1, 5, 6, 1, 5, 6, 1, 5, 6, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
                  col: 7,
                  type: "net"
               },
               {
                  row: 1,
                  col: 10,
                  type: "net"
               },
               {
                  row: 1,
                  col: 2,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 1,
                  col: 5,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 1,
                  col: 8,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 1,
                  col: 11,
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
               col: 7,
               type: "fishes"
            })).concat(initArray(1, {
               row: 1,
               col: 10,
               type: "fishes"
            }))

      }],
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 6, 1],
            [1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1],
            [1, 1, 5, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
                  row: 4,
                  col: 0,
                  type: "robot"
               }, {
                  row: 3,
                  col: 2,
                  type: "net"
               },
               {
                  row: 2,
                  col: 6,
                  type: "net"
               },
               {
                  row: 1,
                  col: 10,
                  type: "net"
               },
               {
                  row: 3,
                  col: 7,
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
                  row: 1,
                  col: 15,
                  type: "island",
                  containerSize: 1
               },
            ].concat(initArray(1, {
               row: 3,
               col: 2,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 2,
               col: 6,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 1,
               col: 10,
               type: "fishes"
            }))
      }],
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1],
            [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1],
            [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1],
            [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1],
            [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
               row: 6,
               col: 0,
               type: "robot"
            },
            {
               row: 1,
               col: 1,
               type: "net"
            },
            {
               row: 2,
               col: 1,
               type: "net"
            },
            {
               row: 3,
               col: 1,
               type: "net"
            },
            {
               row: 4,
               col: 1,
               type: "net"
            },
            {
               row: 5,
               col: 1,
               type: "net"
            },
            {
               row: 1,
               col: 11,
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
               col: 11,
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
               col: 11,
               type: "island",
               containerSize: 1
            },
         ].concat(initArray(1, {
            row: 1,
            col: 1,
            type: "fishes"
         })).concat(initArray(1, {
            row: 2,
            col: 1,
            type: "fishes"
         })).concat(initArray(1, {
            row: 3,
            col: 1,
            type: "fishes"
         })).concat(initArray(1, {
            row: 4,
            col: 1,
            type: "fishes"
         })).concat(initArray(1, {
            row: 5,
            col: 1,
            type: "fishes"
         }))
      }]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true)