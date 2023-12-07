function initTask(subTask) {
   var cellSide = 60;
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: {
            img: "green_robot.png",
            side: 80,
            nbStates: 9,
            isObstacle: true,
            offsetX: -14,
            category: "robot",
            team: 0
         },
         paint: {
            img: "paint.png",
            side: cellSide,
            category: "paint",
            isPaint: true,
            isObstacle: false,
            hasColor: true,
            color: "gris"
         },
         marker: {
            num: 2,
            img: "marker.png",
            side: cellSide,
            category: "marker",
            isMarker: true,
            isObstacle: false,
            hasColor: true,
            color: "marker"
         }
      },
      maxInstructions: 20,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "north", "west", "south", "paint"]
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
      checkEndCondition: robotEndConditions.checkMarkersPainted,
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
            dir: 0,
            type: "green_robot"
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
            dir: 0,
            type: "green_robot"
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
            dir: 0,
            type: "green_robot"
         }, ]
      }]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);