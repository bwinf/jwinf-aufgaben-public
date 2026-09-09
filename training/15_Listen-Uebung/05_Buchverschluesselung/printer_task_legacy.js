function initTask(subTask) {
	subTask.gridInfos = {
		timeoutMinutes: 15, // Nach 15 Minuten warnen
		hideSaveOrLoad: true,
		actionDelay: 200,
		includeBlocks: {
			groupByCategory: {
				easy: false,
				medium: true,
				hard: true,
			},
			generatedBlocks: {
				printer: {
					shared: ["read", "print"],
					easy:["eof"],
					hard: ["eof"]
				}
			},
			standardBlocks: {
				includeAll: false,
				singleBlocks: {
					easy: ["controls_untilWhile", "text_charAt", "text_join", "text"],
					medium: ["controls_untilWhile", "text_join", "lists_split", "lists_isEmpty", "text_join", "text_charAt", "lists_getIndex", "lists_length", "text", "controls_for"],
					hard: ["math_arithmetic", "controls_untilWhile", "text_join", "text", "text_charAt", "lists_create_with_empty", "lists_isEmpty", "lists_split", "lists_setIndex", "lists_getIndex", "controls_for", "lists_length"],
					shared: [],
				},
				wholeCategories: {
					easy: [],
					medium: ["variables"],
					hard:["variables"],
				},
			},
			variables: {
				easy: ["Zeichen", "Eingabe", "Ausgabe"],
				medium: [],
				hard: []
			},
			variablesOnlyBlocks: ['set', 'get'],
		},
		maxInstructions: { easy: 40, medium: 60, hard: 60 },
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
		},
	};

	subTask.data = {

		easy: [
			{
				input: "Mein Lieblingsfach ist Informatik.\n" +
					"6\n" +
					"16\n" +
					"13\n" +
					"2\n",
				output: "Lage\n",
			},
			{
				input: "Der Birnenbaum steht hinter dem Hochhaus!\n" +
					"5\n" +
					"23\n" +
					"3\n" +
					"24\n" +
					"2\n",
				output: "Birne\n",
			},
			{
				input: "Der Jugendwettbewerb ist toll!\n" +
					"11\n" +
					"2\n" +
					"22\n" +
					"23\n" +
					"8\n",
				output: "weise\n",
			},
		],


		medium: [
			{
				input: "7,8,9,21,3,15,18,20,11,21,8\n" +
					"Der JwInf ist mega toll!",
				output: "Information\n",
			},
			{
				input: "1,14,18,12\n" +
					"Der Frühling ist nahe.",
				output: "Ding\n"
			},
			{
				input: "25,10,33,33\n" +
					"Es hat Spaß gemacht das Buch zu lesen.",
				output: "Ball\n"
			},
		],


		hard: [
			{
				input: "1,1,3,2,4,9,4,13,1,6,1,10\n" +
					"Das Wetter ist schön,\n" +
					"weil die Sonne scheint.\n" +
					"Doch oh weh! Es zieht\n" +
					"vom Süden ein Regen auf.\n" +
					"Ach\n",

				output: "Donner\n",
			},

			{
				input: "1,5,3,8,4,16,1,22,2,11,5,7,3,16\n" +
					"Der Jugendwettbewerb hat drei Runden.\n" +
					"Die erste und die zweite Runde\n" +
					"finden online statt.\n" +
					"Du bearbeitest gerade die zweite Runde.\n" +
					"Viel Erfolg!\n",

				output: "Joghurt\n",
			},
			{
				input: "3,1,3,12,1,12,2,2,2,17,2,6,3,3\n" +
					"Bei jedem klugen Wort\n" +
					"von Sokrates rief\n" +
					"Xanthippe zynisch:\n" +
					"Quatsch!\n",

				output: "Xylofon\n",
			},
		],
	},

		initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
