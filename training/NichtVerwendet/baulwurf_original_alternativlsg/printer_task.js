function initTask(subTask) {
  subTask.gridInfos = {
    context: "printer",
    timeoutMinutes: 60, // Nach 60 Minuten warnen
    hideSaveOrLoad: false,
    actionDelay: 200,
    includeBlocks: {
      groupByCategory: true,
      generatedBlocks: {
        printer: {
          basic: [],
          easy: [],
          medium: ["readInteger"],
          hard: ["readInteger"],
          shared: ["print", "read", "eof"],
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: ["variables"],

        singleBlocks: {
          basic: [],
          easy: ["math_number", "math_arithmetic", "controls_if", "lists_getIndex", "logic_compare", "text", "logic_operation", "lists_length"],
          medium: ["math_number", "math_arithmetic", "controls_if", "lists_setIndex", "lists_getIndex", "lists_length", "controls_forEach", "text", "logic_compare", "logic_operation", "controls_forEach", "lists_repeat", "controls_for"],
          hard: ["text", "lists_setIndex", "lists_length", "controls_forEach", "controls_if", "lists_getIndex", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "controls_forEach", "lists_repeat", "controls_for"],
          shared: ["logic_boolean", "procedures_defnoreturn", "procedures_defreturn", "lists_create_with_empty", "controls_untilWhile", "controls_repeat_ext", "text", "text_length", "text_charAt", "lists_setIndex_insert_last", "lists_split"],
        },
      },
      variables: {
        basic: ["karteBreite", "karteHoehe", "karte"],
        easy: ["karte"],
        medium: ["karteBreite", "karteHoehe", "karte", "anzahlMaulwuerfe"],
        hard: ["karteBreite", "karteHoehe", "karte", "anzahlBaulwurfsbaue"]
      },
      variablesOnlyBlocks: ['set', 'get', 'incr'],
    },
    maxInstructions: {
      basic: 50,
      easy: 200,
      medium: 300,
      hard: 400,
    },
    checkEndEveryTurn: false,
    showIfMutator: true,
    blocklyColourTheme: "bwinf",

    //eigene End-Condition mit mehreren Lösungsalternativen für basic - scheint zu funktionieren...
    checkEndCondition: function (context, lastTurn) {
      if (!lastTurn) return;

      if (subTask.level != "basic") { //normale Funktion für easy, medium, hard  
        // throws, if something is wrong …
        context.checkOutputHelper();

        // Seems like everything is okay: Right number of lines and all lines match …
        context.success = true;
        throw (window.languageStrings.messages.outputCorrect);
      }

      if (subTask.level == "basic") { //eigene End-Condition für 0. Level (mehrere Antwortmöglichkeiten erlaubt)
        var expectedLinesList = context.taskInfos.output;
        var actualLines = context.printer.output_text.replace(/\s*$/, "").split("\n");
        var errorstring = "";

        for (const option of expectedLinesList) {
          var expectedLines = option.replace(/\s*$/, "").split("\n");
          var matches = true;
          var iLine = 0;

          for (iLine = 0; iLine < expectedLines.length && iLine < actualLines.length; iLine++) {
            var expectedLine = expectedLines[iLine].replace(/\s*$/, "");
            var actualLine = actualLines[iLine].replace(/\s*$/, "");
            var iChar = 0;

            for (iChar = 0; iChar < expectedLine.length && iChar < actualLine.length; iChar++) {
              if (matches && actualLine[iChar] != expectedLine[iChar]) {
                matches = false;
                errorstring = ( //TODO: -> wie komme ich an die Strings aus blocklyPrinter_lib-2.1.js? dann ginge das hier eleganter...
                  "Das Programm hat nicht alle Zeilen richtig ausgegeben.; in Zeile " //strings.errorStr.intro
                  + (iLine + 1)
                  + ":<br>Erwartet: \"<b>" //strings.errorStr.expected
                  + escapeHtml(expectedLine)
                  + "</b>\",<br>deine Ausgabe: \"<b>" //strings.errorStr.answer
                  + escapeHtml(actualLine)
                  + "</b>\".<br>(Erstes falsches Zeichen in Spalte " //strings.errorStr.introChar
                  + (iChar + 1)
                  + "; erwartet: \"<b>" //strings.errorStr.expectedChar
                  + escapeHtml(expectedLine[iChar])
                  + "</b>\", deine Ausgabe: \"<b>" //strings.errorStr.answerChar
                  + escapeHtml(actualLine[iChar]) + '</b>"');
              }
            }

            if (matches && actualLine.length < expectedLine.length) {
              matches = false;
              errorstring = strings.messages.tooFewChars.format(iLine + 1);
            }
            if (matches && actualLine.length > expectedLine.length) {
              matches = false;
              errorstring = strings.messages.tooManyChars.format(iLine + 1);
            }
          }

          if (matches && actualLines.length < expectedLines.length) {
            matches = false;
            errorstring = strings.messages.tooFewLines;
          }
          if (matches && actualLines.length > expectedLines.length) {
            matches = false;
            errorstring = strings.messages.tooManyLines;
          }

          if (matches) { //eine korrekte output-Option wurde ausgegeben
            context.success = true;
            throw (window.languageStrings.messages.outputCorrect);
          }

        }
        //keine output-Option hat zur Ausgabe gepasst
        context.success = false;
        throw (errorstring);
      }
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
      input: "3\n3\n   \n X \n   \n",
      output: "normaler Maulwurf\n",
    },
    {
      input: "3\n3\n  X\n X \n   \n",
      output: "kein Maulwurf\n",
    },
    {
      input: "3\n3\n   \nXX \n   \n",
      output: "kein Maulwurf\n",
    },
    {
      input: "3\n3\n   \n   \n   \n",
      output: "kein Maulwurf\n",
    },
    {
      input: "3\n3\n   \n X \n X \n",
      output: "kein Maulwurf\n",
    }],
    medium:
      [{
        input: "25\n6\nXXX               X      \nX X   X    XXX        X  \nX X        X X XXX       \nXXX        X X X X      X\n     X     XXX X X       \n               XXX       \n",
        output: "5\n",
      },
      {
        input: "10\n6\nXXX  X    \nX X    XXX\nX X    X X\nXXX X  X X\n       XXX\n X   X    \n",
        output: "4\n",
      },
      {
        input: "27\n9\n   XXX  X       X          \nX  X X      XXX      X   X \n   X X   X  X X  X         \n X XXX      X X        XXX \n        X   XXX    X   X X \n    XXX                X X \n X  X X    X      X    XXX \n    X X       X            \nX   XXX  X         X      X\n",
        output: "18\n",
      },
      {
        input: "12\n5\n    X       \nX       X   \n  X       X \n       X    \n  X  X      \n",
        output: "8\n",
      }],
    hard: [{
      input: "7\n10\n XXX   \n X X   \n X XXXX\n XXXX X\nXXX X X\nX X XXX\nX XXXX \nXXXX X \n   X X \n   XXX \n",
      output: "4\n",
    },
    {
      input: "24\n6\nXXX              X      \nX X   X    XXX       X  \nX X        X XXXX       \nXXX        X XX X      X\n     X     XXXX X       \n              XXX       \n",
      output: "3\n",
    },
    {
      input: "14\n20\n XXX      XXX \n X X      X X \n X XXXXXXXX X \n XXXX XX XXXX \nXXX X XX X XXX\nX X XXXXXX X X\nX XXXX  XXXX X\nXXXX X  X XXXX\n   X X  X X   \n   XXX  XXX   \n   XXX  XXX   \n   X X  X X   \nXXXX X  X XXXX\nX XXXX  XXXX X\nX X XXXXXX X X\nXXX X XX X XXX\n XXXX XX XXXX \n X XXXXXXXX X \n X X      X X \n XXX      XXX \n",
      output: "16\n",
    },
    {
      input: "12\n5\n    X       \nX       X   \n  X       X \n       X    \n  X  X      \n",
      output: "0\n",
    },
    {
      input: "16\n9\n  XXX         X \n  X X    XXX    \n  X X  X X X X  \nX XXX    X X    \n         XXX  X \n   XXX          \nX  X X  X      X\n   X X     X    \n   XXX X      X \n",
      output: "3\n",
    }]
  },

    initBlocklySubTask(subTask);
}

window.initBlocklySubTask = function () { };
window.taskData = window.taskData || {};
window.taskData.waitInit = function () {
  initTask(window.taskData);
  function ccTask() { try { return window.Codecast.environments.main.store.getState().task; } catch (e) { return null; } }
  try { Object.defineProperty(window.taskData, "level", { configurable: true, get: function () { var t = ccTask(); return t ? t.currentLevel : undefined; }, set: function () { } }); Object.defineProperty(window.taskData, "iTestCase", { configurable: true, get: function () { var t = ccTask(); return (t && t.currentTestId != null) ? t.currentTestId : 0; }, set: function () { } }); } catch (e) { }
};
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

