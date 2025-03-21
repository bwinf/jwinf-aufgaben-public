function initTask(subTask) {
  subTask.gridInfos = {
    hideSaveOrLoad: true,
    actionDelay: 200,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        printer: {
          easy: ["print", "read", "eof"],
          medium: ["print", "read"],
          hard: ["print", "read", "eof"],
        }
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: {
          easy: ["text_getSubstring", "math_number", "controls_untilWhile"],
          medium: ["text_indexOf", "text_getSubstring", "math_arithmetic"],
          hard: ["text_charAt", "text_join", "controls_untilWhile", "text_changeCase", "text"],
        },
      },
      variables: {
        easy: [],
        medium: ["Text", "Position"],
        hard: ["Text"]
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
        input: "gelb\ngrün\nblau\nrot\npink\n",
        output: "gel\ngrü\nbla\nrot\npin\n",
      },
      {
        input: "Lachs\nBüro\nBein\ndein\nTomate\n",
        output: "Lac\nBür\nBei\ndei\nTom\n",
      },
    ],
    medium: [{
        input: "Jugendwettbewerb\n",
        output: "Jugend\nbewerb\n",
      },
      {
        input: "Informatikwettbewerb\n",
        output: "Informatik\nbewerb\n",
      },
      {
        input: "Bundeswettbewerb\n",
        output: "Bundes\nbewerb\n",
      }
    ],
    hard: [{
        input: "Bett\nTimo\nTyp\n",
        output: "Top\n",
      },
      {
        input: "Lachs\nBüro\nBein\ndein\nTomate\n",
        output: "Sonne\n",
      },
    ],
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
