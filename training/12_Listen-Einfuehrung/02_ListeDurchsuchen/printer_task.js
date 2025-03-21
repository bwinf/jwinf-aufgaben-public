function initTask(subTask) {
  subTask.gridInfos = {
    timeoutMinutes: 15, // Nach 15 Minuten warnen
    hideSaveOrLoad: true,
    actionDelay: 200,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        printer: {
          easy: ["print", "read", "eof"],
          medium: ["print", "read", "eof"],
          hard: ["print", "read", "eof"],
          shared: [],
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],

        singleBlocks: {
          easy: ["lists_create_with_empty", "text", "lists_indexOf", "lists_setIndex", "controls_untilWhile"],
          medium: ["lists_create_with_empty", "text", "lists_indexOf", "lists_setIndex", "lists_getIndex", "controls_untilWhile"],
          hard: ["lists_create_with_empty", "text", "lists_indexOf", "lists_setIndex", "lists_getIndex", "controls_untilWhile"],
          shared: [],
        },
      },
      variables: {
        easy: ["Liste", "index"],
        medium: ["Liste", "index"],
        hard: ["Liste", "wort", "index"]
      },
      variablesOnlyBlocks: ['set', 'get'],
      limitedUses: [{
        blocks: ["print"],
        nbUses: 1
     },
     ],
    },
    maxInstructions: {
      easy: 40,
      medium: 60,
      hard: 60,
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
          input: "ich\nprogrammiere\nnicht\ngerne\n",
          output: "3",
        },
        {
          input: "nicht\nso\nviel\nschreiben\n",
          output: "1",
        },
      ],
      medium: [{
          input: "ich\nprogrammiere\nnicht\ngerne\n",
          output: "ich,programmiere,gerne",
        },
        {
          input: "nicht\nso\nviel\nschreiben\n",
          output: "so,viel,schreiben",
        },
      ],
      hard: [{
        input: "ich\nprogrammiere\nnicht\ngerne\n",
        output: "ich,programmiere,gerne,nicht,3",
        },
        {
          input: "nicht\nso\nviel\nschreiben\n",
          output: "so,viel,schreiben,nicht,1",
          },
      ],
    },

    initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
