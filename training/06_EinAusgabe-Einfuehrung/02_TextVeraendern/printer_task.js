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
            singleBlocks: {
              easy:["text_changeCase_noShadow"],
              medium:["text_length_noShadow"],
              hard:["text", "text_join"],
            },
         },
      },
      maxInstructions: {easy:4, medium:7, hard: 7},
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
            input: "Hallo Juna!\n",
            output: "HALLO JUNA!\n",
         },
         {
           input: "Hallo Juno!\n",
           output: "HALLO JUNO!\n",
         },
         {
           input: "Hallo Programmierer!\n",
           output: "HALLO PROGRAMMIERER!\n",
         },
      ],
      medium: [
         {
            input: "Hallo Juna!\n",
            output: "11\n",
         },
         {
           input: "Hallo, lieber Juno!\n",
           output: "19\n",
         },
         {
           input: "Hallo, du fleißiger Programmierer!\n",
           output: "34\n",
         },
      ],
      hard: [
          {
            input: "Juna!\n",
            output: "Hallo Juna!\n",
          },
          {
            input: "Juno!\n",
            output: "Hallo Juno!\n",
          },
          {
            input: "ihr Programmierfüchse!\n",
            output: "Hallo ihr Programmierfüchse!\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
