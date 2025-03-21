function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
        groupByCategory: {
          easy: false,
          medium: true,
          hard: true,
      },
        generatedBlocks: {
          turtle: {
            shared: ["colourvalue"],
            easy:   ["moveamountvalue", "turnrightamountvalue_options", "turnleftamountvalue_options"],
            medium: ["penup", "pendown", "moveamountvalue", "turnrightamountvalue_options", "turnleftamountvalue_options"],
            hard:   ["penup", "pendown", "moveamount", "turnrightamountvalue_options", "turnleftamountvalue_options"],
          },
        },
        standardBlocks: {
          includeAll: false,
          wholeCategories: {
            easy: [],
            medium: [],
            hard: ["variables"],
          },
          singleBlocks: {
            shared: ["controls_repeat", "procedures_defnoreturn"],
            hard: ["math_arithmetic", "math_number", "procedures_defnoreturn"],
          },
        },
      },
      coords: {x: 150, y: 200},
      overlayFileName: "grid15.png",
      turtleStepSize: 1,
      maxInstructions:  {easy: 20, medium: 40, hard: 55},
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

   function maleBlume(turtle, size) {
       turtle.start_painting();
       turtle.set_colour("#0a0")
       turtle.move(5*size);
       turtle.turn(-90);
       turtle.set_colour("#f00")
       for (var i = 0; i < 8; i++) {
         turtle.move(1*size);
         turtle.turn(45);
       }
       turtle.stop_painting();
       turtle.turn(90);
       turtle.move(-5*size);
  }

   subTask.data = {
      easy: [{
          drawSolution : function(turtle) {
            maleBlume(turtle, 1);
          },
      }],
      medium: [{
          drawSolution : function(turtle) {
            maleBlume(turtle, 1);
            turtle.turn(90);
            turtle.move(10);
            turtle.turn(-90);
            maleBlume(turtle, 1);
            turtle.turn(-90);
            turtle.move(14);
            turtle.turn(90);
            maleBlume(turtle, 1);
            turtle.turn(-90);
            turtle.move(6);
            turtle.turn(90);
            maleBlume(turtle, 1);

          },
      }],
      hard: [{
        drawSolution : function(turtle) {
          maleBlume(turtle, 1);
          turtle.turn(90);
          turtle.move(10);
          turtle.turn(-90);
          maleBlume(turtle, 1.5);
          turtle.turn(-90);
          turtle.move(14);
          turtle.turn(90);
          maleBlume(turtle, 0.5);
          turtle.turn(-90);
          turtle.move(6);
          turtle.turn(90);
          maleBlume(turtle, 1);
        }
      },],
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
