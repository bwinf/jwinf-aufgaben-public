function initTask(subTask) {
  subTask.gridInfos = {
    hideSaveOrLoad: true,
    actionDelay: 200,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        easy: {
          turtle: ["moveamountvalue", "turnleftamountvalue_options", "turnrightamountvalue_options"],
        },
        medium: {
          turtle: ["moveamount", "turnleftamountvalue_options", "turnrightamountvalue_options"]
        },
        hard: {
          turtle: ["moveamount", "turnleftamountvalue_options", "turnrightamountvalue_options", "colourvalue"]
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: {
          easy: ["controls_repeat"],
          medium: ["controls_for"],
          hard: ["controls_for", "controls_repeat", "math_number"],
        },
      },

      variables: {
        easy: [],
        medium: ['i'],
        hard: ['i']
      },
      variablesOnlyBlocks: ['get'],
      pythonAdditionalFunctions: {
       shared: ["range"]
    }
    },
    overlayFileName: "grid2.png",
    turtleStepSize: 2,
    maxInstructions: {
      easy: 5,
      medium: 10,
      hard: 20
    },
    blocklyColourTheme: "bwinf",
    checkEndEveryTurn: false,
    checkEndCondition: function(context, lastTurn) {
      if (lastTurn) {
        var userImage = context.turtle.invisibleTurtle.drawingContext.getImageData(0, 0, 300, 300);
        var solutionImage = context.turtle.invisibleSolutionTurtle.drawingContext.getImageData(0, 0, 300, 300);
        var len = Math.min(userImage.data.length, solutionImage.data.length);
        var delta = 0;
        var fill = 0;
        var empty = 0;
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
    computeGrade: function(context, message) {
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
      drawSolution: function(turtle) {
        turtle.move(2);
        turtle.turn(72);
        turtle.move(2);
        turtle.turn(72);
        turtle.move(2);
        turtle.turn(72);
        turtle.move(2);
        turtle.turn(72);
        turtle.move(2);
      },
    }],
    medium: [{
      drawSolution: function(turtle) {
        for (var i = 1; i < 8; i++) {
          turtle.move(i);
          turtle.turn(72);
        }
      },
    }],
    hard: [{
      drawSolution: function(turtle) {
        for (var i = 1; i < 8; i++) {
          turtle.set_colour("red");
          turtle.move(i);
          turtle.set_colour("blue");
          for (var j = 0; j < 4; j++) {
            turtle.move(1);
            turtle.turn(-90);
          }
          turtle.turn(72);
        }
      },
    }, ],
  };

  initBlocklySubTask(subTask);
  displayHelper.thresholdEasy = 120;
  displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
