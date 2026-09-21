function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
             printer: ["print", "read"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: [],
         },
         variables: {easy: ["Variable", "Variable 2"], medium: ["Variable", "Variable 2", "Variable 3"], hard: ["Variable", "Variable 2", "Variable 3"]},
         variablesOnlyBlocks: ['set', 'get'],
      },
      maxInstructions: 22,
      checkEndEveryTurn: false,
      blocklyColourTheme: "bwinf",
      checkEndCondition: function(context, lastTurn) {
         if (!lastTurn) return;
         
         // throws, if something is wrong …
         context.checkOutputHelper();

         // Seems like everything is okay: Right number of lines and all lines match …
         context.success = true;
         throw(window.languageStrings.messages.outputCorrect);
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
      easy: [
         {
            input: "Zeile 1\nZeile 2\n",
            output: "Zeile 2\nZeile 1\n",
         },
         {
            input: "Aufschwung\nAußenpolitik\n",
            output: "Außenpolitik\nAufschwung\n",
         },
         {
            input: "Defizit\nBehält\n",
            output: "Behält\nDefizit\n",
         },
      ],
      medium: [
         {
            input: "Zeile 1\nZeile 2\nZeile 3\n",
            output: "Zeile 2\nZeile 3\nZeile 1\n",
         },
         {
            input: "Aufschwung\nAußenpolitik\nDarstellung\n",
            output: "Außenpolitik\nDarstellung\nAufschwung\n",
         },
         {
            input: "Defizit\nBehält\nDeutlichen\n",
            output: "Behält\nDeutlichen\nDefizit\n",
         },
      ],
      hard: [
         {
            input: "Zeile 1\nZeile 2\nZeile 3\nZeile 4\n",
            output: "Zeile 4\nZeile 1\nZeile 2\nZeile 3\n",
         },
         {
            input: "Aufschwung\nAußenpolitik\nDarstellung\nEingeschlagen\n",
            output: "Eingeschlagen\nAufschwung\nAußenpolitik\nDarstellung\n",
         },
         {
            input: "Defizit\nBehält\nDeutlichen\nParks\n",
            output: "Parks\nDefizit\nBehält\nDeutlichen\n",
         },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);

