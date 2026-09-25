function initTask(subTask) {
   subTask.gridInfos = {
      context: "robot",
      conceptViewer: true,

      contextType: "course",

      blocklyColourTheme: "bwinf",
      timeoutMinutes: 10, // Nach 10 Minuten warnen
      hideSaveOrLoad: true,
      showIfMutator: true,
      maxInstructions: {
         easy: 15,
         medium: 24,
         hard: 50,
      },

      includeBlocks: {
         groupByCategory: false,

         generatedBlocks: {
            robot: {
               easy: ["east", "north", "readNumber", "writeNumber"],
               medium: ["east", "north", "readNumber", "writeNumber"],
               // medium: ["east", "north","readNumber", "writeNumber"],
               hard: ["east", "north", "readNumber", "writeNumber"],

            }
         },

         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               shared: ["controls_repeat_ext", "math_number"],
               medium: ["math_arithmetic", "math_number"],
               // medium: ["math_arithmetic", "math_number"],
               hard: ["math_arithmetic", "math_number", "controls_if_else", "logic_compare", "controls_whileUntil", "math_extra_single"]
            }
         },
         variables: {
            easy: ["Schritte_rechts", "Züge"],
            medium: ["Schritte_rechts", "Schritte_oben", "Züge"],
            // medium: ["r", "o", "Schritte"],
            hard: ["Schritte_rechts", "Schritte_oben", "Züge", "Schritte"]
         },
         variablesOnlyBlocks: {
            shared: ['get', 'set', "incr"],
            medium: [],
            //  medium: ['incr'],
            hard: [],
         },


      },
      limitedUses: {
         hard:
            [{
               blocks: ["writeNumber"],
               nbUses: 2
            },
            ],
      },

      itemTypes: {
         board_background: { num: 90, color: "#d3d3d3", side: 60, zOrder: 0 },
         start_background: { num: 99, color: "#e39c57", side: 60, zOrder: 0 },
         board: { num: 91, side: 60, isWritable: true, zOrder: 1, isNumber: true, isBoard: true },
         board_notwritable: { num: 92, side: 60, zOrder: 1, isNumber: true },
         robot: { img: imgPath + "red_robot.png", side: 70, nbStates: 1, offsetX: -5, offsetY: 5, isRobot: true, zOrder: 2 },
         bush: { num: 2, img: imgPath + "bush.png", side: 60, isObstacle: true, zOrder: 0 },
         tree: { num: 15, img: imgPath + "tree.png", side: 80, isObstacle: true, zOrder: 2, offsetX: -15, offsetY: 8 },
      },

      checkEndEveryTurn: false,
      checkEndCondition: function (context, lastTurn) {
         if (lastTurn) {
            for (var iRow = 0; iRow < context.tiles.length; iRow++) {
               var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
               for (var iCol = 0; iCol < row.length; iCol++) {
                  var items = context.getItemsOn(iRow, iCol, function (obj) {
                     return obj.isBoard === true;
                  });
                  var hasNumber = (items.length != 0);
                  if (hasNumber) {
                     var item = items[0];
                     if (item.value != item.answer) {
                        context.success = false;
                        throw ("Mindestens eine falsche Zahl wurde eingetragen.");
                     } else {
                        context.success = true;
                        throw ("Sehr gut, der Roboter hat die Aufgabe gelöst!");
                     }
                  }
               }
            }
         }
      }
   };

   subTask.data = {
      easy: [{
         tiles: [
            [15, 2, 1, 1, 1, 1, 1, 15, 1, 1],
            [1, 99, 1, 90, 1, 1, 2, 15, 1, 1],
            [15, 2, 2, 2, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
            row: 1,
            col: 0,
            type: "robot"
         }, {
            row: 1,
            col: 1,
            type: "board_notwritable",
            value: 2,
         }, {
            row: 1,
            col: 3,
            type: "board",
            answer: 2
         },]
      }, {
         tiles: [
            [15, 1, 1, 1, 1, 1, 1, 15, 1, 1],
            [1, 99, 1, 1, 1, 1, 90, 2, 15, 1],
            [1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
            row: 1,
            col: 0,
            type: "robot"
         }, {
            row: 1,
            col: 1,
            type: "board_notwritable",
            value: 5,
         }, {
            row: 1,
            col: 6,
            type: "board",
            answer: 5
         }]
      },
      {
         tiles: [
            [2, 2, 1, 1, 1, 1, 1, 1, 1, 15],
            [2, 99, 1, 1, 1, 1, 1, 1, 90, 1],
            [2, 2, 1, 1, 1, 1, 1, 1, 2, 1],
         ],
         initItems: [{
            row: 1,
            col: 0,
            type: "robot"
         }, {
            row: 1,
            col: 1,
            type: "board_notwritable",
            value: 7,
         }, {
            row: 1,
            col: 8,
            type: "board",
            answer: 7
         }]
      }],
      //Version **
      medium: [{
         tiles: [
            [2, 15, 15, 1, 2, 2, 2, 1, 2, 2],
            [15, 15, 1, 1, 1, 15, 1, 1, 15, 2],
            [2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 90, 15, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 2, 1, 1, 15, 1],
            [1, 1, 1, 1, 1, 1, 1, 15, 2, 2],
            [1, 1, 1, 1, 1, 2, 1, 2, 15, 15],
            [1, 1, 1, 1, 1, 15, 1, 2, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 99, 1, 1, 15, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 9,
            col: 0,
            type: "robot"
         }, {
            row: 9,
            col: 1,
            type: "board_notwritable",
            value: 2,
         }, {
            row: 9,
            col: 2,
            type: "board_notwritable",
            value: 6,
         }, {
            row: 3,
            col: 4,
            type: "board",
            answer: 8,
         }]
      }, {
         tiles: [
            [2, 15, 2, 15, 15, 2, 15, 15, 15, 15],
            [1, 1, 2, 1, 15, 1, 1, 1, 1, 1],
            [1, 2, 1, 1, 1, 1, 1, 15, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 15],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 90],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 99, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 9,
            col: 0,
            type: "robot"
         }, {
            row: 9,
            col: 1,
            type: "board_notwritable",
            value: 7,
         }, {
            row: 9,
            col: 2,
            type: "board_notwritable",
            value: 5,
         },
         {
            row: 4,
            col: 9,
            type: "board",
            answer: 12,
         }]
      },
      {
         tiles: [
            [2, 15, 15, 1, 2, 2, 2, 1, 2, 2],
            [15, 15, 1, 1, 1, 15, 1, 1, 15, 2],
            [2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 15, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 2, 1, 1, 15, 1],
            [1, 1, 1, 1, 1, 1, 1, 15, 2, 2],
            [1, 1, 1, 1, 1, 90, 1, 2, 15, 15],
            [1, 1, 1, 1, 1, 1, 1, 2, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 99, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 9,
            col: 0,
            type: "robot"
         }, {
            row: 9,
            col: 1,
            type: "board_notwritable",
            value: 3,
         }, {
            row: 9,
            col: 2,
            type: "board_notwritable",
            value: 3,
         }, {
            row: 6,
            col: 5,
            type: "board",
            answer: 6,
         }]
      }],
      hard: [{
         tiles: [
            [2, 15, 15, 1, 2, 2, 1, 15, 15, 1],
            [1, 1, 1, 1, 1, 1, 2, 1, 1, 15],
            [1, 1, 1, 1, 1, 1, 1, 1, 15, 1],
            [1, 1, 1, 1, 1, 1, 90, 1, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 15, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
            [1, 1, 99, 1, 1, 1, 1, 15, 15, 1]
         ],
         initItems: [{
            row: 9,
            col: 0,
            type: "robot"
         }, {
            row: 9,
            col: 1,
            type: "board_notwritable",
            value: 4,
         }, {
            row: 9,
            col: 2,
            type: "board_notwritable",
            value: 6,
         },
         {
            row: 3,
            col: 6,
            type: "board",
            answer: 6,
         }]
      }, {
         tiles: [
            [1, 1, 15, 1, 15, 2, 15, 1, 2, 1],
            [1, 15, 1, 1, 1, 1, 2, 15, 1, 1],
            [1, 1, 15, 1, 15, 1, 1, 1, 15, 1],
            [1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
            [1, 1, 1, 1, 1, 15, 1, 1, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 15, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
            [1, 1, 1, 1, 1, 1, 1, 90, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 99, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 9,
            col: 0,
            type: "robot"
         }, {
            row: 9,
            col: 1,
            type: "board_notwritable",
            value: 5,
         }, {
            row: 9,
            col: 2,
            type: "board_notwritable",
            value: 2,
         },
         {
            row: 7,
            col: 7,
            type: "board",
            answer: 5,
         }]
      },
      {
         tiles: [
            [2, 15, 15, 1, 2, 2, 1, 15, 15, 1],
            [1, 1, 90, 1, 1, 1, 2, 1, 1, 15],
            [1, 1, 1, 1, 15, 1, 1, 1, 15, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
            [1, 1, 1, 1, 2, 1, 1, 2, 2, 2],
            [1, 1, 1, 1, 1, 15, 1, 1, 1, 2],
            [1, 1, 1, 1, 15, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 15, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
            [1, 1, 99, 1, 1, 1, 1, 15, 15, 1]
         ],
         initItems: [{
            row: 9,
            col: 0,
            type: "robot"
         }, {
            row: 9,
            col: 1,
            type: "board_notwritable",
            value: 0,
         }, {
            row: 9,
            col: 2,
            type: "board_notwritable",
            value: 8,
         },
         {
            row: 1,
            col: 2,
            type: "board",
            answer: 8,
         }]
      }],
   };

   initBlocklySubTask(subTask);
}

//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
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
window.taskData.codecastParameters.showStack = true;

