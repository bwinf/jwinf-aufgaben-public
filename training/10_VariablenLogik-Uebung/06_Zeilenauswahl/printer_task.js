function initTask(subTask) {
  subTask.gridInfos = {
    context: "printer",
    timeoutMinutes: 15, // Nach 15 Minuten warnen
    hideSaveOrLoad: true,
    actionDelay: 200,
    conceptViewer: true,
    includeBlocks: {
      groupByCategory: {
        easy: false,
        medium: false,
        hard: false,
      },
      generatedBlocks: {
        printer: {
          easy: ["print", "read", "readInteger"],
          medium: ["print", "read", "readInteger", "eof"],
          hard: ["print", "read", "readInteger", "eof"],
          shared: [],
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: {
          easy: [],
          medium: [],
          hard: []
        },

        singleBlocks: {
          shared: ["controls_repeat_ext"],
          easy: [],
          medium: ["math_number", "controls_untilWhile", "logic_compare", "math_arithmetic", "controls_if"],
          hard: ["math_number", "controls_untilWhile", "logic_compare", "logic_operation", "math_arithmetic", "controls_if"],
        },
      },
      variables: {
        easy: ["Anzahl Zeilen", "aktuelle Zeile"],
        medium: ["gesuchte Zeilennummer", "aktuelle Zeilennummer", "aktuelle Zeile"],
        hard: ["Anfang", "Ende", "aktuelle Zeilennummer", "aktuelle Zeile"],
      },
      variablesOnlyBlocks: {
        easy: ['set', 'get'],
        medium: ['set', 'get', 'incr'],
        hard: ['set', 'get', 'incr'],
      }
    },
    maxInstructions: {
      easy: 20,
      medium: 50,
      hard: 50,
    },
    limitedUses: [{
      blocks: ["print"],
      nbUses: 3
    },
    ],
    checkEndEveryTurn: false,
    // showIfMutator: false,
    blocklyColourTheme: "bwinf",
    checkEndCondition: function (context, lastTurn) {
      if (!lastTurn) return;

      // throws, if something is wrong …
      context.checkOutputHelper();

      // Seems like everything is okay: Right number of lines and all lines match …
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
        input: "3\nerste Zeile\nzweite Zeile\ndritte Zeile\nvierte Zeile\nfünfte Zeile\n",
        output: "erste Zeile\nzweite Zeile\ndritte Zeile\n",
      },
      {
        input: "7\nerste Zeile\nzweite Zeile\ndritte Zeile\nvierte Zeile\nfünfte Zeile\nsechste Zeile\nsiebte Zeile\nachte Zeile\nneunte Zeile\nzehnte Zeile",
        output: "erste Zeile\nzweite Zeile\ndritte Zeile\nvierte Zeile\nfünfte Zeile\nsechste Zeile\nsiebte Zeile\n",
      },
      {
        input: "5\nApfel\nBanane\nPfirsich\nKirsche\nPflaume\nBirne\nHagebutte\n",
        output: "Apfel\nBanane\nPfirsich\nKirsche\nPflaume\n",
      },
      {
        input: "5\nerste Zeile\nzweite Zeile\ndritte Zeile\nvierte Zeile\nfünfte Zeile\n",
        output: "erste Zeile\nzweite Zeile\ndritte Zeile\nvierte Zeile\nfünfte Zeile\n",
      },
      {
        input: "0\nApfel\nBanane\nPfirsich\nKirsche\nPflaume\nBirne\nHagebutte\n",
        output: "",
      },
    ],
    medium: [
      {
        input: "3\nerste Zeile\nzweite Zeile\ndritte Zeile\nvierte Zeile\nfünfte Zeile\n",
        output: "dritte Zeile\n",
      },
      {
        input: "7\nerste Zeile\nzweite Zeile\ndritte Zeile\nvierte Zeile\nfünfte Zeile\nsechste Zeile\nsiebte Zeile\nachte Zeile\nneunte Zeile\nzehnte Zeile",
        output: "siebte Zeile\n",
      },
      {
        input: "5\nApfel\nBanane\nPfirsich\nKirsche\nPflaume\nBirne\nHagebutte\n",
        output: "Pflaume\n",
      },
      {
        input: "1\nerste Zeile\nzweite Zeile\ndritte Zeile\nvierte Zeile\nfünfte Zeile\n",
        output: "erste Zeile\n",
      },
      {
        input: "5\nerste Zeile\nzweite Zeile\ndritte Zeile\nvierte Zeile\nfünfte Zeile\n",
        output: "fünfte Zeile\n",
      },
    ],
    hard: [
      {
        input: "2\n4\nerste Zeile\nzweite Zeile\ndritte Zeile\nvierte Zeile\nfünfte Zeile\n",
        output: "zweite Zeile\ndritte Zeile\nvierte Zeile\n",
      },
      {
        input: "3\n7\nerste Zeile\nzweite Zeile\ndritte Zeile\nvierte Zeile\nfünfte Zeile\nsechste Zeile\nsiebte Zeile\nachte Zeile\nneunte Zeile\nzehnte Zeile",
        output: "dritte Zeile\nvierte Zeile\nfünfte Zeile\nsechste Zeile\nsiebte Zeile\n",
      },
      {
        input: "1\n5\nApfel\nBanane\nPfirsich\nKirsche\nPflaume\nBirne\nHagebutte\n",
        output: "Apfel\nBanane\nPfirsich\nKirsche\nPflaume\n",
      },
      {
        input: "2\n2\nerste Zeile\nzweite Zeile\ndritte Zeile\nvierte Zeile\nfünfte Zeile\n",
        output: "zweite Zeile\n",
      },
      {
        input: "1\n5\nerste Zeile\nzweite Zeile\ndritte Zeile\nvierte Zeile\nfünfte Zeile\n",
        output: "erste Zeile\nzweite Zeile\ndritte Zeile\nvierte Zeile\nfünfte Zeile\n",
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
window.taskData.codecastParameters.showStack = true;
window.taskData.codecastParameters.showExpectedOutput = false;
window.taskData.codecastParameters.canAddUserTests = true;
