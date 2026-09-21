function initTask(subTask) {
  subTask.gridInfos = {
    hideSaveOrLoad: true,
    actionDelay: 200,

    includeBlocks: {
      groupByCategory: true,
      generatedBlocks: {
        printer: ["print", "readInteger"],
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: ["variables"],
        singleBlocks: {
          shared: ["controls_repeat_ext_noShadow", "math_arithmetic", "math_number"],
        },
      },
    },
    blocklyColourTheme: "bwinf",
    maxInstructions: 24,
    checkEndEveryTurn: true,
    checkEndCondition: function(context, lastTurn) {
      if (!lastTurn) return;

      // throws, if something is wrong …
      context.checkOutputHelper();

      // Seems like everything is okay: Right number of lines and all lines match …
      context.success = true;
      throw (window.languageStrings.messages.outputCorrect);
    },
    computeGrade: function(context, message) {
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
    easy: [{
        input: "2\n",
        output: "0\n1\n",
      },
      {
        input: "4\n",
        output: "0\n1\n1\n2\n",
      },
      {
        input: "8\n",
        output: "0\n1\n1\n2\n3\n5\n8\n13\n",
      },
      {
        input: "40\n",
        output: "0\n1\n1\n2\n3\n5\n8\n13\n21\n34\n55\n89\n144\n233\n377\n610\n987\n1597\n2584\n4181\n6765\n10946\n17711\n28657\n46368\n75025\n121393\n196418\n317811\n514229\n832040\n1346269\n2178309\n3524578\n5702887\n9227465\n14930352\n24157817\n39088169\n63245986\n",
      },
    ],
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null);
