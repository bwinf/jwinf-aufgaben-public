function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
             turtle: ["moveamount", "turnleft", "turnright"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_for", "math_number"],
         },

         variables: ['i'],
         variablesOnlyBlocks: ['get'],
         pythonAdditionalFunctions: {
            shared: ["range"]
         }
      },
      coords: {x: 100, y: 200},
      overlayFileName: "grid15.png",
      turtleStepSize: 1,
      maxInstructions:  {easy: 10, medium: 10, hard: 20},
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

            if (delta < Math.min(fill,empty) * 0.001) {
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


//    36.86989
//    53.13010
//    73.73979
//    106.26020
//    126.86989
//    143.13010

   function male_Haus_des_Nikolaus(l, turtle) {
     turtle.move((l * 8));
     turtle.turn(-36.86989);
     turtle.move((l * 5));
     turtle.turn(-106.26020);
     turtle.move((l * 5));
     turtle.turn(-36.86989);
     turtle.move((l * 8));
     turtle.turn(-90);
     turtle.move((l * 6));
     turtle.turn(-126.86989);
     turtle.move((l * 10));
     turtle.turn(126.86989);
     turtle.move((l * 6));
     turtle.turn(126.86989);
     turtle.move((l * 10));
     turtle.turn(-216.86989);
   }

   subTask.data = {
      easy: [{
          drawSolution : function(turtle) {
            for (var j = 1; j <= 17; j++) {
              turtle.move(j);
              turtle.turn(90);
            }

          },
      }],
      medium: [{
          drawSolution : function(turtle) {
            for (var j = 17; j >= 1; j--) {
              turtle.move(j);
              turtle.turn(-90);
            }
          },

      }],
      hard: [{
          drawSolution : function(turtle) {
            for (var j = 17; j >= 1; j--) {
              turtle.move(j);
              turtle.turn(-90);
            }
            turtle.move(1)
            for (var j = 1; j <= 17; j++) {
              turtle.turn(90);
              turtle.move(j);

            }




          },
      },],
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
