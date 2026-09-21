function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
           easy: {turtle: ["moveamountvalue", "turnleftamountvalue_europe", "turnrightamountvalue_europe"], },
           medium: {turtle: [ "penup", "pendown", "moveamountvalue",  "turnleftamountvalue_europe", "turnrightamountvalue_europe"]},
           hard: {turtle: ["penup", "pendown", "moveamountvalue", "turnleftamountvalue_europe", "turnrightamountvalue_europe", "turnleftamount", "turnrightamount"]},
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
                easy: ["controls_repeat"],
               medium: ["controls_repeat"],
               hard: ["controls_for", "controls_repeat", "math_number", "math_arithmetic"],
            },
         },

         variables: {  easy: [], medium: [], hard: ['i'] },
         variablesOnlyBlocks: ['get'],
         pythonAdditionalFunctions: {
            shared: ["range"]
         }
      },
      overlayFileName: "grid15.png",
      turtleStepSize: 1,
      maxInstructions:  {easy: 7, medium: 22, hard: 50},
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

   function male_Stern(l, turtle) {
     turtle.turn(-162);
     for (var loop = 0; loop < 5; loop++) {
       turtle.move(l);
       turtle.turn(-144);
     }
     turtle.turn(162);
   }

   subTask.data = {
      easy: [{
          drawSolution : function(turtle) {
            male_Stern(10, turtle);
          },
      }],
      medium: [{
          drawSolution : function(turtle) {
            turtle.stop_painting();turtle.move(10);turtle.start_painting();
            for(var loop = 0; loop < 12; loop++)
          {
            male_Stern(4, turtle);
            turtle.stop_painting(); turtle.turn(-105); turtle.move(6); turtle.turn(75); turtle.start_painting();

          }
          },
      }],
      hard: [{
          drawSolution : function(turtle) {
            turtle.stop_painting();turtle.move(10);turtle.start_painting();
            for(var loop = 0; loop < 12; loop++)
            {
              turtle.turn(loop*30);
              male_Stern(4, turtle);
              turtle.turn(-loop*30);
              turtle.stop_painting(); turtle.turn(-105); turtle.move(5); turtle.turn(75); turtle.start_painting();

            }
          }
      },],
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
