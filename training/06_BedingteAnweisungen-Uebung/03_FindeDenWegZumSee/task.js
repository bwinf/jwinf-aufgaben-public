function initTask(subTask) {
   subTask.gridInfos = {
      context: "robot",
      hideSaveOrLoad: true,
      conceptViewer: false,
      contextType: "labyrinth",
      backgroundColor: "#d4e8c4", // "#e7d0bc",
      borderColor: "#49b675",
      languageStrings: {
         blocklyRobot_lib: {
            label: {
               "obstacleInFront": "vor Hindernis",
            },
            messages: {
               successReachExit: "Bravo, der Roboter hat den See erreicht!",
               failureReachExit: "Der Roboter ist noch nicht beim See.",
            }
         }
      },
      itemTypes: {
         robot: { img: imgPath + "pink_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -20, zOrder: 2 },
         road: { num: 1, img: "road.png", side: 60, isObstacle: false, zOrder: 0 },
         sand: { num: 12, img: "sand.png", side: 60, isObstacle: true, zOrder: 0 },
         beach_tl: { num: 6, img: imgPath + "Beach_tl.png", side: 60, isObstacle: true, zOrder: 0 },
         beach_tr: { num: 7, img: imgPath + "Beach_tr.png", side: 60, isObstacle: true, zOrder: 0 },
         beach_bl: { num: 8, img: imgPath + "Beach_bl.png", side: 60, isObstacle: true, zOrder: 0 },
         beach_br: { num: 9, img: imgPath + "Beach_br.png", side: 60, isObstacle: false, isExit: true, zOrder: 0 },
         bush: { num: 11, img: imgPath + "bush.png", side: 60, isObstacle: true, zOrder: 0 },
         water: { num: 4, img: imgPath + "water.png", side: 60, isObstacle: false, isExit: true, zOrder: 0 },
         gras: { num: 13, img: imgPath + "grass.png", side: 60, isObstacle: true, zOrder: 0 },
         water_full: { num: 17, img: imgPath + "water_full.png", side: 60, isObstacle: true, zOrder: 1 },
         tree: { num: 15, img: imgPath + "tree.png", side: 80, isObstacle: true, zOrder: 2, offsetX: -10, offsetY: 8 },
         flowers: { num: 16, img: imgPath + "flowers.png", side: 50, isObstacle: true, zOrder: 1, offsetX: 5 },
         obstacle_small: { num: 10, img: imgPath + "grey_brick_wall_small.png", side: 60, isObstacle: true, zOrder: 0 },
      },
      maxInstructions: {
         easy: 10,
         medium: 10,
         hard: 18
      },
      limitedUses: [{
         blocks: ["controls_repeat"],
         nbUses: 3
      },
      ],
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["left", "right", "forward", "obstacleInFront"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               shared: ["controls_repeat"],
               easy: ["controls_if"],
               medium: ["logic_negate", "controls_if", "controls_if_else",],
               hard: ["logic_negate", "controls_if", "controls_if_else"]
            }
         },
         pythonAdditionalFunctions: {
            shared: ["range"]
         }
      },
      blocklyColourTheme: "bwinf",
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkReachExit
   };

   subTask.data = {
      easy: [
         {
            tiles: [
               [12, 12, 12, 11, 11, 13, 13, 13, 15, 15],
               [12, 6, 7, 13, 13, 13, 13, 13, 13, 13],
               [12, 8, 9, 1, 1, 1, 1, 1, 13, 13],
               [16, 13, 13, 13, 13, 13, 13, 1, 13, 13],
               [13, 13, 13, 13, 13, 16, 15, 1, 11, 13],
               [13, 13, 13, 13, 15, 13, 13, 1, 11, 13],
               [13, 15, 13, 16, 13, 15, 11, 1, 11, 13],
               [13, 13, 13, 13, 13, 13, 11, 1, 11, 16],
               [1, 1, 1, 1, 1, 1, 1, 1, 15, 13],
               [11, 13, 13, 15, 10, 10, 10, 10, 10, 11],
            ],
            initItems: [
               { row: 8, col: 1, dir: 0, type: "robot" },
            ]
         }
      ],
      medium: [
         {
            tiles: [
               [12, 12, 12, 15, 11, 11, 11, 11, 11, 13],
               [12, 6, 7, 11, 16, 16, 15, 13, 13, 13],
               [12, 8, 9, 1, 1, 1, 1, 1, 11, 13],
               [15, 13, 13, 13, 13, 11, 11, 1, 13, 13],
               [15, 16, 13, 13, 13, 13, 13, 1, 13, 11],
               [1, 1, 1, 1, 1, 1, 1, 1, 13, 11],
               [11, 15, 1, 11, 11, 1, 16, 13, 13, 13],
               [11, 11, 1, 11, 13, 1, 1, 1, 1, 1],
               [1, 1, 1, 15, 15, 13, 13, 13, 11, 13],
               [11, 16, 11, 13, 13, 13, 13, 13, 13, 13],
            ],
            initItems: [
               { row: 8, col: 1, dir: 0, type: "robot" },
            ]
         }
      ],
      hard: [
         {
            tiles: [
               [12, 12, 12, 16, 11, 11, 11, 1, 13, 16],
               [12, 6, 7, 13, 13, 16, 15, 1, 13, 11],
               [12, 8, 9, 1, 1, 1, 1, 1, 13, 11],
               [13, 11, 13, 13, 13, 13, 15, 1, 13, 11],
               [11, 10, 10, 10, 10, 10, 15, 1, 13, 15],
               [1, 1, 1, 1, 1, 1, 13, 1, 1, 1],
               [16, 13, 1, 13, 13, 1, 15, 1, 11, 11],
               [13, 13, 1, 13, 13, 1, 1, 1, 1, 1],
               [1, 1, 1, 16, 13, 13, 13, 13, 11, 11],
               [13, 15, 13, 11, 11, 16, 11, 13, 13, 13],
            ],
            initItems: [
               { row: 8, col: 1, dir: 0, type: "robot" },
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

