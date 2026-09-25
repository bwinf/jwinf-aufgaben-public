function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
             printer: {
               medium: ["read"],
               hard: ["read", "eof"],
               shared: ["print"],
             },
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks:{
              easy: ["text"],
              hard: ["controls_untilWhile"],
              shared: [],
             },
         },
      },
      maxInstructions: {
        easy: 40,
        medium: 60,
        hard: 60,
      },
      checkEndEveryTurn: true,
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
            input: "",
            output: "Hallo Juno!\n",
         },
      ],
      medium: [
         {
            input: "Hallo Juno!\n",
            output: "Hallo Juno!\n",
         },
      ],
      hard: [
         {
            input: "Hallo Juno!\nTreffen am Kino.\nDeine Juna\n",
            output: "Hallo Juno!\nTreffen am Kino.\nDeine Juna\n",
         },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
