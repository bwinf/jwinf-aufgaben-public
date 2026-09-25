function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
            turtle: ["move", "moveamount", "moveamountvalue", "turnleft", "turnright", "turnleftamount", "turnrightamount", "turnleftamountvalue", "turnrightamountvalue", "turneitheramount", "turneitheramountvalue", "penup", "pendown", "peneither", "colour2", "colourvalue"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [ "loops", "logic", "math", "colour", "variables"],
            singleBlocks: {},
         },
      },
      overlayFileName: "grid5.png",
      turtleStepSize: 5,
      maxInstructions:  Infinity,
      blocklyColourTheme: "bwinf",
      checkEndEveryTurn: false,
      checkEndCondition: function(context, lastTurn) {
         if (lastTurn) {
            context.success = true;
            throw("Sehr schön!");
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
          drawSolution : function(turtle) {},
         }],

   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);

