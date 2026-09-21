function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
             printer: {easy:["print", "read"],medium:["print", "read", "eof"],hard:["print", "read", "readInteger"]},
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {easy:["controls_repeat"],medium:["controls_whileUntil"],hard:["controls_repeat_ext"]},
         },
         variables: {hard:['Anzahl Zeilen']},
         variablesOnlyBlocks: ['set', 'get'],
      },
      maxInstructions: 22,
      checkEndEveryTurn: false,
      blocklyColourTheme: "bwinf",
      checkEndCondition: function(context, lastTurn) {
          if (!lastTurn) return;

          // throws, if something is wrong …
          context.checkOutputHelper();

          // Seems like everything is okay: Right number of lines and all lines match …
          context.success = true;
         throw(window.languageStrings.messages.outputCorrect);
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
      }
   };

   subTask.data = {
      easy: [
         {
            input: "Erste Zeile\nZweite Zeile\nDritte Zeile\n",
            output: "ERSTE ZEILE\nZWEITE ZEILE\nDRITTE ZEILE\n",
         },
         {
            input: "Atlantik Blind\nIndessen Minute\nArbeitet Behauptung\n",
            output: "ATLANTIK BLIND\nINDESSEN MINUTE\nARBEITET BEHAUPTUNG\n",
         },
         {
            input: "droyd6QuajUb\nVinokFijed3\nEdindotked7\n",
            output: "DROYD6QUAJUB\nVINOKFIJED3\nEDINDOTKED7\n",
         },
      ],
      medium: [
         {
            input: "Laura\nPeter\nJohanna\nMartin\n",
            output: "Hallo Laura\nHallo Peter\nHallo Johanna\nHallo Martin\n",
         },
         {
            input: "Wovon Klagen\nDurchgang Zustimmen\nKriegen Ratten\nInsbesondere Winkel\n",
            output: "Hallo Wovon Klagen\nHallo Durchgang Zustimmen\nHallo Kriegen Ratten\nHallo Insbesondere Winkel\n",
         },
         {
            input: "Erste Zeile\nZweite Zeile\nDritte Zeile\nVierte Zeile\nFünfte Zeile\n",
            output: "Hallo Erste Zeile\nHallo Zweite Zeile\nHallo Dritte Zeile\nHallo Vierte Zeile\nHallo Fünfte Zeile\n",
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

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
