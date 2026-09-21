function initTask(subTask) {
  subTask.gridInfos = {
    hideSaveOrLoad: false, // Speichern und Laden von Lösungen möglich.
    timeoutMinutes: 10, // Nach 10 Minuten wird eine Warnung angezeigt.
    includeBlocks: {
      // Für medium und hard werden die Bausteine nach Kategorie gruppiert. 
      // Wenn wholeCategories Variablen oder Funktionen geladen werden, dann ist dies notwendig.
      groupByCategory: {
        easy: false,
        medium: true,
        hard: true
      },
      generatedBlocks: {
        // Alle Turtle spezifischen Blocks, welche genutzt werden.
        turtle: {
          easy: ["turnleftamount", "moveamount"],
          medium: ["turnleftamount", "turnrightamount", "penup", "pendown", "moveamount"],
          hard: ["turnleftamount", "turnrightamount", "penup", "pendown", "moveamount"]
        },
      },
      // Allgemeine Bausteine wie Bedingungen und Schleifen.
      standardBlocks: {
        includeAll: false,
        // Für medium und hard wird die komplette Variablen-Funktionalität inkludiert
        // Dies erlaubt den Usern selbst Variablen zu erstellen.
        wholeCategories: {
          easy: [],
          medium: ["variables"],
          hard: ["variables"]
        },
        // Weitere allgemeine Bausteine für jeweilige Versionen
        singleBlocks: {
          shared: ["controls_repeat_ext", "math_number", "math_arithmetic", ],
          medium: ["procedures_defnoreturn"],
          hard: ["controls_for", "procedures_defnoreturn"]
        },

      },
      // Falls nicht selbst Variablen definiert werden sollen, sondern Variablen
      // vorgegeben werden, können die Namen hier definiert werden.
      variables: {
        easy: [],
        medium: [],
        hard: ['i'],
      },
      // welche Funktionen für Variablen zur Verfügung stehen. Möglichkeiten sind "set", "get" und "incr"
      variablesOnlyBlocks: {
        easy: ['get'],
        medium: ['get', 'set'],
        hard: ['get', 'set'],
      }
    },
    // Startpoistion der Turtle
    coords: {
      easy: {
        x: 250,
        y: 250
      },
      medium: {
        x: 250,
        y: 250
      },
      hard: {
        x: 250,
        y: 250
      },
    },
    overlayFileName: "grid15.png", // Welches Grid verwendet werden soll
    turtleStepSize: 1, // Schrittgröße der Turtle
    // Gibt an, wie viele Bausteine insgesamt für welche Versionen maximal zur Verfügung stehen.
    maxInstructions: {
      easy: 15,
      medium: 23,
      hard: 35
    },
    // Die Endbedingung kann jeden Schritt überprüft werden, oder erst am Ende. default ist false.
    // checkEndEveryTurn: false,
    // Die BWINF-spezifischen Farben. Bitte in jeder Aufgabendatei laden, da die Blocktypen sonst nicht konsistent eingefärbt sind
    blocklyColourTheme: "bwinf",
    // Die Endbedinung kann hier definiert werden.
    checkEndCondition: function (context, lastTurn) {
      if (lastTurn) {
        var userImage = context.turtle.invisibleTurtle.drawingContext.getImageData(0, 0, 300, 300);
        var solutionImage = context.turtle.invisibleSolutionTurtle.drawingContext.getImageData(0, 0, 300, 300);
        var len = Math.min(userImage.data.length, solutionImage.data.length);
        var delta = 0;
        var fill = 0;
        var empty = 0;
        console.log(userImage);
        console.log(solutionImage);
        // Pixel sind im RGBA-Format.  Es wird nur der alpha-Wert überprüft.
        for (var i = 3; i < len; i += 4) {
          // Alpha-Wert überprüfen.
          if (Math.abs(userImage.data[i] - solutionImage.data[i]) > 127) {
            delta++;
          }
          if (solutionImage.data[i] > 127)
            fill++;
          else
            empty++;
        }

        if (delta < Math.min(fill, empty) * 0.1) {
          context.success = true;
          throw (window.languageStrings.messages.paintingCorrect);
        } else {
          context.success = false;
          throw (window.languageStrings.messages.paintingWrong);
        }
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
    }
  };
  // Hier werden die Aufgaben definiert
  subTask.data = {
    // Version **
    easy: [{
      drawSolution: function (turtle) {
        for (var i = 0; i < 5; i++) {
          turtle.move(10);
          turtle.turn(144);
        }
        turtle.set_colour("blue")
        turtle.move(10)
      },
    }],
    // Version ***
    medium: [{
      drawSolution: function (turtle) {
        for (var i = 0; i < 8; i++) {
          turtle.move(10);
          turtle.turn(135);
        }
        turtle.set_colour("blue")
        turtle.move(10)
        turtle.stop_painting();
        turtle.set_colour("black")
        turtle.move(1);
        turtle.start_painting();
        for (var i = 0; i < 8; i++) {
          turtle.move(5);
          turtle.turn(135);
        }
        turtle.set_colour("blue")
        turtle.move(5)
      },
    }],
    // Version *****
    hard: [{
      drawSolution: function (turtle) {
        function star_X_4(a, b) {
          for (var i = 0; i < (a); i++) {
            turtle.move(10);
            turtle.turn((360 / (a / b)));
          }
        }
        star_X_4(9, 4);
        turtle.set_colour("blue")
        turtle.move(10)
        turtle.stop_painting();
        turtle.turn(180)
        turtle.move(10)
        turtle.turn(180)

        turtle.set_colour("black")
        turtle.turn(90);
        turtle.move(10);
        turtle.turn(-90);
        turtle.start_painting();
        star_X_4(15, 4);

        turtle.set_colour("blue")
        turtle.move(10)
        turtle.stop_painting();
        turtle.turn(180)
        turtle.move(10)
        turtle.turn(180)

        turtle.set_colour("black")
        turtle.stop_painting();
        turtle.move(13);
        turtle.start_painting();

        star_X_4(5, 2);

        turtle.set_colour("blue")
        turtle.move(10)
        turtle.stop_painting();


      }
    }, ],
  };

  initBlocklySubTask(subTask);
  // displayHelper.thresholdEasy = 120;
  // displayHelper.thresholdMedium = 240;
}
// Laden der definierten Informationen
initWrapper(initTask, ["easy", "medium", "hard"], null);