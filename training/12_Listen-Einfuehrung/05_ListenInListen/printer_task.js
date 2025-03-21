function initTask(subTask) {
  subTask.gridInfos = {
    timeoutMinutes: 15, // Nach 15 Minuten warnen
    hideSaveOrLoad: false,
    actionDelay: 200,
    includeBlocks: {
      groupByCategory: {
        easy: false,
        medium: false,
        hard: true
      },
      generatedBlocks: {
        printer: {
          easy: ["print", "read" ],
          medium: ["print", "read"],
          hard: ["print", "read"],
          shared: [],
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: {
          easy: [],
          medium: [],
          hard: ["variables"]
        },

        singleBlocks: {
          basic: [],
          easy: ["lists_split", "lists_getIndex"],
          medium: ["lists_split", "lists_setIndex", "lists_repeat", "lists_getIndex", "controls_forEach", "math_number", "math_arithmetic", "controls_for", "lists_length", "text_join", "text"],
          hard: ["lists_split", "lists_setIndex", "lists_getIndex", "controls_forEach", "math_number", "math_arithmetic", "lists_create_with_empty", "controls_for", "lists_length", "text_join", "text"],
          shared: [],
        },
      },
      variables: {
        basic: [],
        easy: ["Liste"],
        medium: ["Liste", "Ergebnisliste", "i"],
        hard: ["Liste", "Ergebnisliste", "i"]
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
          input: "164978455261975486236485\n",
          output: "1,6,4,9,7,8,4,5,5,2,6,1,9,7,5,4,8,6,2,3,6,4,8,5\n1\n5\n",
        },
        {
          input: "9457623156977774856326489754612321478964\n",
          output: "9,4,5,7,6,2,3,1,5,6,9,7,7,7,7,4,8,5,6,3,2,6,4,8,9,7,5,4,6,1,2,3,2,1,4,7,8,9,6,4\n9\n4\n",
        },
        {
          input: "555497894444444654478944444\n",
          output: "5,5,5,4,9,7,8,9,4,4,4,4,4,4,4,6,5,4,4,7,8,9,4,4,4,4,4\n5\n4\n",
        },
      ],
      medium: [{
        input: "164978455261975486236485\n",
        output: "1 2\n2 2\n3 1\n4 4\n5 4\n6 4\n7 2\n8 3\n9 2\n",
      },
      {
        input: "9457623156977774856326489754612321478964\n",
        output: "1 3\n2 4\n3 3\n4 6\n5 4\n6 6\n7 7\n8 3\n9 4\n",
      },
      {
        input: "555497894444444654478944444\n",
        output: "1 0\n2 0\n3 0\n4 15\n5 4\n6 1\n7 2\n8 2\n9 3\n",
      },
      ],
      hard: [{
        input: "164978455261975486236485\n",
        output: "1 1,12\n2 10,19\n3 20\n4 3,7,16,22\n5 8,9,15,24\n6 2,11,18,21\n7 5,14\n8 6,17,23\n9 4,13\n",
      },
      {
        input: "9457623156977774856326489754612321478964\n",
        output: "1 8,30,34\n2 6,21,31,33\n3 7,20,32\n4 2,16,23,28,35,40\n5 3,9,18,27\n6 5,10,19,22,29,39\n7 4,12,13,14,15,26,36\n8 17,24,37\n9 1,11,25,38\n",
      },
      {
        input: "555497894444444654478944444\n",
        output: "1 \n2 \n3 \n4 4,9,10,11,12,13,14,15,18,19,23,24,25,26,27\n5 1,2,3,17\n6 16\n7 6,20\n8 7,21\n9 5,8,22\n",
      },
      ]
    },

    initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
