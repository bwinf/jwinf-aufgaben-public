function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      conceptViewer: false,
      contextType: "paint",
      //cellSide: cellSide,
      actionDelay: 200,
      //itemTypes: {
      //    green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
      //   paint: { img: "paint.png", side: cellSide, category: "paint",  isPaint: true, isObstacle: false, hasColor: true, color: "gris", zOrder: 1 },
      //    marker: { num: 2, img: "marker.png", side: cellSide, category: "marker", isObstacle: false, isMarker: true, zOrder: 0 }
      //},
      maxInstructions: 15,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "north", "south", "dropObject", "onContainer"]
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
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkMarkersPainted,
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 2, 2, 1, 1, 1, 1],
                   [1, 1, 1, 2, 1, 1, 2, 1, 1, 1],
                   [1, 1, 2, 1, 1, 1, 1, 2, 1, 1],
                   [1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
                   [1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
                   [1, 2, 1, 1, 2, 2, 1, 1, 2, 1],
                   [1, 2, 1, 1, 2, 2, 1, 1, 2, 1],
                   [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 9, col: 0, type: "robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, null, null, true);
   
