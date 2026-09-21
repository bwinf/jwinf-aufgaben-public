function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      context: "robot",
      hideSaveOrLoad: true,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, dir: 1, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
         paint: { num: 2, img: "paint.png", side: cellSide, category: "paint", isPaint: true, zOrder: 1 },
         initial_paint: { num: 3, img: "paint.png", side: cellSide, category: "marker", isPaint: true, isMarker: true, zOrder: 0 },
         marker: { num: 4, img: "marker.png", side: cellSide, category: "marker", isMarker: true, zOrder: 0 },
         obstacle: { num: 5, img: "obstacle.png", side: cellSide, category: "obstacle", isObstacle: true },
      },
      maxInstructions: {
         easy: 20,
         medium: 25,
         hard: 35,
      },
      includeBlocks: {
         groupByCategory: { easy: true, medium: true, hard: true, },
         generatedBlocks: {
            robot: {
               shared: ["east", "paint",],
               easy: ["paintOnCell"],
               medium: ["paintOnCell"],
               hard: ["north", "obstacleNorth", "obstacleEast"]
            }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {
               easy: ["variables"],
               medium: ["variables"],
               hard: ["variables"]
            },
            singleBlocks: {

               shared: ["controls_repeat_ext", "math_number"],
               easy: ["controls_whileUntil"],
               medium: ["lists_create_with_empty", "lists_getIndex", "lists_setIndex", "controls_if", "controls_if_else", "math_number", "logic_compare", "logic_boolean"],
               hard: ["lists_create_with_empty", "lists_getIndex", "lists_setIndex", "controls_if_else", "math_number", "logic_compare", "logic_boolean"]
            }
         },
         /*variables:{easy:["Speicher"], medium:["Speicher"]},
         variablesOnlyBlocks: {easy: ['get', 'set','incr'],},*/
      },

      blocklyColourTheme: "bwinf",
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: function (context, lastTurn) {
         var solved = true;
         for (var iRow = 0; iRow < context.tiles.length; iRow++) {
            var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
            for (var iCol = 0; iCol < row.length; iCol++) {
               var markers = context.getItems(iRow, iCol, { isMarker: true });
               var paint = context.getItems(iRow, iCol, { isPaint: true });
               if (!(paint.length) != !(markers.length)) {
                  solved = false;
               }
            }
         }
         if (solved) {
            context.success = true;
            throw (window.taskStrings.success);
         }
         if (lastTurn) {
            context.success = false;
            throw (window.taskStrings.failure);
         }
      },
      computeGrade: function (context, message) {
         var rate = 0;
         if (context.success) {
            rate = 1;
         }
         return {
            successRate: rate,
            message: message
         };
      }
   };

   subTask.data = {

      medium: [
         {
            tiles: [
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 3, 3, 1, 3, 3, 1, 1, 3, 4, 1, 1, 4, 4, 1, 4, 4, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ],
            initItems: [
               { row: 1, col: 1, dir: 0, type: "green_robot" },
            ]
         },
         {
            tiles: [
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 3, 1, 1, 3, 1, 1, 1, 3, 4, 1, 1, 1, 4, 1, 1, 4, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ],
            initItems: [
               { row: 1, col: 1, dir: 0, type: "green_robot" },
            ]
         },
         {
            tiles: [
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 3, 3, 1, 3, 3, 3, 1, 1, 4, 4, 4, 1, 4, 4, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ],
            initItems: [
               { row: 1, col: 1, dir: 0, type: "green_robot" },
            ]
         },
      ],

   };

   initBlocklySubTask(subTask);
}

window.initBlocklySubTask = function () { };
window.taskData = window.taskData || {};
window.taskData.waitInit = function () {
   initTask(window.taskData);
   function ccTask() { try { return window.Codecast.environments.main.store.getState().task; } catch (e) { return null; } }
   try { Object.defineProperty(window.taskData, "level", { configurable: true, get: function () { var t = ccTask(); return t ? t.currentLevel : undefined; }, set: function () { } }); Object.defineProperty(window.taskData, "iTestCase", { configurable: true, get: function () { var t = ccTask(); return (t && t.currentTestId != null) ? t.currentTestId : 0; }, set: function () { } }); } catch (e) { }
};
window.taskData.codecastParameters = window.taskData.codecastParameters || {
   language: "de-DE",
   platform: "blockly",
   canChangePlatform: false,
   showStepper: true,
   showStack: true,
   showViews: true,
   showIO: true,
   controls: { reload: false },
   hideSettings: true,
   jwinfMenu: { copyPaste: true, undoRedo: true, svgExport: true }
};

