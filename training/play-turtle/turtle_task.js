function initTask(subTask) {
   subTask.gridInfos = {
      context: "turtle",
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
            turtle: ["moveamount", "moveamountvalue", "turneitheramount", "turneitheramountvalue", "peneither", "colour2", "colourvalue"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["loops", "logic", "math", "colour", "variables", "functions"],
            singleBlocks: {},
         },
      },
      overlayFileName: "grid15.png",
      turtleStepSize: 1,
      maxInstructions: Infinity,
      blocklyColourTheme: "bwinf",
      checkEndEveryTurn: false,
      checkEndCondition: function (context, lastTurn) {
         if (lastTurn) {
            context.success = true;
            throw ("Sehr schön!");
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

   subTask.data = {
      easy: [{
         drawSolution: function (turtle) { },
      }],

   };

   initBlocklySubTask(subTask);
}

window.initBlocklySubTask = function () { };
window.taskData = window.taskData || {};
window.taskData.waitInit = function () { initTask(window.taskData); };
window.taskData.codecastParameters = window.taskData.codecastParameters || {
   language: "de-DE",
   platform: "blockly",
   canChangePlatform: false,
   showStepper: true,
   showStack: true,
   showViews: true,
   showIO: true,
   controls: { reload: true },
   hideSettings: true,
   jwinfMenu: { copyPaste: true, undoRedo: true, svgExport: true }
};
window.taskData.codecastParameters.showStack = true;
window.taskData.codecastParameters.controls.reload = true;


