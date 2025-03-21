function initTask(subTask) {
   // var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      conceptViewer: false,
      contextType: "paint",
      // cellSide: cellSide,
      showLabels: true,
      actionDelay: 200,
      limitedUses: {
         medium:
         [{
            blocks: ["dropObject"],
            nbUses: 1
         },
       ],
       hard:
       [{
          blocks: ["dropObject"],
          nbUses: 1
       },
     ],
      },

      // itemTypes: {
      //    green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0 },
      //    paint: { img: "paint.png", side: cellSide, category: "paint", isObstacle: false, hasColor: true, color: "gris" },
      //    marker: { num: 2, img: "marker.png", side: cellSide, category: "paint", isObstacle: false, hasColor: true, color: "marker" }
      // },
      maxInstructions: {
         easy: 20,
         medium: 25,
         hard: 30
      },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: {
               easy: ["east", "dropObject", "col"],
               medium: ["east", "west", "north", "dropObject", "col", "row"],
               hard: ["east", "north", "west", "dropObject", "col", "row"]
            }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat", "logic_compare", "math_number", "controls_if", "logic_operation"]
         },
      },
      blocklyColourTheme: "bwinf",
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      // checkEndCondition: function(context, lastTurn) {
      //    if (lastTurn) {
      //       for (var iRow = 0; iRow < context.tiles.length; iRow++) {
      //          var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
      //          for (var iCol = 0; iCol < row.length; iCol++) {
      //             var tile = row[iCol];
      //             var paints = context.getItems(iRow, iCol, {color: "gris"});
      //             if ((paints.length > 0) != (tile == 2)) {
      //                context.success = false;
      //                throw("Der Roboter hat nicht genau die vorgegebenen Felder eingefärbt.");
      //             }
      //          }
      //       }
      //       context.success = true;
      //       throw("Bravo! Du hast das Muster richtig gezeichnet!");
      //    }
      // },
      // computeGrade: function(context, message) {
      //    var rate = 0;
      //    if (context.success) {
      //       rate = 1;
      //    }
      //    return {
      //       successRate: rate,
      //       message: message
      //    };
      // }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 1, type: "robot" }
               ]
         },
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 3, type: "robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
                   [2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
                   [2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
                   [2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
                   [2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
                   [2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1],
                   [2, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 10, col: 0, type: "robot" },
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
                   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 8, col: 0, type: "robot" },
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
