function initTask(subTask) {
   subTask.gridInfos = {
      context: "robot",
      hideSaveOrLoad: true,
      conceptViewer: false,
      contextType: "labyrinth",

      //actionDelay: 200,
      hasGravity: false,
      maxInstructions: {
         easy: 12,
         medium: 20,
         hard: 32

      },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: {
               shared: ["forward", "obstacleInFront", "right", "left", "onExit"],
               easy: [],
               medium: [],
               hard: []
            }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {
               easy: [],
               medium: [],
               hard: []
            },
            singleBlocks: {
               shared: ["controls_if", "controls_untilWhile", "controls_if_else"],
               easy: ["logic_negate"],
               medium: ["logic_negate"],
               hard: ["logic_negate"]
            },
         },

      },
      blocklyColourTheme: "bwinf",
      ignoreInvalidMoves: false,
      checkEndEveryTurn: true,
      //checkEndCondition: robotEndConditions.checkReachGreenArea,
   };

   subTask.data = {
      easy: [
         {
            tiles: [
               [2, 2, 2, 2, 2, 2, 2],
               [2, 2, 2, 2, 3, 2, 2],
               [2, 1, 1, 1, 1, 1, 2],
               [2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [
               { row: 2, col: 1, dir: 0, type: "robot" }
            ]
         },
         {
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 2, 2, 2, 2, 2, 3, 2, 2, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [
               { row: 2, col: 1, dir: 0, type: "robot" }
            ]
         }
      ],
      medium: [
         {
            tiles: [
               [2, 2, 2, 2, 2, 2, 2],
               [2, 2, 2, 2, 2, 2, 2],
               [2, 1, 1, 1, 1, 1, 2],
               [2, 2, 2, 2, 3, 2, 2],
               [2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [
               { row: 2, col: 1, dir: 0, type: "robot" }
            ]
         },
         {
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 2, 2, 2, 2, 2, 3, 2, 2, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [
               { row: 2, col: 1, dir: 0, type: "robot" }
            ]
         }
      ],
      hard: [
         {
            tiles: [
               [2, 2, 2, 2, 2, 2, 2],
               [2, 2, 2, 2, 1, 2, 2],
               [2, 1, 1, 1, 1, 1, 2],
               [2, 2, 1, 2, 3, 2, 2],
               [2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [
               { row: 2, col: 1, dir: 0, type: "robot" }
            ]
         },
         {
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 2, 2, 1, 2, 2, 3, 2, 2, 2],
               [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
               [2, 2, 2, 2, 1, 2, 1, 2, 2, 2],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ],
            initItems: [
               { row: 2, col: 1, dir: 0, type: "robot" }
            ]
         }
      ]
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
window.taskData.codecastParameters.showStack = true;

