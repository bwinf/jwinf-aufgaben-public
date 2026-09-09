function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            easy: {turtle: ["moveamountvalue", "turnleft", "turnright", "penup", "pendown"], },
            medium: {turtle: ["moveamountvalue", "turnleftamountvalue_moreoptions", "turnrightamountvalue_moreoptions", "penup", "pendown"]},
            hard: {turtle: ["moveamountvalue", "turnleftamountvalue_moreoptions", "turnrightamountvalue_moreoptions", "penup", "pendown"]},
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
                easy: [],
               medium: ["controls_repeat"],
               hard: ["controls_repeat"],
            },
         },
      },
      overlayFileName: "grid5.png",
      turtleStepSize: 5,
      maxInstructions:  {easy: 100, medium: 100, hard: 100},
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
            
            if (delta < Math.min(fill,empty) * 0.1) {
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
          drawSolution : function(turtle) { turtle.stop_painting(); turtle.move(2); turtle.turn(90); turtle.start_painting(); turtle.move(2); turtle.turn(90); turtle.move(4);  turtle.turn(90); turtle.move(4); turtle.turn(90); turtle.move(4); turtle.turn(90); turtle.move(2);},
      }],
      medium: [{
          drawSolution : function(turtle) { turtle.stop_painting(); turtle.move(2); turtle.turn(180);  turtle.start_painting(); turtle.turn(18); turtle.move(4); turtle.turn(216); turtle.move(4); turtle.turn(216); turtle.move(4); turtle.turn(216); turtle.move(4); turtle.turn(216); turtle.move(4);},
      }],
      hard: [{
          drawSolution : function(turtle) { turtle.stop_painting(); turtle.move(2); turtle.turn(180);  turtle.start_painting(); turtle.turn(30); turtle.move(4); turtle.turn(240); turtle.move(4); turtle.turn(240); turtle.move(4);
              turtle.stop_painting();  turtle.turn(210); turtle.move(1); turtle.turn(90); turtle.move(2); turtle.turn(180); turtle.start_painting(); turtle.turn(60); turtle.move(4); turtle.turn(240); turtle.move(4); turtle.turn(240); turtle.move(4);
          }//turtle.turn(240); turtle.move(4); turtle.turn(216); turtle.move(4);},
      },],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
