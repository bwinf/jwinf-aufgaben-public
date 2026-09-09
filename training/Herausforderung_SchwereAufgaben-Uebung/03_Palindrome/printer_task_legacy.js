function initTask(subTask) {
  subTask.gridInfos = {
    hideSaveOrLoad: true,
    actionDelay: 200,

    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        printer: {
          shared: ["print", "read", "eof"],
        },
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: {
          shared: ["controls_untilWhile", "controls_for", "text", "text_length", "text_append", "text_charAt", "controls_if", "logic_compare"],
        },
      },
      variables: {
        shared: ["a", "b", "i", "etwas"]
      },
      variablesOnlyBlocks: ['set', 'get'],
    },
    showIfMutator: true,
    blocklyColourTheme: "bwinf",
    maxInstructions: 100,
    checkEndEveryTurn: false,
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
        if (context.nbMoves > 1000) {
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
        input: "spanien\nregallager\nhimmel\nalexander\ndefinition\nneozoen\notto\noffene\nente\nreittier\nmitten\nreliefpfeiler\norganisatoren\nrentner\nneben\ngegebenen\ngehege\n",
        output: "regallager\nneozoen\notto\nreittier\nreliefpfeiler\nrentner\nneben\n",
      },
      {
        input: "JRYSDVJNDZ\nDJSQZTJWAM\nPPUOBBOUPP\nARCERA\nPQBTVRBQP\nUFBKFFKBFU\nALZJCMFGZV\nPMPWSZIGQJ\nWFWOUIRWOWFW\nZXHUDDUHXZ\nNZDHNNHDZN\nJSJFKKFJSJ\nGWJCAGWUBJ\nTLKDAADKLT\nUAVMNGEPSA\nXWGKOOKGWX\nKKWOTCCTHD\nLFFASGQPPP\nPXPWEEWPXP\nILAMFVMROH\nBTCDPPDCTB\nAXFKVVKFXA\nJJBZZEHVNZ\n",
        output: "PPUOBBOUPP\nUFBKFFKBFU\nZXHUDDUHXZ\nNZDHNNHDZN\nJSJFKKFJSJ\nTLKDAADKLT\nXWGKOOKGWX\nPXPWEEWPXP\nBTCDPPDCTB\nAXFKVVKFXA\n",
      },
      {
        input: "kooophilpxoksewp\nsfumhigoiyefohpz\nfzdiigjemdkfultm\ndlutmphvvhpmtuld\ngeoivvdssdvvioeg\nkyblkomssmoklbyk\nnmhlyzyllyzylhmn\nrjllbuhthsijcogi\natdyinkyvtfegnzx\najmsjeruurejsmja\njjydfmpvvpmfdyjj\neavwlgtbbtglwvae\nlacapcqamxjoxxch\nstskqkuhxtuyxbjz\nnxeaokwfodlyfnwh\ngqeytixcsldeklkb\nwwzvmsfccfsmvzww\nlwhevjpaapjvehwl\nflnpoouylkvpwzgc\nvzdqmeqbfdouabqz\n",
        output: "dlutmphvvhpmtuld\ngeoivvdssdvvioeg\nkyblkomssmoklbyk\nnmhlyzyllyzylhmn\najmsjeruurejsmja\njjydfmpvvpmfdyjj\neavwlgtbbtglwvae\nwwzvmsfccfsmvzww\nlwhevjpaapjvehwl\n",
      },

    ],
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null);
