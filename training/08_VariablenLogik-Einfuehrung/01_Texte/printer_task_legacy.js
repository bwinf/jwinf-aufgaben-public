function initTask(subTask) {
  subTask.gridInfos = {
    hideSaveOrLoad: true,
    conceptViewer: false,
    actionDelay: 200,
    timeoutMinutes: 10, // Nach 10 Minuten warnen
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        printer: {
          easy: ["print", "read"],
          medium: ["print", "read"],
          hard: ["print", "read"],
          shared: [],
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],

        singleBlocks: {
          easy: ["text_charAt"],
          medium: ["logic_compare", "controls_if_else", "text", "text_charAt"],
          hard: ["logic_compare", "controls_if_else", "text", "text_charAt"],
          shared: [],
        },
      },
      variables: {
        easy: ["Text"],
        medium: ["Eingabe"], 
        hard: ["Eingabe"],
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
          input: "Juno liebt Informatik!\n",
          output: "!\n",
        },
        {
          input: "Informatik macht Spaß.\n",
          output: ".\n",
        },
        {
          input: "Findest du nicht auch?\n",
          output: "?\n",
        }],
      medium: [{
          input: "Informatik!\n",
          output: "keine Frage\n",
        },
        {
          input: "Spaß.\n",
          output: "keine Frage\n",
        },
        {
          input: "auch?\n",
          output: "Frage\n",
        },
      ],
      hard: [{
          input: "Juno \n",
          output: "Mitte\n",
      },
      {
        input: "auch?\n",
        output: "Frage\n",
      },
      {
        input: "Spaß.\n",
        output: "keine Frage\n",
      }
      ]
    },

    initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
