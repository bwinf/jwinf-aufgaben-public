function initTask(subTask) {
  subTask.gridInfos = {
    context: "turtle",
    hideSaveOrLoad: true,
    conceptViewer: true,
    timeoutMinutes: 10, // Nach 15 Minuten warnen
    actionDelay: 200,
    includeBlocks: {
      groupByCategory: { easy: false, medium: true, hard: true },
      generatedBlocks: {
        turtle: {
          easy: ["turnleftamount", "moveamount"],
          medium: ["turnleftamount", "turnrightamount", "penup", "pendown", "moveamount"],
          hard: ["turnleftamount", "turnrightamount", "penup", "pendown", "moveamount"]
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: {
          easy: [],
          medium: ["variables"],
          hard: ["variables"]
        },
        singleBlocks: {
          shared: ["controls_repeat_ext", "math_number", "math_arithmetic",],
          medium: ["procedures_defnoreturn"],
          hard: ["controls_for", "procedures_defnoreturn"]
        },

      },
      variables: {
        easy: [],
        medium: [],
        hard: ['i'],
      },
      variablesOnlyBlocks: {
        easy: ['get'],
        medium: ['get', 'set'],
        hard: ['get', 'set'],
      }
    },
    coords: {
      easy: {
        x: 250,
        y: 250
      },
      medium: {
        x: 250,
        y: 250
      },
      hard: {
        x: 250,
        y: 250
      },
    },
    overlayFileName: "grid15.png",
    turtleStepSize: 1,
    maxInstructions: {
      easy: 15,
      medium: 23,
      hard: 35
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

        if (delta < Math.min(fill, empty) * 0.1) {
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

  subTask.data = {
    easy: [{
      drawSolution: function (turtle) {
        for (var i = 0; i < 5; i++) {
          turtle.move(10);
          turtle.turn(144);
        }
        turtle.set_colour("blue")
        turtle.move(10)
      },
    }],
    medium: [{
      drawSolution: function (turtle) {
        for (var i = 0; i < 8; i++) {
          turtle.move(10);
          turtle.turn(135);
        }
        turtle.set_colour("blue")
        turtle.move(10)
        turtle.stop_painting();
        turtle.set_colour("black")
        turtle.move(1);
        turtle.start_painting();
        for (var i = 0; i < 8; i++) {
          turtle.move(5);
          turtle.turn(135);
        }
        turtle.set_colour("blue")
        turtle.move(5)
      },
    }],
    hard: [{
      drawSolution: function (turtle) {
        function star_X_4(a, b) {
          for (var i = 0; i < (a); i++) {
            turtle.move(10);
            turtle.turn((360 / (a / b)));
          }
        }
        star_X_4(9, 4);
        turtle.set_colour("blue")
        turtle.move(10)
        turtle.stop_painting();
        turtle.turn(180)
        turtle.move(10)
        turtle.turn(180)

        turtle.set_colour("black")
        turtle.turn(90);
        turtle.move(10);
        turtle.turn(-90);
        turtle.start_painting();
        star_X_4(15, 4);

        turtle.set_colour("blue")
        turtle.move(10)
        turtle.stop_painting();
        turtle.turn(180)
        turtle.move(10)
        turtle.turn(180)

        turtle.set_colour("black")
        turtle.stop_painting();
        turtle.move(13);
        turtle.start_painting();

        star_X_4(5, 2);

        turtle.set_colour("blue")
        turtle.move(10)
        turtle.stop_painting();


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
