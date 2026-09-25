function initTask(subTask) {
	subTask.gridInfos = {
		timeoutMinutes: 10, // Nach 15 Minuten warnen
		hideSaveOrLoad: true,
		actionDelay: 200,
		includeBlocks: {
			groupByCategory: {
				easy: true,
				medium: true,
				hard: true,
			},
			generatedBlocks: {
				printer: {
					shared: ["read", "print"],
					easy: [],
					medium: [],
					hard: []
				}
			},
			standardBlocks: {
				includeAll: false,
				singleBlocks: {
					easy: [ "lists_split", "controls_if_else", "logic_compare", "math_number", "lists_length", "text"],
					medium: [ "lists_split","text", "controls_if_else", "logic_compare", "math_number", "lists_length",
						"lists_indexOf","lists_getIndex", "logic_operation", "text_charAt", "text_indexOf" ],
					hard: [ "lists_split","text", "controls_if_else", "logic_compare", "math_number", "lists_length",
						"lists_indexOf","lists_getIndex", "logic_operation", "text_charAt", "text_indexOf", "controls_for", "math_arithmetic", "text_join", "text_getSubstring", "text_getSubstring", "logic_boolean"],
					shared: ["math_number", "controls_if", "text_length"],
				},
				wholeCategories: {
					easy: ["variables"],
					medium: ["variables"],
					hard: ["variables"],
				},
			},
			variables: {
				easy: [],
				medium: [],
				hard: []
			},
			variablesOnlyBlocks: ['set', 'get'],
		},
		maxInstructions: {
			easy: 30,
			medium: 40,
			hard: 50
		},
		limitedUses: [{
		blocks: ["print"],
		nbUses: 4
		}, 
		{
		blocks: ["logic_compare"],
		nbUses: 4
		},],
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
					input: "informatik\nmathematik\n",
					output: "true\n",
				},
				{
					input: "info\nmathe\n",
					output: "false\n",
				},
				{
					input: "hallo\nmorgen\n",
					output: "false\n",
				},
				{
					input: "juno\njuna\n",
					output: "true\n",
				},
				{
					input: "\ntestfall\n",
					output: "false\n",
				},
				{
					input: "leer\n\n",
					output: "false\n",
				},
				{
					input: "a\na\n",
					output: "true\n",
				},
				{
					input: "a\nb\n",
					output: "true\n",
				},
				{
					input: "a\naa\n",
					output: "false\n",
				},

				
			
			],


			medium: [{
					input: "informatik\nmathematik\n",
					output: "true\n",
				},
				{
					input: "info\nmathe\n",
					output: "false\n",
				},
				{
					input: "hallo\nmorgen\n",
					output: "false\n",
				},
				{
					input: "juno\njuna\n",
					output: "true\n",
				},
				{
					input: "hallo\nahoj\n",
					output: "false\n",
				},
				{
					input: "bernstein\nmauernetz\n",
					output: "false\n",
				},
								{
					input: "bahn\nhexe\n",
					output: "false\n",
				},
				{
					input: "otto\ntoto\n",
					output: "true\n",
				},
				{
					input: "aab\nabb\n",
					output: "true\n",
				},
				{
					input: "ab\nb\n",
					output: "false\n",
				},
								{
					input: "ab\nba\n",
					output: "true\n",
				},
								{
					input: "ab\ncd\n",
					output: "false\n",
				},
				{
					input: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\na\n",
					output: "false\n",
				},
				{
					input: "ba\nbb\n",
					output: "true\n",
				},
				

			],


			hard: [
				{
					input: "hase\nsahne\n",
					output: "false\n",
				},
				{
					input: "regen\ngenre\n",
					output: "true\n",
				},
				{
					input: "hörner\nröhren\n",
					output: "true\n",
				},
				{
					input: "informatik\nmathematik\n",
					output: "false\n",
				},
				{
					input: "info\nmathe\n",
					output: "false\n",
				},
				{
					input: "hallo\nmorgen\n",
					output: "false\n",
				},
				{
					input: "juno\njuna\n",
					output: "false\n",
				},
				{
					input: "hallo\nahoj\n",
					output: "false\n",
				},
				{
					input: "bernstein\nmauernetz\n",
					output: "false\n",
				},
				{
					input: "otto\ntoto\n",
					output: "true\n",
				},
				{
					input: "aab\nabb\n",
					output: "false\n",
				},
				{
					input: "ab\nb\n",
					output: "false\n",
				},
								{
					input: "ab\nba\n",
					output: "true\n",
				},
								{
					input: "ab\ncd\n",
					output: "false\n",
				},
								{
					input: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\na\n",
					output: "false\n",
				},
				{
					input: "ba\nbb\n",
					output: "false\n",
				},
			],
		},

		initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);