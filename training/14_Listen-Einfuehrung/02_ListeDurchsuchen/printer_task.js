function initTask(subTask) {
  subTask.gridInfos = {
    context: "printer",
    conceptViewer: true,
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
          shared: ["logic_negate"],
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
      pythonAdditionalFunctions: {
        shared: ["append", "index"],
        medium: ["remove"],
        hard: ["remove"]
      }
    },
    maxInstructions: {
      easy: 40,
      medium: 60,
      hard: 60,
    },
    checkEndEveryTurn: false,
    showIfMutator: true,
    blocklyColourTheme: "bwinf",



    checkEndCondition: function (context, lastTurn) {
      if (!lastTurn) return;

      // console.log(lastTurn);
      // console.log(context);
      // throws, if something is wrong …
      if (context.blocklyHelper.language == "python") {
        checkOutputPython(context);
      }
      else context.checkOutputHelper();
      // console.log("TEST");
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
      output: "[ich, programmiere, gerne]",
    },
    {
      input: "nicht\nso\nviel\nschreiben\n",
      output: "[so, viel, schreiben]",
    },
    ],
    hard: [{
      input: "ich\nprogrammiere\nnicht\ngerne\n",
      output: "[ich, programmiere, gerne, nicht, 3]",
    },
    {
      input: "nicht\nso\nviel\nschreiben\n",
      output: "[so, viel, schreiben, nicht, 1]",
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
  jwinfMenu: { copyPaste: true, undoRedo: true, svgExport: true },
  showExpectedOutput: true,
  canAddUserTests: true
};
window.taskData.codecastParameters.showStack = true;
window.taskData.codecastParameters.showExpectedOutput = true;
window.taskData.codecastParameters.canAddUserTests = true;


checkOutputPython = function (context) {
  var expectedLines = context.taskInfos.output.replace(/\s*$/, "").split("\n");
  var actualLines = context.printer.output_text.replace(/\s*$/, "").split("\n");

  var iLine = 0;

  for (iLine = 0; iLine < expectedLines.length && iLine < actualLines.length; iLine++) {
    var expectedLine = expectedLines[iLine].replace(/\s*$/, "");
    var actualLine = actualLines[iLine].replace(/\s*$/, "");

    var iChar = 0;
    for (iChar = 0; iChar < expectedLine.length && iChar < actualLine.length; iChar++) {
      if (actualLine[iChar] != expectedLine[iChar] &&
        !(actualLine[iChar] >= '0' && actualLine[iChar] <= '9' && expectedLine[iChar] >= '0' && expectedLine[iChar] <= '9' && parseInt(actualLine[iChar]) + 1 == parseInt(expectedLine[iChar]))) { //python Index
        context.success = false;
        var errorstring = "Das Programm hat nicht alle Zeilen richtig ausgegeben.; in Zeile " +
          (iLine + 1) + ":<br>Erwartet: \"<b>" +
          escapeHtml(expectedLine) + "</b>\",<br>deine Ausgabe: \"<b>" +
          escapeHtml(actualLine) + "</b>\".<br>(Erstes falsches Zeichen in Spalte " +
          (iChar + 1) + "; erwartet: \"<b>" +
          escapeHtml(expectedLine[iChar]) + "</b>\", deine Ausgabe: \"<b>" +
          escapeHtml(actualLine[iChar]) + "</b>\".)"
        throw (errorstring); // add line info iLine + 1, add char info iChar + 1
      }
    }
    if (actualLine.length < expectedLine.length) {
      context.success = false;
      throw (strings.messages.tooFewChars + (iLine + 1)); // add line info iLine + 1
    }

    if (actualLine.length > expectedLine.length) {
      context.success = false;
      throw (strings.messages.tooManyChars + (iLine + 1)); // add line info iLine + 1
    }
  }

  if (actualLines.length < expectedLines.length) {
    context.success = false;
    throw (strings.messages.tooFewLines);
  }

  if (actualLines.length > expectedLines.length) {
    context.success = false;
    throw (strings.messages.tooManyLines);
  }
}

