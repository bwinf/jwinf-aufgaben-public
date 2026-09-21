function initTask(subTask) {
   subTask.gridInfos = {
      context: "printer",
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            printer: {
               shared: ["print", "readInteger"],
               medium: ["eof"],
               hard: ["eof"],
            }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: { shared: ["math_number", "math_arithmetic"], medium: ["controls_untilWhile", "logic_negate"], hard: ["text", "controls_if_else", "logic_compare", "controls_untilWhile", "logic_negate"] },
         },
         variables: { shared: ["Summe"], hard: ["Limit"] },
         variablesOnlyBlocks: ['set', 'get'],
         pythonForceAllowed: {
            shared: ["list_brackets"],
            easy: [],
            medium: [],
            hard: []
         },
      },
      maxInstructions: { easy: 20, medium: 20, hard: 30 },
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
            input: "12\n13\n",
            output: "25\n",
         },
         {
            input: "38\n74\n",
            output: "112\n",
         },
         {
            input: "28\n63\n",
            output: "91\n",
         },
      ],
      medium: [
         {
            input: "12\n21\n38\n7\n",
            output: "78\n",
         },
         {
            input: "28\n14\n4\n16\n3\n73\n17\n",
            output: "155\n",
         },
         {
            input: "2\n15\n",
            output: "17\n",
         },
      ],
      hard: [
         {
            input: "100\n23\n38\n12\n5\n4\n17\n",
            output: "ja\n",
         },
         {
            input: "100\n12\n19\n21\n20\n13\n8\n9\n",
            output: "nein\n",
         },
         {
            input: "77\n7\n25\n14\n10\n22\n",
            output: "nein\n",
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
   jwinfMenu: { copyPaste: true, undoRedo: true, svgExport: true },
   showExpectedOutput: false,
   canAddUserTests: true
};
window.taskData.codecastParameters.showStack = true;


