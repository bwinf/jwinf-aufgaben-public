function initTask(subTask) {
  subTask.gridInfos = {
    timeoutMinutes: 15, // Nach 15 Minuten warnen
    hideSaveOrLoad: true,
    actionDelay: 200,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        printer: {
          easy: ["print", "read"],
          medium: ["print", "read", "eof"],
          hard: ["print", "read"],
          shared: [],
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],

        singleBlocks: {
          easy: ["lists_split"],
          medium: ["lists_create_with_empty", "lists_setIndex", "controls_untilWhile", "lists_split"],
          hard: ["text", "lists_getIndex", "lists_setIndex", "lists_create_with_empty", "lists_split"],
          shared: [],
        },
      },
      variables: {
        easy: [],
        medium: ["Liste", "Satz"],
        hard: ["Liste", "index"]
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
          input: "Ich gehe gerne schwimmen.\n",
          output: "Ich,gehe,gerne,schwimmen.\n",
        },
        {
          input: "Informatik ist toll!\n",
          output: "Informatik,ist,toll!\n",
        },
        {
          input: "Programmieren macht Spaß!\n",
          output: "Programmieren,macht,Spaß!\n",
        },
      ],
      medium: [{
          input: "Ich\nmag\nden\nSommer\n",
          output: "Ich mag den Sommer\n",
        },
        {
          input: "Informatik\nist\ntoll\n",
          output: "Informatik ist toll\n",
        },
        {
          input: "Der\nJugendwettbewerb\nmacht\nSpaß\n",
          output: "Der Jugendwettbewerb macht Spaß\n",
        },
      ],
      hard: [{
          input: "3 Ich esse gerne Eis.\n",
          output: "Ich esse super gerne Eis.\n",
        },
        {
          input: "4 Das Wetter ist gut.\n",
          output: "Das Wetter ist super gut.\n",
        },
        {
          input: "4 Die Sonne scheint toll.\n",
          output: "Die Sonne scheint super toll.\n",
        },
      ],
    },

    initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
