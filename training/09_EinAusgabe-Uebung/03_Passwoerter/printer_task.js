function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
           printer: ["read", "print"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {easy:["text", "controls_if", "controls_if_else", "logic_compare"],medium:["text_length_noShadow", "controls_if", "controls_if_else", "logic_compare", "math_number", "text"],hard:["text", "controls_if", "controls_if_else", "logic_compare", "text_changeCase_noShadow"],},
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
            input: "test123\n",
            output: "Falsches Passwort\n",
         },
         {
           input: "passwort\n",
           output: "Falsches Passwort\n",
         },
         {
           input: "korrektpferd\n",
           output: "Richtiges Passwort\n",
         },
      ],
      medium: [
         {
            input: "geheim\n",
            output: "Zu kurz\n",
         },
         {
           input: "test123\n",
           output: "Zu kurz\n",
         },
         {
           input: "BliwiksagAs5\n",
           output: "Sehr gut\n",
         },
         {
           input: "halbredeaufrechterhaltenabseits \n",
           output: "Sehr gut\n",
         },
      ],
      hard: [
          {
            input: "geheim\n",
            output: "Nur Kleinbuchstaben\n",
          },
          {
            input: "GEHEIM\n",
            output: "Nur Großbuchstaben\n",
          },
          {
            input: "test\n",
            output: "Nur Kleinbuchstaben\n",
          },
          {
            input: "TEST\n",
            output: "Nur Großbuchstaben\n",
          },
          {
            input: "bajetViesh1\n",
            output: "Sehr gut\n",
          },
          {
            input: "WinterGueltigMorgenSchlange\n",
            output: "Sehr gut\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
