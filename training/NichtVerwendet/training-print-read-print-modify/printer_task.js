function initTask(subTask) {
   subTask.gridInfos = {
      context: "printer",
      hideSaveOrLoad: true,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            printer: ["print", "read"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: { easy: ["text_changeCase_noShadow"], medium: ["text_join"], hard: ["text_join", "text"] },
         },
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
            input: "Hallo Welt!\n",
            output: "HALLO WELT!\n",
         },
         {
            input: "heute scheint\n",
            output: "HEUTE SCHEINT\n",
         },
         {
            input: "damals ihnen seien begrenzen\n",
            output: "DAMALS IHNEN SEIEN BEGRENZEN\n",
         },
      ],
      medium: [
         {
            input: "Erste Zeile,\nZweite Zeile\n",
            output: "Erste Zeile,Zweite Zeile\n",
         },
         {
            input: "Hallo\nInga\n",
            output: "HalloInga\n",
         },
         {
            input: "Test\nausgabe\n",
            output: "Testausgabe\n",
         },
      ],
      hard: [
         {
            input: "Erste Zeile,\nZweite Zeile\n",
            output: "Erste Zeile, Zweite Zeile\n",
         },
         {
            input: "Hallo\nInga\n",
            output: "Hallo Inga\n",
         },
         {
            input: "Test\nAusgabe\n",
            output: "Test Ausgabe\n",
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


