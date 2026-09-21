function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            printer: {
               easy: ["print", "read", "convToInt"],
               medium: ["print", "read", "convToInt", "convToString"],
               hard: ["print", "read", "convToInt"],
            },
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               easy: ["text_charAt", "math_arithmetic", "controls_for", "text_length", "math_number"],
               medium: ["logic_compare", "text_charAt", "math_arithmetic", "controls_for", "text_length", "math_number", "controls_whileUntil"],
               hard: ["math_number_property","controls_if_else","text_charAt", "math_arithmetic", "controls_for", "text_length", "math_number"]
            },
         },
         variables: ["Zahl", "Quersumme", "i"],
         // variablesOnlyBlocks: ['get', 'set'],
      },
      maxInstructions: {
         easy: 22,
         medium: 30,
         hard: 50
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
            input: "456\n",
            output: "15\n",
         },
         {
            input: "23004\n",
            output: "9\n",
         },
         {
            input: "123456789\n",
            output: "45\n",
         },
         {
            input: "99858\n",
            output: "39\n",
         },
      ],
      medium: [{
            input: "63257\n",
            output: "5\n",
         },
         {
            input: "37\n",
            output: "1\n",
         },
         {
            input: "36\n",
            output: "9\n",
         },
      ],
      hard: [{
            input: "7894265\n",
            output: "9\n",
         },
         {
            input: "239476827\n",
            output: "-14\n",
         },
         {
            input: "764258\n",
            output: "14\n",
         },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);