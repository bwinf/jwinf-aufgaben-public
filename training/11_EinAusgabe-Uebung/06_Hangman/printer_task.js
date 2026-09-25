function initTask(subTask) {
	subTask.gridInfos = {
		context: "printer",
		timeoutMinutes: 15, // Nach 15 Minuten warnen
		hideSaveOrLoad: true,
		actionDelay: 200,
		includeBlocks: {
			groupByCategory: {
				easy: false,
				medium: false,
				hard: false,
			},
			generatedBlocks: {
				printer: {
					shared: ["print", "read"],
					medium: ["eof"],
					hard: ["eof"],

				}
			},
			standardBlocks: {
				includeAll: false,
				singleBlocks: {
					shared: [],
					easy: ["controls_if_else", "text", "text_indexOf", "math_number", "logic_compare"],
					medium: ["controls_if_else", "text", "text_indexOf", "math_number", "controls_untilWhile", "logic_compare"],
					hard: ["controls_if_else", "text", "text_indexOf", "math_number", "controls_untilWhile", "text_join", "logic_compare"],
				},
				wholeCategories: {
					shared: [],
					easy: [],
					medium: [],
					hard: [],
				},
			},
			variables: {
				shared: [],
				easy: ["Text", "Buchstabe"],
				medium: ["Text", "Buchstabe"],
				hard: ["Text", "Buchstabe", "bereits gefragt"]
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
				input:
					"baumstammwerfen\n" +
					"b\n",
				output:
					"enthalten\n",
			},
			{
				input:
					"sonne\n" +
					"s\n",
				output:
					"enthalten\n",
			},
			{
				input:
					"schneemann\n" +
					"k\n",
				output:
					"nicht enthalten\n",
			},
			{
				input:
					"kakao\n" +
					"z\n",
				output:
					"nicht enthalten\n",
			},
			{
				input:
					"quadrat\n" +
					"q\n",
				output:
					"enthalten\n",
			},
			{
				input:
					"Kirchturm\n" +
					"m\n",
				output:
					"enthalten\n",
			},
			{
				input:
					"abcdefghijklmnopqrstuvwxyz\n" +
					"ä\n",
				output:
					"nicht enthalten\n",
			},
		],


		medium: [
			{
				input:
					"baumstammwerfen\n" +
					"a\n" +
					"f\n" +
					"q\n" +
					"s\n" +
					"d\n",
				output:
					"enthalten\n" +
					"enthalten\n" +
					"nicht enthalten\n" +
					"enthalten\n" +
					"nicht enthalten",
			},
			{
				input:
					"diamantquarz\n" +
					"d\n" +
					"i\n" +
					"v\n" +
					"s\n" +
					"d\n",
				output:
					"enthalten\n" +
					"enthalten\n" +
					"nicht enthalten\n" +
					"nicht enthalten\n" +
					"enthalten",
			},
			{
				input:
					"autoreifenkontrolle\n" +
					"y\n" +
					"s\n" +
					"t\n" +
					"e\n" +
					"z\n",
				output:
					"nicht enthalten\n" +
					"nicht enthalten\n" +
					"enthalten\n" +
					"enthalten\n" +
					"nicht enthalten",
			},
			{
				input:
					"ksuwpömyxgtsnwqz\n" +
					"y\n" +
					"s\n" +
					"t\n" +
					"e\n" +
					"z\n" +
					"m\n" +
					"q\n" +
					"w\n",
				output:
					"enthalten\n" +
					"enthalten\n" +
					"enthalten\n" +
					"nicht enthalten\n" +
					"enthalten\n" +
					"enthalten\n" +
					"enthalten\n" +
					"enthalten\n",
			},
			{
				input:
					"abcdefghijklmnopqrstuvwxyz\n" +
					"a\n" +
					"t\n" +
					"ü\n" +
					"ä\n" +
					"ä\n" +
					"j\n" +
					"ü\n" +
					"ä\n" +
					"ö\n",
				output:
					"enthalten\n" +
					"enthalten\n" +
					"nicht enthalten\n" +
					"nicht enthalten\n" +
					"nicht enthalten\n" +
					"enthalten\n" +
					"nicht enthalten\n" +
					"nicht enthalten\n" +
					"nicht enthalten",
			}
		],


		hard: [
			{
				input:
					"baumstammwerfen\n" +
					"d\n" +
					"i\n" +
					"a\n" +
					"s\n" +
					"d\n",
				output:
					"nicht enthalten\n" +
					"nicht enthalten\n" +
					"enthalten\n" +
					"enthalten\n" +
					"bereits gefragt",
			},
			{
				input:
					"diamantquarz\n" +
					"d\n" +
					"i\n" +
					"v\n" +
					"s\n" +
					"d\n",
				output:
					"enthalten\n" +
					"enthalten\n" +
					"nicht enthalten\n" +
					"nicht enthalten\n" +
					"bereits gefragt",
			},
			{
				input:
					"autoreifenkontrolle\n" +
					"y\n" +
					"s\n" +
					"t\n" +
					"e\n" +
					"z\n",
				output:
					"nicht enthalten\n" +
					"nicht enthalten\n" +
					"enthalten\n" +
					"enthalten\n" +
					"nicht enthalten",
			},
			{
				input:
					"ksuwpömyxgtsnwqz\n" +
					"y\n" +
					"s\n" +
					"t\n" +
					"y\n" +
					"s\n" +
					"t\n" +
					"q\n" +
					"w\n",
				output:
					"enthalten\n" +
					"enthalten\n" +
					"enthalten\n" +
					"bereits gefragt\n" +
					"bereits gefragt\n" +
					"bereits gefragt\n" +
					"enthalten\n" +
					"enthalten\n",
			},
			{
				input:
					"abcdefghijklmnopqrstuvwxyz\n" +
					"a\n" +
					"t\n" +
					"ü\n" +
					"ä\n" +
					"ä\n" +
					"j\n" +
					"ü\n" +
					"ä\n" +
					"ö\n",
				output:
					"enthalten\n" +
					"enthalten\n" +
					"nicht enthalten\n" +
					"nicht enthalten\n" +
					"bereits gefragt\n" +
					"enthalten\n" +
					"bereits gefragt\n" +
					"bereits gefragt\n" +
					"nicht enthalten",
			}
		],
	},

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
  jwinfMenu: { copyPaste: true, undoRedo: true, svgExport: true },
  showExpectedOutput: false,
  canAddUserTests: true
};
window.taskData.codecastParameters.showStack = true;
window.taskData.codecastParameters.showExpectedOutput = false;
window.taskData.codecastParameters.canAddUserTests = true;
