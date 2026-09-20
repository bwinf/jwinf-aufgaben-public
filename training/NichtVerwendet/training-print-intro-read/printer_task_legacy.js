function initTask(subTask) {
    subTask.gridInfos = {
        hideSaveOrLoad: true,
        actionDelay: 200,
        includeBlocks: {
            groupByCategory: false,
            generatedBlocks: {
                printer: ["read"],
            },
            standardBlocks: {
                includeAll: false,
                wholeCategories: [],
                singleBlocks: [],
            },
            variables: ['Zeile'],
            variablesOnlyBlocks: ['set'],
        },
        maxInstructions: 22,
        checkEndEveryTurn: true,
        blocklyColourTheme: "bwinf",
        checkEndCondition: function(context, lastTurn) {
            if (context.printer.input_text == "") {
                context.success = true;
                throw("Bravo! Du hast die Zeile eingelesen!");
            } else if (lastTurn) {
                context.success = false;
                throw(window.languageStrings.messages.outputWrong);
            }
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
        easy: [
        {
            input: "Guten Tag!\n",
            output: "",
        },
        ],
    };

    initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);

