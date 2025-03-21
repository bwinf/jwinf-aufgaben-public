function initTask(subTask) {
  subTask.gridInfos = {
    hideSaveOrLoad: true,
    actionDelay: 200,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        printer: {
          easy: ["print", "read"],
          medium: ["print", "read"],
          hard: ["print", "read", "eof"],
        }
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: {
          easy: ["text_charAt_noShadow"],
          medium: ["text_charAt_noShadow", "math_number"],
          hard: ["text_charAt_noShadow", "controls_untilWhile"],
        },
      },
      variables: {
        easy: [],
        medium: [],
        hard: []
      },
      variablesOnlyBlocks: ['set', 'get'],
    },
    maxInstructions: {
      easy: 20,
      medium: 20,
      hard: 20
    },
    checkEndEveryTurn: false,
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
    easy: [{
        input: "Jugendwettbewerb\n",
        output: "J\n",
      },
      {
        input: "Programmieren macht Spaß!\n",
        output: "P\n",
      },
      {
        input: "Ich mag Informatik!\n",
        output: "I\n",
      },
    ],
    medium: [{
        input: "Jugendwettbewerb\n",
        output: "w\n",
      },
      {
        input: "Programmieren macht Spaß!\n",
        output: "p\n",
      },
      {
        input: "Ich mag Informatik!\n",
        output: "t\n",
      },
    ],
    hard: [{
        input: "Bett\nSonne\nKuchen\nErdbeere\n",
        output: "B\ne\nK\ne\n",
      },
      {
        input: "Lachs\nBüro\nBein\ndein\nTomate\nOrangen\nSommer\nHimbeere\nMelone\nHonig\n",
        output: "L\no\nB\nn\nT\nn\nS\ne\nM\ng\n",
      },
    ],
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
