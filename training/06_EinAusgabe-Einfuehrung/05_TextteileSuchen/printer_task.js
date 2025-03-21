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
          easy: ["text_indexOf"],
          medium: ["text_indexOf"],
          hard: ["text_indexOf", "controls_untilWhile"],
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
      hard: 40
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
      output: "7\n",
    }, ],
    medium: [{
      input: "Jugendwettbewerb\n",
      output: "13\n",
    }, ],
    hard: [{
        input: "Jugendwettbewerb\nJugendwettbewerb\nInformatikwettbewerb\nInformatikwettbewerb\nBundeswettbewerb\nBundeswettbewerb\n",
        output: "4\n14\n12\n18\n5\n14\n",
      },
      {
        input: "Tomate\nBirne\nHimbeere\nErdbeere\nHonig\nBanane\n",
        output: "6\n5\n5\n8\n0\n6\n",
      },
    ],
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
