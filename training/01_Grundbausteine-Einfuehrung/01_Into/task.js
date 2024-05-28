function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      conceptViewer: false,
      contextType: "course",
      actionDelay: 200,
      maxInstructions: 6,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "north"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: []
         },
      },
      blocklyColourTheme: "bwinf",
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [],
      includedBlocks: [],
      checkEndEveryTurn: true,
   };

   subTask.data = {
      hard: [
         {
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2],
               [2, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 2, 2, 1, 1, 2],
               [2, 1, 1, 2, 1, 3, 1, 2],
               [2, 1, 1, 1, 1, 2, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 2],
               [2, 2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [
               { row: 4, col: 3, type: "robot" },
            ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["hard"], "hard", true);

