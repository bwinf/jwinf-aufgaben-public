function initTask(subTask) {
  subTask.gridInfos = {
    timeoutMinutes: 60, // Nach 60 Minuten warnen
    hideSaveOrLoad: false,
    actionDelay: 200,
    includeBlocks: {
      groupByCategory: true,
      generatedBlocks: {
        printer: {
          basic:  [],
          easy:   ["eof"],
          medium: ["eof"],
          hard:   ["eof"],
          shared: ["print", "read"],
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: ["variables", "functions"],

        singleBlocks: { 
          basic:  [], //shared reichen aus...
          easy:   ["lists_setIndex"],
          medium: ["lists_setIndex", "controls_forEach"],
          hard:   ["lists_setIndex", "controls_forEach"],
          shared: ["lists_split", "text_length", "text_charAt_noShadow", "lists_create_with_empty", "controls_untilWhile", "controls_if", "logic_compare", "logic_operation", "math_number", "controls_for", "math_arithmetic", "text", "lists_getIndex", "lists_length"]
        },
      },
      variables: {
        shared: ["karte", "anzahlSchaetze"]
      },
      variablesOnlyBlocks: ['set', 'get', 'incr'],
    },
    maxInstructions: {
      basic: 100,
      easy: 150,
      medium: 200,
      hard: 200,
    },
    checkEndEveryTurn: false,
    showIfMutator: true,
    blocklyColourTheme: "bwinf",
    checkEndCondition: function(context, lastTurn) {
      if (!lastTurn) return;

      // throws, if something is wrong …
      context.checkOutputHelper();

      // Seems like everything is okay: Right number of lines and all lines match …
      context.success = true;
      throw (window.languageStrings.messages.outputCorrect);
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
    },
  };

  subTask.data = {
    basic: [{
      input: " ? B? B  ?  \n", 
      output: "1\n",
    }, 
    {
      input: " B?B ?B? ? B B? \n", 
      output: "4\n",
    }, 
    {
      input: " ? ? ? ? BBB ? \n", 
      output: "0\n",
    },
    {
      input: " ?B??B??B? ?B \n", 
      output: "7\n",
    }],
    easy: [{
      input: " BB   B\n  ? ??B\nB  B   \n",
      output: "2\n",
    },
    {
      input: " BB   B B   \nB ? ? ?B? ? \nB  B  B  B  \n",
      output: "3\n",
    },
    {
      input: "BB    BB\nB ???? B\nBB    BB\n\n",
      output: "0\n",
    },
    {
      input: "B BBB  B B\nB? ?? ?B? \nB B BB B B\n",
      output: "5\n",
    }],
    medium: [{
      input: "  B   B \n   ? ?  \n  ?  B  \n B   ?  \n ??  ?  \n ?? ?BB \n ??B    \nB      B\n",
      output: "6\n",
    }, 
    {
      input: "  BB    \nB    B  \n B ?? B \n B  ??  \n  ???  B\nB  ?  B \n B  B   \n    BB  \n",
      output: "0\n",
    }, 
    {
      input: "     B  \n   B??? \n  ??  B \n ?   ?  \n  ??B   \n BB  ?  \n   B?   \n      B \n",
      output: "7\n",
    }, 
    {
      input: " B BB   \n  ?  B  \nB ? ?B  \n B   B  \nB  ?? BB\n BB  ?  \n ? ?  B \n   BBB  \n",
      output: "3\n",
    }],
    hard: [{
      input: "B?    ? \n B ?    \nBB  ??B \n    ?B  \nB B  ? B\n  ?   B \n   BB? ?\n B    BB\n",
      output: "7\n",
    },
    {
      input: "B     B \n ?     B\nB    B? \n  B  B  \n     B  \n?      B\n    B   \nB?  BBB \n",
      output: "2\n",
    },
    {
      input: "?B? BB? \n    B BB\n  BB  BB\n B    BB\nB      B\n    B   \n?   B  B\n B ?    \n",
      output: "3\n",
    },
    {
      input: " B   B  \n  B ?   \nBBB  ? B\n   B ? B\n? B ? B \n  B  ? B\n ?  B   \n  ?? B ?\n",
      output: "0\n",
    }]
  },

    initBlocklySubTask(subTask);
}

initWrapper(initTask, ["basic", "easy", "medium", "hard"], null);
