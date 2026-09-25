function initTask(subTask) {
  var cellSide = 60;

  subTask.gridInfos = {
    context: "robot",
    hideSaveOrLoad: true,
    conceptViewer: false,
    contextType: "paint",
    //cellSide: cellSide,
    actionDelay: 200,
    languageStrings: {
      blocklyRobot_lib: {
        label: {
          "onPaint": "auf Kerze",
          "dropObject": "zünde Kerze an"
        },
        code: {
          onPaint: "aufKerze",
          dropObject: "zuendeKerzeAn"
        },
        messages: {
          successContainersFilled: "Bravo, der Roboter hat alle Kerzen angezündet!",
          failureContainersFilled: "Der Roboter hat die Kerzen nicht korrekt angezündet.",
        }
      }
    },
    itemTypes: {
      robot: { img: imgPath + "blue_robot.png", side: 85, isRobot: true, offsetX: -10, offsetY: 10, zOrder: 2 },
      initial_paint: { num: 6, img: "kerze.png", side: 60, isPaint: true, zOrder: 1 },
      paint: { num: 2, img: "flamme.png", side: 60, isWithdrawable: true, zOrder: 3 },
      marker: { num: 7, img: "docht.png", side: 60, isContainer: true, containerFilter: function (item) { return item.type === "paint"; }, zOrder: 0 },
      number: { side: 60, zOrder: 1 },
      board_background: { num: 5, color: "#ffffff", side: 60, zOrder: 0 },
      board: { side: 60, isWritable: true, zOrder: 1 }
    },
    maxInstructions: {
      easy: 10,
      medium: 10,
      hard: 10,
    },
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: {
          shared: ["east", "west", "north", "south", "dropObject"],
          easy: [],
          medium: [],
          hard: ["onPaint"]
        }
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: {
          easy: [],
          medium: [],
          hard: []
        },
        singleBlocks: {
          shared: ["controls_repeat"],
          easy: [],
          medium: [],
          hard: ["controls_if"] // ["logic_negate", "controls_if_else"]
        }
      },
      pythonAdditionalFunctions: {
        shared: ["range"]
      },
    },

    blocklyColourTheme: "bwinf",
    ignoreInvalidMoves: false,
    checkEndEveryTurn: false,
    // checkEndCondition: function(context, lastTurn) {
    //   var solved = true;
    //   for (var iRow = 0; iRow < context.tiles.length; iRow++) {
    //     var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
    //     for (var iCol = 0; iCol < row.length; iCol++) {
    //       var markers = context.getItems(iRow, iCol, {
    //         isMarker: true
    //       });
    //       var paint = context.getItems(iRow, iCol, {
    //         isPaint: true
    //       });
    //       if (paint.length != markers.length) {
    //         solved = false;
    //       }
    //     }
    //   }
    //   if (solved) {
    //     context.success = true;
    //     throw (window.taskStrings.success);
    //   }
    //   if (lastTurn) {
    //     context.success = false;
    //     throw (window.taskStrings.failure);
    //   }
    // },
    // computeGrade: function(context, message) {
    //   var rate = 0;
    //   if (context.success) {
    //     rate = 1;
    //   }
    //   return {
    //     successRate: rate,
    //     message: message
    //   };
    // }
  };

  subTask.data = {
    easy: [{
      tiles: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 7, 1, 1, 1, 1],
        [1, 1, 1, 1, 6, 1, 1, 1, 1],
        [1, 1, 1, 1, 6, 1, 1, 1, 1],
        [1, 1, 1, 1, 6, 1, 1, 1, 1]
      ],
      initItems: [{
        row: 5,
        col: 1,
        type: "robot"
      },]
    }],
    medium: [{
      tiles: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 7, 7, 7, 7, 7, 1, 1],
        [1, 1, 6, 6, 6, 6, 6, 1, 1],
        [1, 1, 6, 6, 6, 6, 6, 1, 1],
        [1, 1, 6, 6, 6, 6, 6, 1, 1],
        [1, 1, 6, 6, 6, 6, 6, 1, 1]
      ],
      initItems: [{
        row: 5,
        col: 1,
        type: "robot"
      },]
    }],
    hard: [{
      tiles: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 7, 1, 7, 7, 1, 1, 7, 1],
        [1, 1, 6, 1, 6, 6, 1, 1, 6, 1],
        [1, 1, 6, 1, 6, 6, 1, 1, 6, 1],
        [1, 1, 6, 1, 6, 6, 1, 1, 6, 1]
      ],
      initItems: [{
        row: 5,
        col: 1,
        type: "robot"
      },]
    }]
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
window.taskData.codecastParameters.showStack = true;

