function initTask(subTask) {
  subTask.gridInfos = {
    timeoutMinutes: 10, // Nach 10 Minuten wird eine Warnung angezeigt.
    hideSaveOrLoad: false, // Speichern und Laden von Lösungen möglich.
    showIfMutator: true, // Es wird das blaue Zahnrad für die controls_if-Bausteine angezeigt.
    includeBlocks: {
      // Für medium und hard werden die Bausteine nach Kategorie gruppiert. 
      // Wenn wholeCategories Variablen oder Funktionen geladen werden, dann ist dies notwendig.
      groupByCategory: {
        easy: false,
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
          easy: [],
          medium: ["variables"],
          hard: ["variables"],
        },
        // Weitere allgemeine Bausteine für jeweilige Versionen
        singleBlocks: {
          shared: ["controls_if", "logic_compare", "logic_boolean", "controls_for", "math_number", "text", "lists_getIndex", "lists_split", "lists_length"],
          easy: ["controls_repeat_ext"],
          medium: ["logic_negate"],
          hard: ["controls_untilWhile", "logic_negate", "math_arithmetic"],
        },
      },
      // Falls nicht selbst Variablen definiert werden sollen, sondern Variablen
      // vorgegeben werden, können die Namen hier definiert werden.
      variables: {
        easy: ["Liste", "Ergebnis"],
      },
      // welche Funktionen für Variablen zur Verfügung stehen. Möglichkeiten sind "set", "get" und "incr"
      variablesOnlyBlocks: {
        shared: ['set', 'get'],
        hard: ["incr"]
      },
    },
    // Gibt an, wie viele Bausteine insgesamt für welche Versionen maximal zur Verfügung stehen.
    maxInstructions: {
      easy: 35,
      medium: 50,
      hard: 60
    },
    // Hier könnten einzelne Bausteine limitiert werden.
    limitedUses: [{
      blocks: ["print"],
      nbUses: 4
    }, ],
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
      // Version **
      easy: [{
          input: "1,4,5,9,8,10\n",
          output: "Gültig\n",
        },
        {
          input: "10,4,6,2\n",
          output: "Ungültig\n"
        },
        {
          input: "4,5,11,3\n",
          output: "Ungültig\n"
        },
        {
          input: "3,5,2,8,10,5,4,1\n",
          output: "Gültig\n"
        },
        {
          input: "4,4,1,2,3,6\n",
          output: "Gültig\n"
        },
        {
          input: "9,3,2,4,5,10,1,11,12\n",
          output: "Gültig\n"
        },
      ],
      // Version ***
      medium: [{
          input: "1,4,4,2,5,7,9,8,6,10\n10\n",
          output: "Ungültig\n",
        },
        {
          input: "1,4,3,2,5,7,9,8,6,10\n10\n",
          output: "Gültig\n",
        },
        {
          input: "9,4,6,2\n9",
          output: "Ungültig\n"
        },
        {
          input: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15\n18\n",
          output: "Ungültig\n"
        },
        {
          input: "1,7,4,6,2,5,3\n7",
          output: "Gültig\n"
        },
        {
          input: "2,1,4,3,5,6,8,7,10,9,12,11,14,13,16,15,17,18,19\n20",
          output: "Ungültig\n"
        },
      ],
      // Version ****
      hard: [{
          input: "1,4,6,2,5,7,9,8,6,10\n4,1\n5,1\n7,1\n6,2\n",
          output: "Gültig\n",

        },
        {
          input: "9,4,6,2\n10,3\n",
          output: "Ungültig\n"
        },
        {
          input: "1,2,3,4,5,6,7,8,8,8,7,6,5,4,3,2,1\n1,2\n8,3\n3,2\n2,2\n7,2\n6,2\n",
          output: "Gültig\n"
        },
        {
          input: "1,11,1,111,1,11,1,1,111\n1,5\n",
          output: "Gültig\n"
        },
        {
          input: "1,2,3,4,5,6,7,8,9,10\n1,1\n2,1\n3,1\n4,1\n5,1\n6,1\n7,1\n8,1\n9,1\n10,1\n",
          output: "Gültig\n"
        },
        {
          input: "5,5,5,5,5,5\n6,0\n7,0\n8,0\n",
          output: "Gültig\n"
        },
        {
          input: "5,5,5,5,5,5\n5,8\n",
          output: "Ungültig\n"
        },
      ],
    },

    initBlocklySubTask(subTask);
}
// Laden der definierten Informationen
initWrapper(initTask, ["easy", "medium", "hard"], null);