function initTask(subTask) {
  subTask.gridInfos = {
    hideSaveOrLoad: true,
    conceptViewer: false,
    actionDelay: 200,
    timeoutMinutes: 10, // Nach 10 Minuten warnen
  //   languageStrings: {
  //     blocklyPrinter_lib: {
  //       label: {
  //           "print": "drop fish",
  //           "withdrawObject": "withdraw fish",
  //           "onObject": "on fish",
  //           "onContainer": "on island"
  //       },
  //     }
  //  },
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        printer: {
          easy: ["print", "read"],
          medium: ["print", "read"],
          hard: ["print", "read", "eof"],
          shared: [],
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],

        singleBlocks: {
          easy: ["controls_if_else", "logic_compare", "text"],
          medium: ["logic_compare", "controls_if_else", "text"],
          hard: ["controls_if_else", "controls_untilWhile", "logic_compare", "text"],
          shared: [],
        },
      },
      variables: {
        easy: ["input"],
        medium: ["input"], 
        hard: ["input"],
      },
      variablesOnlyBlocks: {
        easy: ['set', 'get'],
        medium: ['set', 'get'],
        hard: ['set', 'get'],
      } 
    },
    maxInstructions: {
      easy: 10, 
      medium: 20,
      hard: 22, 
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
      easy: [{
          input: "S\n",
          output: "fitting\n",
        },
        {
          input: "XS\n",
          output: "not fitting\n",
        },
        {
          input: "M\n",
          output: "not fitting\n",
        },
        {
          input: "S\n",
          output: "fitting\n",
        },
        {
          input: "XXXL\n",
          output: "not fitting\n",
        },
      ],
      medium: [{
          input: "S\n",
          output: "too small\n",
        },
        {
          input: "L\n",
          output: "too big\n",
        },
        {
          input: "M\n",
          output: "fitting\n",
        },
      ],
      hard: [{
          input: "S\nL\nM\n",
          output: "too small\ntoo big\nfitting\n",
      },
      {
        input: "M\nM\nM\nS\n",
        output: "fitting\nfitting\nfitting\ntoo small\n",
      },
      {
        input: "L\nL\nS\nM\nL\nS\n",
        output: "too big\ntoo big\ntoo small\nfitting\ntoo big\ntoo small\n",
      }
      ]
    },

    initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
