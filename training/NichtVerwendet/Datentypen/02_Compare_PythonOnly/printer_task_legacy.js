function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            printer: {
               easy: ["print", "read", "convToInt"],
 },
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               easy: ["math_number", "logic_compare"],
},
         },
         variables: [],
         variablesOnlyBlocks: {
            easy: ['get', 'set'],
         }
      },
      maxInstructions: {
         easy: 22,
      },
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
            input: "0\n",
            output: "true\n",
         },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy"], null);