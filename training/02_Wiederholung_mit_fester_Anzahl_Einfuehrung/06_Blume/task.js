if (typeof Blockly !== "undefined") {
  Blockly.FieldColour.COLOURS = ["#FFA500", 'black', 'red',];
  Blockly.FieldColour.COLUMNS = 3;
  Blockly.FieldColour.ROW = 1;
}

function initTask(subTask) {
  subTask.gridInfos = {
    context: "turtle",
    conceptViewer: true,
    timeoutMinutes: 10, // Nach 10 Minuten warnen
    hideSaveOrLoad: true,
    actionDelay: 200,
    includeBlocks: {
      groupByCategory: {
        easy: false,
        medium: false,
        hard: false
      },
      generatedBlocks: {
        turtle: {
          shared: ["moveamountvalue", "turnrightamountvalue"],
          // easy: ["moveamountvalue", "turneitheramountvalue"],
          // medium: ["moveamount"],
          // hard: ["moveamount"]
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: {},
        singleBlocks: {
          shared: ["controls_repeat"],
          // medium: ["controls_for"],
          // hard: ["math_arithmetic"]
        },

      },
    },
    coords: {
      easy: {
        x: 150,
        y: 150
      },
      medium: {
        x: 150,
        y: 150
      },
      hard: {
        x: 150,
        y: 150
      },
    },
    overlayFileName: "grid15.png",
    turtleStepSize: 1,
    turtleColourValue: "#000000",
    maxInstructions: {
      easy: 15,
      medium: 20,
      hard: 25
    },
    blocklyColourTheme: "bwinf",
    checkEndEveryTurn: false,
    checkEndCondition: function (context, lastTurn) {
      if (lastTurn) {
        var userImage = context.turtle.invisibleTurtle.drawingContext.getImageData(0, 0, 300, 300);
        var solutionImage = context.turtle.invisibleSolutionTurtle.drawingContext.getImageData(0, 0, 300, 300);
        var len = Math.min(userImage.data.length, solutionImage.data.length);
        var delta = 0;
        var fill = 0;
        var empty = 0;
        console.log(userImage);
        console.log(solutionImage);
        // Pixels are in RGBA format.  Only check the Alpha bytes.
        for (var i = 3; i < len; i += 4) {
          // Check the Alpha byte.
          if (Math.abs(userImage.data[i] - solutionImage.data[i]) > 127) {
            delta++;
          }
          if (solutionImage.data[i] > 127)
            fill++;
          else
            empty++;
        }

        if (delta < Math.min(fill, empty) * 0.01) {
          context.success = true;
          throw (window.languageStrings.messages.paintingCorrect);
        } else {
          context.success = false;
          throw (window.languageStrings.messages.paintingWrong);
        }
      }
    },
    computeGrade: function (context, message) {
      var rate = 0;
      if (context.success) {
        rate = 1;
        if (context.nbMoves > 100) {
          rate /= 2;
          message += strings.moreThan100Moves;
        }
      }
      return {
        successRate: rate,
        message: message
      };
    }
  };

  function maleRaute(turtle, size) {
    turtle.start_painting();
    //turtle.turn(18);
    for (var i = 0; i < 2; i++) {
      turtle.move(size);
      turtle.turn(315);
      turtle.move(size);
      turtle.turn(225);
    }
    //turtle.stop_painting();
    //turtle.turn(-18);
  }

  subTask.data = {
    easy: [{
      drawSolution: function (turtle) {
        maleRaute(turtle, 6);
      },
    }],
    medium: [{
      drawSolution: function (turtle) {
        for (var i = 0; i < 8; i++) {
          maleRaute(turtle, 6);
          turtle.turn(315);
        }
      },
    }],
    hard: [{
      drawSolution: function (turtle) {
        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 8; j++) {
            maleRaute(turtle, 6);
            turtle.turn(315);
          }
          turtle.turn(330)
        }
      }
    },],
  };

  initBlocklySubTask(subTask);
}

window.initBlocklySubTask = function () { };
window.taskData = window.taskData || {};
window.taskData.waitInit = function () { initTask(window.taskData); };
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
