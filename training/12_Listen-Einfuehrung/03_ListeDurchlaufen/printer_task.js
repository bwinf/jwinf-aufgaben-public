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
          easy: ["lists_create_with_empty", "lists_setIndex", "lists_length", "controls_untilWhile"],
          medium: ["text", "lists_create_with_empty", "lists_setIndex", "lists_length", "lists_getIndex", "controls_untilWhile", "controls_for", "text_join"],
          hard: ["text", "lists_create_with_empty", "lists_setIndex", "lists_length", "controls_untilWhile", "controls_forEach", "text_join"],
          shared: [],
        },
      },
      variables: {
        easy: ["Liste"],
        medium: ["Liste", "i"],
        hard: ["Liste", "i"]
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
          input: "Sonne\nSommer\nErdbeeren\nHonig\nMüsli\nSchule\nFerien\n",
          output: "7\n",
        },
        {
          input: "Informatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\n",
          output: "34\n",
        },
        {
          input: "Prozent\nSommer\nErdbeeren\nHonig\nMüsli\nSchule\nFerien\nJahre\nMonate\nJahreszeiten\nRegen\nWinter\nFrühling\n",
          output: "13\n",
        },
      ],
      medium: [{
          input: "Sonne\nSommer\nErdbeeren\nHonig\nMüsli\nSchule\nFerien\n",
          output: "Sonne- erledigt\nSommer- erledigt\nErdbeeren- erledigt\nHonig- erledigt\nMüsli- erledigt\nSchule- erledigt\nFerien- erledigt\n",
        },
        {
          input: "Informatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\n",
          output: "Informatik- erledigt\nInformatik- erledigt\nInformatik- erledigt\nInformatik- erledigt\nInformatik- erledigt\nInformatik- erledigt\nInformatik- erledigt\nInformatik- erledigt\nInformatik- erledigt\n",
        },
        {
          input: "Prozent\nSommer\nErdbeeren\nHonig\nMüsli\nSchule\nFerien\nJahre\nMonate\nJahreszeiten\nRegen\nWinter\nFrühling\n",
          output: "Prozent- erledigt\nSommer- erledigt\nErdbeeren- erledigt\nHonig- erledigt\nMüsli- erledigt\nSchule- erledigt\nFerien- erledigt\nJahre- erledigt\nMonate- erledigt\nJahreszeiten- erledigt\nRegen- erledigt\nWinter- erledigt\nFrühling- erledigt\n",
        },
      ],
      hard: [{
          input: "Sonne\nSommer\nErdbeeren\nHonig\nMüsli\nSchule\nFerien\n",
          output: "Sonne- erledigt\nSommer- erledigt\nErdbeeren- erledigt\nHonig- erledigt\nMüsli- erledigt\nSchule- erledigt\nFerien- erledigt\n",
        },
        {
          input: "Informatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\nInformatik\n",
          output: "Informatik- erledigt\nInformatik- erledigt\nInformatik- erledigt\nInformatik- erledigt\nInformatik- erledigt\nInformatik- erledigt\nInformatik- erledigt\nInformatik- erledigt\nInformatik- erledigt\n",
        },
        {
          input: "Prozent\nSommer\nErdbeeren\nHonig\nMüsli\nSchule\nFerien\nJahre\nMonate\nJahreszeiten\nRegen\nWinter\nFrühling\n",
          output: "Prozent- erledigt\nSommer- erledigt\nErdbeeren- erledigt\nHonig- erledigt\nMüsli- erledigt\nSchule- erledigt\nFerien- erledigt\nJahre- erledigt\nMonate- erledigt\nJahreszeiten- erledigt\nRegen- erledigt\nWinter- erledigt\nFrühling- erledigt\n",
        },
      ],
    },

    initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
