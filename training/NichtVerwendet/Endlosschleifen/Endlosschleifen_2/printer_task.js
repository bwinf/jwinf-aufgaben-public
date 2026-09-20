function initTask(subTask) {
  subTask.gridInfos = {
    context: "printer",
    timeoutMinutes: 15,
    hideSaveOrLoad: true,
    actionDelay: 200,

    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        printer: {
          shared: ["print", "eof", "readInteger"]
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],

        singleBlocks: {
          shared: ["controls_infiniteloop", "controls_flow_statements", "controls_if", "math_number"],
          easy: [],
          medium: ["logic_compare", "math_arithmetic", "math_number_property_noShadow"],
          hard: ["logic_compare", "math_arithmetic", "text"]
        },
      },
      variables: {
        easy: ["ergebnis"],
        medium: ["ergebnis", "zahl"],
        hard: ["ergebnis", "zahl", "rechenart"]
      },
      variablesOnlyBlocks: ['incr', 'get', 'set'],
    },
    maxInstructions: {
      easy: 15,
      medium: 40,
      hard: 60,
    },

    checkEndEveryTurn: false,

    showIfMutator: true,

    blocklyColourTheme: "bwinf",

    checkEndCondition: function (context, lastTurn) {
      if (!lastTurn) return;

      context.checkOutputHelper();

      context.success = true;
      throw (window.languageStrings.messages.outputCorrect);
    },
    computeGrade: function (context, message) {
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
    easy: [
      {
        input: "1\n2\n3\n4\n5\n6\n7\n8\n9\n",
        output: "45",
      },

      {
        input: "3\n4\n9\n7\n6\n2\n",
        output: "31",
      },
    ],
    medium: [{
      input: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1\n",
      output: "5",
    },
    {
      input: "18\n11\n4\n6\n0\n15\n1\n8\n",
      output: "9",
    },
    ],
    hard: [{
      input: "1\n2\n3\n0\n4\n0\n5\n6\n7\n0\n8\n9\n",
      output: "3",
    }, {
      input: "2\n3\n5\n0\n7\n1\n0\n2\n2\n3\n1\n0\n5\n",
      output: "5",
    }, {
      input: "19\n23\n0\n6\n11\n4\n0\n3\n13\n7\n0\n18\n9\n3\n0\n15\n0\n27\n",
      output: "2",
    }, {
      input: "1\n12\n0\n8\n4\n0\n15\n6\n0\n13\n8\n0\n7\n",
      output: "8",
    },
    ],
  },

    initBlocklySubTask(subTask);
}

window.initBlocklySubTask = function () { };
window.taskData = window.taskData || {};
window.taskData.waitInit = function () { initTask(window.taskData); };
window.taskData.codecastParameters = window.taskData.codecastParameters || {
  language: "de-DE",
  platform: "blockly",
  canChangePlatform: false,
  showStepper: true,
  showStack: true,
  showViews: true,
  showIO: true,
  controls: { reload: false },
  hideSettings: true,
  jwinfMenu: { copyPaste: true, undoRedo: true, svgExport: true }
};

