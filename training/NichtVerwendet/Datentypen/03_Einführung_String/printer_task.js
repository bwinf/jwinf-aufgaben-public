function initTask(subTask) {
   subTask.gridInfos = {
      context: "printer",
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            printer: {
               easy: ["print", "read", "convToString"],
               medium: ["print", "read", "convToInt"],
               hard: ["print", "read", "convToInt", "convToString"],
            },
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               easy: [],
               medium: ["text_length", "text_charAt"],
               hard: ["text_charAt", "text_join", "math_arithmetic", "math_number"],
            },
         },
         variables: {
            easy: [],
            medium: ["Var1", "Var2", "Var3"],
            hard: ["Var1", "Var2", "Var3", "Var4"],
         },

         variablesOnlyBlocks: {
            easy: ['get', 'set'],
            medium: ['get', 'set'],
            hard: ['get', 'set'],
         },
         pythonAdditionalFunctions: {
            medium: ["len"]
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
         output: "42\n",
      },],
      medium: [{
         input: "4224\n",
         output: "4\n4\n4\n",
      },
      {
         input: "55555\n",
         output: "5\n5\n5\n",
      },
      {
         input: "123456789\n",
         output: "9\n1\n9\n",
      },],
      hard: [{
         input: "4224\n",
         output: "4444",
      },],
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
