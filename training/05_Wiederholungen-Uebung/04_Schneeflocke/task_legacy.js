function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
        groupByCategory:  {easy: false, medium: false, hard: false},
         generatedBlocks: {
           shared: {turtle: ["moveamountvalue", "movebackamountvalue", "turnleftamountvalue", "turnrightamountvalue"],},
           easy: { },
             medium: {},
             hard: {},
         },
         standardBlocks: {
            includeAll: false,
          //  wholeCategories: ["functions", "variables"],
            singleBlocks: {
                easy: ["controls_repeat"],
               medium: ["controls_repeat"],
               hard: ["controls_repeat"],
            },
         },
         pythonAdditionalFunctions: {
          shared: ["range"]
         },
      },
      overlayFileName: "grid15.png",
      turtleStepSize: 1,
      maxInstructions:  {easy: 50, medium: 50, hard: 50},
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

   function male_schneeflocke(l, turtle) {
      for (var i = 0; i < 3; i++) {
        turtle.move(l);
        turtle.turn(-45);
        for (var j = 0; j < 3; j++) {
          turtle.move(l);
          turtle.turn(-30);
          for (var k = 0; k < 3; k++) {
            turtle.move(l);
            turtle.move(-l);
            turtle.turn(30);
          }
          turtle.turn(-60);
          turtle.move(-l);
          turtle.turn(45);
        }
        turtle.turn(-90);
        turtle.move(-l);
        turtle.turn(120);
     }
   }

   subTask.data = {
      easy: [{
          drawSolution : function(turtle) {
              var l = 5;
              for (var i = 0; i < 8; i++) {
                turtle.move(l);
                turtle.turn(-30);
                for (var j = 0; j < 3; j++) {
                  turtle.move(l);
                  turtle.move(-l);
                  turtle.turn(30);
                }
                turtle.turn(-60);
                turtle.move(-l);
                turtle.turn(45);
              }

          },
      }],
      medium: [{
        drawSolution : function(turtle) {
          var l = 4;
          for (var i = 0; i < 3; i++) {
            turtle.move(l);
            turtle.turn(-45);
            for (var j = 0; j < 3; j++) {
              turtle.move(l);
              turtle.turn(-30);
              for (var k = 0; k < 3; k++) {
                turtle.move(l);
                turtle.move(-l);
                turtle.turn(30);
              }
              turtle.turn(-60);
              turtle.move(-l);
              turtle.turn(45);
            }
            turtle.turn(-90);
            turtle.move(-l);
            turtle.turn(120);
          }
        },
      }],
      hard: [{
        drawSolution : function(turtle) {
          var l = 2;
            for (var i = 0; i < 3; i++) {
              turtle.move(3*l);
              turtle.turn(-90);
              for (var j = 0; j < 3; j++) {
                turtle.move(l);
                turtle.turn(-45);
                for (var m = 0; m < 3; m++) {
                  turtle.move(l);
                  turtle.turn(-30);
                  for (var k = 0; k < 3; k++) {
                    turtle.move(l);
                    turtle.move(-l);
                    turtle.turn(30);
                  }
                  turtle.turn(-60);
                  turtle.move(-l);
                  turtle.turn(45);
                }
                turtle.turn(-90);
                turtle.move(-l);
                turtle.turn(90);
              }
              turtle.turn(-180);
              turtle.move(-3*l);
              turtle.turn(120);
            }
          },
      },],
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
