function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
        groupByCategory:  {easy: false, medium: true, hard: true},
         generatedBlocks: {
             easy: {turtle: ["moveamountvalue", "turnleft", "turnright"], },
             medium: {turtle: ["moveamountvalue", "turnleft", "turnright", "penup", "pendown"]},
             hard: {turtle: ["moveamount", "turnleft", "turnright", "penup", "pendown"]},
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["functions", "variables"],
            singleBlocks: {
                easy: ["controls_repeat"],
               medium: ["controls_repeat"],
               hard: ["controls_repeat", "math_number", "math_arithmetic"],
            },
         },

      },
      coords: {x: 50, y: 200},
      overlayFileName: "grid15.png",
      turtleStepSize: 1,
      maxInstructions:  {easy: 10, medium: 25, hard: 35},
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
            
            if (delta < Math.min(fill,empty) * 0.03) {
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

   function male_Haus_des_Nikolaus(l, turtle) {
     for (var i = 0; i < 4; i++) {
      turtle.move((l));
      turtle.turn(-90);
      turtle.move((l));
      turtle.turn(-90);
      turtle.move((l));
      turtle.turn(90);
     }
   }

   subTask.data = {
      easy: [{
          drawSolution : function(turtle) {
            male_Haus_des_Nikolaus(4, turtle);
          },
      }],
      medium: [{
          drawSolution : function(turtle) {
            //turtle.stop_painting(); turtle.move(5); turtle.turn(90); turtle.move(10); turtle.turn(-90); turtle.start_painting();
            male_Haus_des_Nikolaus(4, turtle);
            turtle.stop_painting();turtle.turn(-90); turtle.move(10); turtle.turn(90); turtle.move(5); turtle.start_painting();
            male_Haus_des_Nikolaus(4, turtle);
            turtle.stop_painting();turtle.turn(-90); turtle.move(5); turtle.turn(90); turtle.move(10);turtle.start_painting();
            male_Haus_des_Nikolaus(4, turtle);
          },
      }],
      hard: [{
        drawSolution : function(turtle) {
          /*turtle.stop_painting(); turtle.move(5); turtle.turn(90); turtle.move(10); turtle.turn(-90); turtle.start_painting();
          male_Haus_des_Nikolaus(2, turtle);
          turtle.stop_painting();turtle.turn(-90); turtle.move(16); turtle.turn(90);turtle.start_painting();
          male_Haus_des_Nikolaus(3, turtle);
          turtle.stop_painting();turtle.turn(90); turtle.move(8); turtle.turn(-90); turtle.move(-11);turtle.start_painting();
          male_Haus_des_Nikolaus(4, turtle);*/
          male_Haus_des_Nikolaus(4, turtle);
          turtle.stop_painting();turtle.turn(-90); turtle.move(10); turtle.turn(90); turtle.move(5); turtle.start_painting();
          male_Haus_des_Nikolaus(3, turtle);
          turtle.stop_painting();turtle.turn(-90); turtle.move(5); turtle.turn(90); turtle.move(7);turtle.start_painting();
          male_Haus_des_Nikolaus(2, turtle);
          /*turtle.stop_painting();turtle.turn(-90); turtle.move(-5); turtle.turn(90); turtle.move(5);turtle.start_painting();
          male_Haus_des_Nikolaus(2, turtle);*/
        },
      },],
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
