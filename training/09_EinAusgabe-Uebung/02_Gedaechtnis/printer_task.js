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
            singleBlocks: {easy:["text_changeCase_noShadow"],medium:["text", "text_join"],hard:["text", "text_join", "text_changeCase_noShadow"],},
         },
         variables: ["gemerkter Text"],
         variablesOnlyBlocks: ['set', 'get'],
      },
      maxInstructions: {easy:20, medium:20, hard: 20},
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
            output: "hallo juna!\nHallo Juna!\nHALLO JUNA!\n",
         },
         {
           input: "Hallo Juno!\n",
           output: "hallo juno!\nHallo Juno!\nHALLO JUNO!\n",
         },
         {
           input: "Hallo Programmierer!\n",
           output: "hallo programmierer!\nHallo Programmierer!\nHALLO PROGRAMMIERER!\n",
         },
      ],
      medium: [
         {
            input: "Juna!\n",
            output: "Hallo Juna!\nTschüss Juna!\n",
         },
         {
           input: "Juno!\n",
           output: "Hallo Juno!\nTschüss Juno!\n",
         },
         {
           input: "du Programmierer!\n",
           output: "Hallo du Programmierer!\nTschüss du Programmierer!\n",
         },
      ],
      hard: [
          {
            input: "Juna!\n",
            output: "Hallo Juna! HALLO JUNA!\n",
          },
          {
            input: "Juno!\n",
            output: "Hallo Juno! HALLO JUNO!\n",
          },
          {
            input: "ihr Programmierfüchse!\n",
            output: "Hallo ihr Programmierfüchse! HALLO IHR PROGRAMMIERFÜCHSE!\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
