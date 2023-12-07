function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0 },
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, category: "obstacle", isObstacle: true },
         green: { num: 3, img: "green.png", side: cellSide, category: "paint", isObstacle: false, color: "vert", },
      },
      maxInstructions: 16,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "north", "south"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat"]
         },
      },
      blocklyColourTheme: "bwinf",
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkReachGreenArea,
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2],
                   [2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 3, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 2, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 3, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 11, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 3, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 11, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   
