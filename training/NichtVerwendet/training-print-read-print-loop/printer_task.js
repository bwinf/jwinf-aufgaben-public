function initTask(subTask) {
   subTask.gridInfos = {
      context: "printer",
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            printer: { easy: ["print", "read"], medium: ["print", "read", "eof"], hard: ["print", "read", "readInteger"] },
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: { easy: ["controls_repeat"], medium: ["controls_whileUntil", "logic_negate"], hard: ["controls_repeat_ext"] },
         },
         variables: { hard: ['Anzahl Zeilen'] },
         variablesOnlyBlocks: ['set', 'get'],
      },
      maxInstructions: 22,
      checkEndEveryTurn: false,
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
      }
   };

   subTask.data = {
      easy: [
         {
            input: "Erste Zeile\nZweite Zeile\nDritte Zeile\n",
            output: "Erste Zeile\nZweite Zeile\nDritte Zeile\n",
         },
         {
            input: "Atlantik Blind\nIndessen Minute\nArbeitet Behauptung\n",
            output: "Atlantik Blind\nIndessen Minute\nArbeitet Behauptung\n",
         },
         {
            input: "droyd6QuajUb\nVinokFijed3\nEdindotked7\n",
            output: "droyd6QuajUb\nVinokFijed3\nEdindotked7\n",
         },
      ],
      medium: [
         {
            input: "Erste Zeile\nZweite Zeile\nDritte Zeile\n",
            output: "Erste Zeile\nZweite Zeile\nDritte Zeile\n",
         },
         {
            input: "Wovon Klagen\nDurchgang Zustimmen\nKriegen Ratten\nInsbesondere Winkel\n",
            output: "Wovon Klagen\nDurchgang Zustimmen\nKriegen Ratten\nInsbesondere Winkel\n",
         },
         {
            input: "Erste Zeile\nZweite Zeile\nDritte Zeile\nVierte Zeile\nFünfte Zeile\n",
            output: "Erste Zeile\nZweite Zeile\nDritte Zeile\nVierte Zeile\nFünfte Zeile\n",
         },
      ],
      hard: [
         {
            input: "3\nErste Zeile\nZweite Zeile\nDritte Zeile\n",
            output: "Erste Zeile\nZweite Zeile\nDritte Zeile\n",
         },
         {
            input: "4\nWovon Klagen\nDurchgang Zustimmen\nKriegen Ratten\nInsbesondere Winkel\n",
            output: "Wovon Klagen\nDurchgang Zustimmen\nKriegen Ratten\nInsbesondere Winkel\n",
         },
         {
            input: "5\nErste Zeile\nZweite Zeile\nDritte Zeile\nVierte Zeile\nFünfte Zeile\n",
            output: "Erste Zeile\nZweite Zeile\nDritte Zeile\nVierte Zeile\nFünfte Zeile\n",
         },
      ],
   };

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


