function initTask(subTask) {
   subTask.gridInfos = {
      context: "printer",
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            printer: {
               easy: ["print", "read"],
               medium: ["print", "read", "convToInt"],
               hard: ["print", "read", "convToInt"],
            },
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               easy: ["math_arithmetic", "math_number"],
               medium: ["math_arithmetic", "math_number"],
               hard: [],
            },
         },
         variables: ["Eingabe"],
         variablesOnlyBlocks: {
            easy: ['get', 'set'],
            medium: ['get', 'set'],
            hard: ['get', 'set'],
         }
      },
      maxInstructions: 100,
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
         input: "42\n",
         output: "43\n",
      },],
      medium: [{
         input: "42\n",
         output: "43\n",
      },],
      hard: [{
         input: "banana\n",
      },
      {
         input: "a\n",
      },
      {
         input: "42zz\n",
      },
      {
         input: "z42\n",
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
