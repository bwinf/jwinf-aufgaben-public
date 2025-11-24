function initTask(subTask) {
   var cellSide = 60;
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      conceptViewer: false,
      contextType: "paint",
      //cellSide: cellSide,
      actionDelay: 200,

      maxInstructions: 20,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "north", "west", "south", "dropObject"]
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
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      //checkEndCondition: robotEndConditions.checkMarkersPainted,
   };

   subTask.data = {
      easy: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 1,
            col: 0,
            type: "robot"
         }, ]
      }],
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 8,
            col: 0,
            type: "robot"
         }, ]
      }],
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1],
            [1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1],
            [1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1],
            [1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1]
         ],
         initItems: [{
            row: 6,
            col: 0,
            type: "robot"
         }, ]
      }]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy"], null, true);
