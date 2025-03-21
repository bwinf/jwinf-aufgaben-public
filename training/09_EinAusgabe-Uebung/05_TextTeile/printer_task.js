function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
             printer: ["print", "read", "eof"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {easy:["text_getSubstring", "math_number"],medium:["text", "text_trim_noShadow", "text_indexOf", "text_getSubstring", "math_number", "math_arithmetic"],hard:["text", "text_join", "text_trim_noShadow", "text_indexOf", "text_getSubstring", "math_number", "math_arithmetic", "controls_untilWhile"],},
         },
         variables: {easy:["Text"],medium:["Text", "Anfang", "Ende"],hard:["Text", "Anfang", "Ende"]},
         variablesOnlyBlocks: ['set', 'get'],
      },
      maxInstructions: {easy:20, medium:30, hard: 100},
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
           input: "Ild3TIMGijsur\n",
            output: "TIM\n",
         },
         {
           input: "VifJMAXidcash9\n",
           output: "MAX\n",
         },
         {
           input: "FudoKAIithdeij2\n",
           output: "KAI\n",
         },
      ],
      medium: [
         {
           input: "sofort richtungen aussagen umfeld\n",
            output: "richtungen\n",
         },
         {
           input: "vergleichbar jene zugleich seiten\n",
           output: "jene\n", },
         {
           input: "palette medizinische nominiert untergrund\n",
           output: "medizinische\n",
         },
      ],
      hard: [
          {
            input: "Hallo <hier Namen einfügen>!\nJuna\nJuno\n",
            output: "Hallo Juna!\nHallo Juno!\n",
          },
          {
            input: "Ich wohne in <hier Ort einfügen>! Es ist schön dort.\nGöttingen\nLyon\nBonn\n",
            output: "Ich wohne in Göttingen! Es ist schön dort.\nIch wohne in Lyon! Es ist schön dort.\nIch wohne in Bonn! Es ist schön dort.\n",
          },
          {
            input: "Ich mag <hier Sache einfügen>\nSingen\nTanzen\nZüge wroom\n",
            output: "Ich mag Singen\nIch mag Tanzen\nIch mag Züge wroom\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
