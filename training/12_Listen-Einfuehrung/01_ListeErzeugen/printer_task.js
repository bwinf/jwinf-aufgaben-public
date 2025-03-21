function initTask(subTask) {
  subTask.gridInfos = {
    timeoutMinutes: 15, // Nach 15 Minuten warnen
    hideSaveOrLoad: true,
    actionDelay: 200,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        printer: {
          easy: ["print"],
          medium: ["print"],
          hard: ["print", "read", "eof"],
          shared: [],
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],

        singleBlocks: {
          easy: ["lists_create_with", "math_number"],
          medium: ["lists_repeat", "text"],
          hard: ["lists_create_with_empty", "lists_setIndex", "controls_untilWhile"],
          shared: [],
        },
      },
      variables: {
        medium: ["farben"],
        hard: ["farben"]
      },
      variablesOnlyBlocks: ['set', 'get'],
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
          input: "",
          output: "4,8,3",
        },
      ],
      medium: [{
          input: "",
          output: "rot,rot,rot,rot,rot",
        },
      ],
      hard: [{
          input: "rot\nblau\ngelb\ngrün\norange\n",
          output: "rot,blau,gelb,grün,orange",
        },
      ],
    },

    initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
