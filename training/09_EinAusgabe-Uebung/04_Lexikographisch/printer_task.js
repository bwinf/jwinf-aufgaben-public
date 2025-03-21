function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,

      includeBlocks: {
          shared: {
          groupByCategory: {easy: false, medium: false, hard: false},
         generatedBlocks: {
             printer: {
                 easy:  ["print", "read"],
                 medium:  ["print", "read"],
                hard: ["print", "read", "eof"],
                //hard:  ["print", "read", "eof"],

            },

         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {
                easy: [],
                medium: [],
                hard: [],
                //hard: ["variables", "lists", "math"],
            },
            singleBlocks: {
                easy: ["controls_if_else", "logic_compare", "text"],
                medium: ["controls_if_else", "logic_compare"],
                hard: ["controls_untilWhile", "controls_if_else", "logic_compare"],
                //hard: ["controls_untilWhile", "controls_for", "text_length", "controls_if", "logic_compare", "text_charAt"],
            }
         },
        },
        medium: {variables: ["Wort1", "Wort2"], variablesOnlyBlocks: ['set', 'get'],},
        hard: {variables: ["Wort1", "Wort2", "Wort3"], variablesOnlyBlocks: ['set', 'get'],},
      },
      //showIfMutator: true,
      blocklyColourTheme: "bwinf",
      maxInstructions: {easy:15, medium:20, hard:25},
      checkEndEveryTurn: false,
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
            if (context.nbMoves > 1000) {
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
           input: "Algorithmus\n",
           output: "davor\n",
       }, {
           input: "Rechenschieber\n",
           output: "danach\n",
       },{
           input: "Programmiersprache\n",
           output: "danach\n",
       },{
           input: "Bildverarbeitung\n",
           output: "davor\n",
       },{
           input: "Information\n",
           output: "danach\n",
       },{
           input: "Infixnotation\n",
           output: "davor\n",
       },
       ],

       medium: [
       {
           input: "Karussell\nAchterbahn\n",
           output: "Achterbahn\nKarussell\n",
       },{
           input: "Toast\nTests\n",
           output: "Tests\nToast\n",
       },{
           input: "Achterbahn\nKarussell\n",
           output: "Achterbahn\nKarussell\n",
       },{
           input: "Tests\nToast\n",
           output: "Tests\nToast\n",
       },{
           input: "Zzzy\nZzzz\n",
           output: "Zzzy\nZzzz\n",
       },{
           input: "Zzzz\nZzzy\n",
           output: "Zzzy\nZzzz\n",
       },{
           input: "Aaab\nAaaa\n",
           output: "Aaaa\nAaab\n",
       },{
           input: "Aaaa\nAaab\n",
           output: "Aaaa\nAaab\n",
       },

    ],
         hard: [
         {
             input: "Guave\nFeige\nErdbeere\nDattel\nCitrus\nBirne\nApfel\n",
             output: "Feige\nErdbeere\nDattel\nCitrus\nBirne\nApfel\nGuave\n",
         },{
             input: "Guave\nApfel\nBirne\nCitrus\nDattel\nErdbeere\nFeige\n",
             output: "Apfel\nBirne\nCitrus\nDattel\nErdbeere\nFeige\nGuave\n",
         },{
             input: "Apfel\nBirne\nCitrus\nDattel\nErdbeere\nFeige\nGuave\n",
             output: "Apfel\nBirne\nCitrus\nDattel\nErdbeere\nFeige\nGuave\n",
         },{
             input: "Citrus\nApfel\nBirne\nFeige\nGuave\nErdbeere\nDattel\n",
             output: "Apfel\nBirne\nCitrus\nFeige\nErdbeere\nDattel\nGuave\n",
         },

      ],
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
