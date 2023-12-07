function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      conceptViewer: false,
      contextType: "course",
      actionDelay: 200,
      //itemTypes: {
      //green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -14, zOrder: 2, team: 0 },
      //obstacle: { num: 2, img: "grey_brick_wall.png", side: cellSide, isObstacle: true },
      //green: { num: 3, img: "green.png", side: cellSide, category: "paint", isObstacle: false, hasColor: true, color: "vert" }
      //},
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

