function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      context: "printer",
      hideSaveOrLoad: true,
      actionDelay: 200,

      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
            printer: ["print", "read", "readInteger", "readFloat", "eof"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["logic", "loops", "math", "variables"],
            singleBlocks: [],
         },
         variables: ["a", "b"]
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
               message += languageStrings.messages.moreThan100Moves;
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
            input: "Hans\nPeter\nMartin\n",
            output: "Hans\nPeter\nMartin\n",
         },
         {
            input: "a\nb\nc\n",
            output: "a\nb\nc\n",
         },

      ],
      medium: [
         {
            input: "Fuchs\nElefant\nEichhörnchen\nTiger\nPinguin\nMarienkäfer\nKatze\nWal\nWellensittich\nHund\n",
            output: "Fuchs\nElefant\nEichhörnchen\nTiger\nPinguin\nMarienkäfer\nKatze\nWal\nWellensittich\nHund\n",
         },
         {
            input: "a\nb\nc\nd\ne\nf\ng\nh\ni\nj\n",
            output: "a\nb\nc\nd\ne\nf\ng\nh\ni\nj\n",
         },
      ],
      hard: [
         {
            input: "Ahorn\nWeide\nEiche\nBuche\nKastanie\nGinko\n",
            output: "Ahorn\nWeide\nEiche\nBuche\nKastanie\nGinko\n",
         },
         {
            input: "a\nb\nc\n",
            output: "a\nb\nc\n",
         },
         {
            input: "a\nb\nc\nd\ne\nf\n",
            output: "a\nb\nc\nd\ne\nf\n",
         },
         {
            input: "a\nb\nc\nd\ne\nf\ng\nh\ni\nj\n",
            output: "a\nb\nc\nd\ne\nf\ng\nh\ni\nj\n",
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


