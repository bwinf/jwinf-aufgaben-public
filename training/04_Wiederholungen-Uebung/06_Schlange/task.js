function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
        groupByCategory:  false,
        generatedBlocks: {
          turtle: {shared:["moveamountvalue", "turnleft", "turnright"], medium: ["penup", "pendown"], hard: ["penup", "pendown", "moveamount",]},
        },
        standardBlocks: {
          includeAll: false,
          wholeCategories: [],
          singleBlocks: {shared:["controls_repeat"], hard:["controls_repeat_ext", "controls_for"]},

        },
        variables: {hard: ['i']},
        variablesOnlyBlocks: {hard: ['get']},
        pythonAdditionalFunctions: {
         shared: ["range"]
        }
      },
      coords: {x: 170, y: 170},
      overlayFileName: "grid2.png",
      turtleStepSize: 2,
      maxInstructions:  {easy: 30, medium: 30, hard: 25},
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

            if (delta < Math.min(fill,empty) * 0.01) {
               context.success = true;
               throw(window.languageStrings.messages.paintingCorrect);
            }
            else {
               context.success = false;
               throw(window.languageStrings.messages.paintingWrong);
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
          drawSolution : function(turtle) {
            turtle.move(2);
            turtle.turn(-90);
            turtle.move(1);
            turtle.turn(90);
            turtle.move(2);
            turtle.turn(90);
            turtle.move(2);
            turtle.turn(90);
            turtle.move(5);
            turtle.turn(-90);
            turtle.move(3);
            turtle.turn(-90);
            turtle.move(5);
            turtle.turn(90);
            turtle.move(2);
            turtle.turn(-90);
            turtle.move(2);
            turtle.turn(-90);
            turtle.move(3);
            turtle.turn(-90);
            turtle.move(5);
          },
      }],
      medium: [{
          drawSolution : function(turtle) {
            for (var j = 0; j < 2; j++) {
              turtle.move(6);
              turtle.turn(90);
              turtle.move(3);
              turtle.turn(90);
              turtle.move(3);
              turtle.turn(90);
              turtle.move(2);
              turtle.turn(90);
              turtle.stop_painting();
              turtle.move(1);
              turtle.start_painting();
              for (var i = 0; i < 4; i++) {
                turtle.move(1);
                turtle.turn(90);
              }
              turtle.stop_painting();
              turtle.move(-1);
              turtle.start_painting();
              turtle.turn(180);
            }
          },
      }],
      hard: [{
        drawSolution : function(turtle) {
          for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
              turtle.move(2*i+2);
              for (var k = 0; k < 3; k++) {
                turtle.turn(-90);
                turtle.move(1);
              }
            }
            turtle.stop_painting()
            turtle.turn(-90);
            turtle.move(1);
            turtle.turn(-90);
            turtle.move(1);
            turtle.turn(180);
            turtle.start_painting();
          }
        }
      },],
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
