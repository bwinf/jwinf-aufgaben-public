function initTask(subTask) {
  subTask.gridInfos = {
    timeoutMinutes: 60, // Nach 60 Minuten warnen
    hideSaveOrLoad: false,
    actionDelay: 200,
    includeBlocks: {
      groupByCategory: true,
      generatedBlocks: {
        printer: {
          basic:  [],
          easy:   [],
          medium: [],
          hard:   [],
          shared: ["readInteger", "print", "read", "eof"],
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: ["variables"],

        singleBlocks: {
          basic:  ["lists_getIndex",  "controls_if", "logic_compare",  "logic_operation", "math_number"],
          easy:   ["logic_boolean", "math_number", "math_arithmetic", "controls_if", "lists_getIndex", "logic_compare", "text", "logic_operation",  "lists_length", ],
          medium: ["logic_boolean", "math_number", "math_arithmetic", "controls_if", "lists_setIndex", "lists_getIndex", "lists_length", "controls_forEach", "text","logic_compare", "logic_operation", "controls_flow_statements"],
          hard:   ["logic_boolean", "text", "lists_setIndex", "lists_length", "lists_create_with", "controls_forEach","controls_if", "lists_getIndex", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "text_getSubstring", "text_join", "controls_flow_statements"], //TODO: statt substring und join wäre für die Liste-aus-Texten Implementierung ein neuer Baustein text_replace nützlich, siehe Hinweis-Text für die aktuelle (umständliche) Umsetzung
          shared: ["procedures_defnoreturn", "procedures_defreturn", "lists_create_with_empty", "controls_untilWhile", "controls_repeat_ext", "controls_for", "controls_forEach", "text", "text_length", "lists_repeat", "text_charAt", "lists_setIndex_insert_last", "lists_split"],
        },
      },
      variables: {
        basic:  ["Zeile", "Spalte", "Karte"],
        easy:   ["karteBreite", "karteHoehe", "Karte"],
        medium: ["karteBreite", "karteHoehe", "Karte", "anzahlBaulwurfsbaue"],
        hard:   ["karteBreite", "karteHoehe", "Karte", "anzahlBaulwurfsbaue"]
      },  
      variablesOnlyBlocks: ['set', 'get'],
    },
    maxInstructions: {
      basic: 100,
      easy: 200,
      medium: 300,
      hard: 400,
    },
    checkEndEveryTurn: false,
    showIfMutator: true,
    blocklyColourTheme: "bwinf",
    
    //eigene End-Condition mit mehreren Lösungsalternativen für basic - scheint zu funktionieren...
    checkEndCondition: function(context, lastTurn) {
      if(!lastTurn) return;

      if(subTask.level != "basic" || true){ //normale Funktion für easy, medium, hard  (und für die neue Version von basic auch)
        // throws, if something is wrong …
        context.checkOutputHelper();

        // Seems like everything is okay: Right number of lines and all lines match …
        context.success = true;
        throw (window.languageStrings.messages.outputCorrect);
      }

      if(subTask.level == "basic"){ //eigene End-Condition für alte Version vom basic Level (mehrere Antwortmöglichkeiten erlaubt)
        var expectedLinesList = context.taskInfos.output;
        var actualLines = context.printer.output_text.replace(/\s*$/,"").split("\n");
        var errorstring = "";

        for (const option of expectedLinesList){
          var expectedLines = option.replace(/\s*$/,"").split("\n");
          var matches = true;
          var iLine = 0;

          for(iLine = 0; iLine < expectedLines.length && iLine < actualLines.length; iLine++) {
            var expectedLine = expectedLines[iLine].replace(/\s*$/,"");
            var actualLine = actualLines[iLine].replace(/\s*$/,"");
            var iChar = 0;
            
            for (iChar = 0; iChar < expectedLine.length && iChar < actualLine.length; iChar++){
              if(matches && actualLine[iChar] != expectedLine[iChar]) {
                matches = false;
                errorstring = ( //TODO: -> wie komme ich an die Strings aus blocklyPrinter_lib-2.1.js?
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

          if(matches) { //eine korrekte output-Option wurde ausgegeben
            context.success = true;
            throw (window.languageStrings.messages.outputCorrect);
          }

        }
        //keine output-Option hat zur Ausgabe gepasst
        context.success = false;
        throw(errorstring);
      }
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
      /*basic: [{ //output jeweils als Liste mehrerer gültiger Optionen, siehe checkEndCondition
        input: "24\n6\nXXX              X      \nX X   X    XXX       X  \nX X        X XXXX       \nXXX        X XX X      X\n     X     XXXX X       \n              XXX       \n", 
        output: ["XXX              X      ,X X   X    XXX       X  ,X X        X XXXX       ,XXX        X XX X      X,     X     XXXX X       ,              XXX       \n",
                 "X,X,X, , , , , , , , , , , , , , ,X, , , , , , ,X, ,X, , , ,X, , , , ,X,X,X, , , , , , , ,X, , ,X, ,X, , , , , , , , ,X, ,X,X,X,X, , , , , , , ,X,X,X, , , , , , , , ,X, ,X,X, ,X, , , , , , ,X, , , , , ,X, , , , , ,X,X,X,X, ,X, , , , , , , , , , , , , , , , , , , , , ,X,X,X, , , , , , , \n"]
      }, 
      {
        input: "10\n6\nXXX  X    \nX X    XXX\nX X    X X\nXXX X  X X\n       XXX\n X   X    \n", 
        output: ["XXX  X    ,X X    XXX,X X    X X,XXX X  X X,       XXX, X   X    \n",
                 "X,X,X, , ,X, , , , ,X, ,X, , , , ,X,X,X,X, ,X, , , , ,X, ,X,X,X,X, ,X, , ,X, ,X, , , , , , , ,X,X,X, ,X, , , ,X, , , , \n"]
      }, 
      {
        input: "27\n9\n   XXX  X       X          \nX  X X      XXX      X   X \n   X X   X  X X  X         \n X XXX      X X        XXX \n        X   XXX    X   X X \n    XXX                X X \n X  X X    X      X    XXX \n    X X       X            \nX   XXX  X         X      X\n", 
        output: ["   XXX  X       X          ,X  X X      XXX      X   X ,   X X   X  X X  X         , X XXX      X X        XXX ,        X   XXX    X   X X ,    XXX                X X , X  X X    X      X    XXX ,    X X       X            ,X   XXX  X         X      X\n", 
                 " , , ,X,X,X, , ,X, , , , , , , ,X, , , , , , , , , , ,X, , ,X, ,X, , , , , , ,X,X,X, , , , , , ,X, , , ,X, , , , ,X, ,X, , , ,X, , ,X, ,X, , ,X, , , , , , , , , , ,X, ,X,X,X, , , , , , ,X, ,X, , , , , , , , ,X,X,X, , , , , , , , , ,X, , , ,X,X,X, , , , ,X, , , ,X, ,X, , , , , ,X,X,X, , , , , , , , , , , , , , , , ,X, ,X, , ,X, , ,X, ,X, , , , ,X, , , , , , ,X, , , , ,X,X,X, , , , , ,X, ,X, , , , , , , ,X, , , , , , , , , , , , ,X, , , ,X,X,X, , ,X, , , , , , , , , ,X, , , , , , ,X\n"]
      }],*/
      basic: [{ //neue Version
        input: "5\n5\nXXX              X      \nX X   X    XXX       X  \nX X        X XXXX       \nXXX        X XX X      X\n     X     XXXX X       \n              XXX       \n", 
        output: "kein Hügel\n"
      }, 
      {
        input: "4\n10\nXXX  X    \nX X    XXX\nX X    X X\nXXX X  X X\n       XXX\n X   X    \n", 
        output: "Hügel\n"
      }, 
      {
        input: "1\n8\n   XXX  X       X          \nX  X X      XXX      X   X \n   X X   X  X X  X         \n X XXX      X X        XXX \n        X   XXX    X   X X \n    XXX                X X \n X  X X    X      X    XXX \n    X X       X            \nX   XXX  X         X      X\n", 
        output: "kein Hügel\n"
      }],
      easy: [{
        input: "3\n4\nXXX\nX X\nX X\nXXX\n",
        output: "Baulwurfsbau\n",
      },
      {
        input: "3\n4\nX  \n  X\nX  \n  X\n",
        output: "kein Baulwurfsbau\n",
      },
      {
        input: "3\n4\nX X\n   \n   \nX X\n",
        output: "kein Baulwurfsbau\n",
      },
      {
        input: "3\n4\nXXX\nX X\nX X\nXX \n",
        output: "kein Baulwurfsbau\n",
      },
      {
        input: "3\n4\nXXX\nX X\n XX\nXXX\n",
        output: "kein Baulwurfsbau\n",
      }],
      medium: [{
        input: "25\n6\nXXX               X      \nX X   X    XXX        X  \nX X        X X XXX       \nXXX        X X X X      X\n     X     XXX X X       \n               XXX       \n", 
        output: "3\n",
      }, 
      {
        input: "10\n6\nXXX  X    \nX X    XXX\nX X    X X\nXXX X  X X\n       XXX\n X   X    \n", 
        output: "2\n",
      }, 
      {
        input: "27\n9\n   XXX  X       X          \nX  X X      XXX      X   X \n   X X   X  X X  X         \n X XXX      X X        XXX \n        X   XXX    X   X X \n    XXX                X X \n X  X X    X      X    XXX \n    X X       X            \nX   XXX  X         X      X\n", 
        output: "4\n",
      }, 
      {
        input: "12\n5\n    X       \nX       X   \n  X       X \n       X    \n  X  X      \n",
        output: "0\n",
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
      }]
    },

    initBlocklySubTask(subTask);
}

initWrapper(initTask, ["basic", "easy", "medium", "hard"], "basic");
