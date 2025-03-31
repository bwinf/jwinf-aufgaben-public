function initTask(subTask) {
  subTask.gridInfos = {
    timeoutMinutes: 15, // Nach 10 Minuten wird eine Warnung angezeigt.
    hideSaveOrLoad: false, // Speichern und Laden von Lösungen möglich.
    showIfMutator: false, // Es wird das blaue Zahnrad für die controls_if-Bausteine angezeigt.
    includeBlocks: {
      // Für medium und hard werden die Bausteine nach Kategorie gruppiert. 
      // Wenn wholeCategories Variablen oder Funktionen geladen werden, dann ist dies notwendig.
      groupByCategory: {
        medium: true,
        hard: true
      },
      // Alle Print spezifischen Blocks, welche genutzt werden.
      generatedBlocks: {
        printer: {
          shared: ["print", "read"],
          medium: [],
          hard: ["eof"],
        },
      },
      // Allgemeine Bausteine wie Bedingungen und Schleifen.
      standardBlocks: {
        includeAll: false,
        // Für medium und hard wird die komplette Variablen-Funktionalität inkludiert
        // Dies erlaubt den Usern selbst Variablen zu erstellen.
        wholeCategories: {
          medium: ["variables"],
          hard: ["variables"],
        },
        // Weitere allgemeine Bausteine für jeweilige Versionen
        singleBlocks: {
          medium: [],
          hard: ["controls_untilWhile", "controls_whileUntil", "controls_flow_statements"],
        },
      },
      // Falls nicht selbst Variablen definiert werden sollen, sondern Variablen
      // vorgegeben werden, können die Namen hier definiert werden.
      variables: {
        easy: [],
      },
      // welche Funktionen für Variablen zur Verfügung stehen. Möglichkeiten sind "set", "get" und "incr"
      variablesOnlyBlocks: {
        shared: ['set', 'get'],
      },
    },
    // Gibt an, wie viele Bausteine insgesamt für welche Versionen maximal zur Verfügung stehen.
    maxInstructions: {
      medium: 10,
      hard: 10
    },
    // Hier könnten einzelne Bausteine limitiert werden.
    /*limitedUses: [{
      blocks: ["print"],
      nbUses: 4
    }, ],*/
    // Die Endbedingung kann jeden Schritt überprüft werden, oder erst am Ende. default ist false.
    // checkEndEveryTurn: false,
    // Die BWINF-spezifischen Farben. Bitte in jeder Aufgabendatei laden, da die Blocktypen sonst nicht konsistent eingefärbt sind
    blocklyColourTheme: "bwinf",
    checkEndCondition: function (context, lastTurn) {
      if (!lastTurn) return;
      context.checkOutputHelper();
      // Hier angekommen scheint alles okay: Korrekte Anzahl Zeilen und diese matchen.
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
  // Hier werden die Aufgaben definiert
  subTask.data = {
      // Version ***
      medium: [{
          input: "Hallo\n",
          output: "Hallo\n",
        },
        {
          input: "Das ist ein Echo!\n",
          output: "Das ist ein Echo!\n",
        },
        {
          input: "7357 eInGaBe\n",
          output: "7357 eInGaBe\n"
        },
      ],
      // Version ****
      hard: [{
          input: "Ein Einzeiler!\n",
          output: "Ein Einzeiler!\n",
        },
        {
          input: "Ein\nZweizeiler!\n",
          output: "Ein\nZweizeiler!\n",
        },
        {
          input: "1. Zeile\n2. Zeile\n3. Zeile\n\n5. Zeile\n",
          output: "1. Zeile\n2. Zeile\n3. Zeile\n\n5. Zeile\n",
        },
      ],
    },

    initBlocklySubTask(subTask);
}
// Laden der definierten Informationen
initWrapper(initTask, ["medium", "hard"], null);