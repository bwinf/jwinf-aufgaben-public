Blockly.FieldColour.COLOURS = ["#FFA500", 'black', 'red', ];
Blockly.FieldColour.COLUMNS = 3;
Blockly.FieldColour.ROW = 1;

function initTask(subTask) {
  subTask.gridInfos = {
    conceptViewer: false,
    timeoutMinutes: 10, // Nach 10 Minuten warnen
    hideSaveOrLoad: true,
    actionDelay: 200,
    includeBlocks: {
      groupByCategory: {
        easy: false,
        medium: false,
        hard: true
      },
      generatedBlocks: {
        turtle: {
          shared: [],
          easy: ["moveamountvalue_noshadow", "turnleftamountvalue_noround_noshadow"],
          medium: ["moveamountvalue_noshadow","turnleftamountvalue_noround_noshadow"],
          hard: ["moveamountvalue_noshadow", "turnleftamountvalue_noround_noshadow"]
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: {
          easy:[],
          medium:[],
          hard:["variables"]
        },
        singleBlocks: {
          shared: ["controls_repeat_ext", "math_number", "math_arithmetic"],
          medium: [],
          hard: []
        },

      },
      variables: {  easy: [], medium: ["Schritte"], hard: [] },
      variablesOnlyBlocks: ['get', "set", "incr"],
    },
    coords: {
      easy: {
        x: 250,
        y: 200,
        //dir: 90
      },
      medium: {
        x: 250,
        y: 200,
      },
      hard: {
        x: 250,
        y: 200,
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

  function malePoygon(turtle, size, n) {
    turtle.start_painting();
    for (var i = 0; i < n; i++) {
      turtle.move(size);
      turtle.turn(360/n);
    }
  }

  subTask.data = {
    easy: [{
      drawSolution: function (turtle) {
        //turtle.turn(-120);
        malePoygon(turtle, 8, 6);
      },
    }],
    medium: [{
      drawSolution: function (turtle) {
        //  turtle.turn(-30);
        malePoygon(turtle, 8, 6);
        malePoygon(turtle, 6, 6);
        malePoygon(turtle, 4, 6);
        malePoygon(turtle, 2, 6);
      },
    }],
    hard: [{
      drawSolution: function (turtle) {
        malePoygon(turtle, 8, 6);
        malePoygon(turtle, 6, 5);
        malePoygon(turtle, 4, 4);
        malePoygon(turtle, 2, 3);
      }
    }, ],
  };

  initBlocklySubTask(subTask);
  displayHelper.thresholdEasy = 120;
  displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null);