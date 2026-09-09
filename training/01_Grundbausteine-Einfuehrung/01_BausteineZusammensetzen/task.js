function initTask(subTask) {
   subTask.gridInfos = {
      context: "robot",
      hideSaveOrLoad: true,
      conceptViewer: true,
      contextType: "course",
      actionDelay: 200,
      maxInstructions: 6,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "north"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: []
         },
      },
      blocklyColourTheme: "bwinf",
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [],
      includedBlocks: [],
      checkEndEveryTurn: true,
   };

   subTask.data = {
      hard: [
         {
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2],
               [2, 1, 1, 1, 1, 1, 1, 2],
               [2, 1, 1, 2, 2, 1, 1, 2],
               [2, 1, 1, 2, 1, 3, 1, 2],
               [2, 1, 1, 1, 1, 2, 1, 2],
               [2, 1, 1, 1, 1, 1, 1, 2],
               [2, 2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [
               { row: 4, col: 3, type: "robot" },
            ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

window.initBlocklySubTask = function () {};
window.taskData = window.taskData || {};
window.taskData.waitInit = function () { initTask(window.taskData); };
window.taskData.codecastParameters = window.taskData.codecastParameters || {
    language: "de-DE",
    platform: "blockly",
    canChangePlatform: false,
    showStepper: true,
    showStack: false,
    showViews: true,
    showIO: true,
    controls: { reload: false },
    hideSettings: true,
    jwinfMenu: { copyPaste: true, undoRedo: true, svgExport: true }
};


