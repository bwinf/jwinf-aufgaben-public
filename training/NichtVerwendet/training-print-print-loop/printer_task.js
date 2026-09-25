function initTask(subTask) {
   subTask.gridInfos = {
      context: "printer",
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            printer: ["print"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["text", "controls_repeat"],
         },
      },
      maxInstructions: { easy: 4, medium: 7, hard: 7 },
      checkEndEveryTurn: false,
      blocklyColourTheme: "bwinf",
      checkEndCondition: function (context, lastTurn) {
         if (!lastTurn) return;

         // throws, if something is wrong …
         context.checkOutputHelper();

         // Seems like everything is okay: Right number of lines and all lines match …
         context.success = true;
         throw (window.languageStrings.messages.outputCorrect);
      },
      computeGrade: function (context, message) {
         var rate = 0;
         if (context.success) {
            rate = 1;
            if (context.nbMoves > 100) {
               rate /= 2;
               message += languageStrings.messages.moreThan100Moves;
            }
         }
         return {
            successRate: rate,
            message: message
         };
      }
   };

   subTask.data = {
      easy: [
         {
            input: "\n",
            output: "Schwarzer Kater\nSchwarzer Kater\nSchwarzer Kater\n",
         },
      ],
      medium: [
         {
            input: "\n",
            output: "Schwarzer Kater\nSchwarzer Kater\nSchwarzer Kater\nGraue Katze\nGraue Katze\nGraue Katze\nGraue Katze\nGraue Katze\n",
         },
      ],
      hard: [
         {
            input: "\n",
            output: "Schwarzer Kater\nSchwarzer Kater\nSchwarzer Kater\nGraue Katze\nSchwarzer Kater\nSchwarzer Kater\nSchwarzer Kater\nGraue Katze\n",
         },
      ],
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
   controls: { reload: false },
   hideSettings: true,
   jwinfMenu: { copyPaste: true, undoRedo: true, svgExport: true }
};


