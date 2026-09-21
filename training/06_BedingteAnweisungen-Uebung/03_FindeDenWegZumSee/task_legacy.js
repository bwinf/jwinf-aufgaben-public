function initTask(subTask) {
   subTask.gridInfos = {
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
         robot: { img: imgPath+"pink_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -20, zOrder: 2 },
          road: { num: 1, img: "road.png", side: 60, isObstacle: false, zOrder: 0 },
          sand: { num: 3, img: "sand.png", side: 60, isObstacle: true, zOrder: 0 },
          beach_tl: { num: 6, img: imgPath+"Beach_tl.png", side: 60, isObstacle: true, zOrder: 0 },
          beach_tr: { num: 7, img: imgPath+"Beach_tr.png", side: 60, isObstacle: true, zOrder: 0 },
          beach_bl: { num: 8, img: imgPath+"Beach_bl.png", side: 60, isObstacle: true, zOrder: 0 },
          beach_br: { num: 9, img: imgPath+"Beach_br.png", side: 60, isObstacle: false, isExit:true,zOrder: 0 },
          bush: { num: 2, img: imgPath+"bush.png", side: 60, isObstacle: true,  zOrder: 0 },
          water: { num: 4, img: imgPath+"water.png", side: 60, isObstacle: false, isExit:true, zOrder: 0 },
          gras: { num: 5, img: imgPath+"grass.png", side: 60, isObstacle: true, zOrder: 0 },
          water_full: { num: 17, img: imgPath+"water_full.png", side: 60, isObstacle: true, zOrder: 1 },
          tree: { num: 15, img: imgPath+"tree.png", side: 80, isObstacle: true, zOrder: 2, offsetX: -10, offsetY: 8 },
          flowers: { num: 16, img: imgPath+"flowers.png", side: 50, isObstacle: true, zOrder: 1, offsetX: 5 },
          obstacle_small: { num: 10, img: imgPath+"grey_brick_wall_small.png", side: 60, isObstacle: true, zOrder: 0 },
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
              medium: ["logic_negate", "controls_if", "controls_if_else", ],
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
                   [3, 3, 3, 2, 2, 5, 5, 5,15,15],
                   [3, 6, 7, 5, 5, 5, 5, 5, 5, 5],
                   [3, 8, 9, 1, 1, 1, 1, 1, 5, 5],
                   [16, 5, 5, 5, 5, 5, 5, 1, 5, 5],
                   [5, 5, 5, 5, 5,16,15, 1, 2, 5],
                   [5, 5, 5, 5,15, 5, 5, 1, 2, 5],
                   [5, 15, 5,16, 5,15, 2, 1, 2, 5],
                   [5, 5, 5, 5, 5, 5, 2, 1, 2,16],
                   [1, 1, 1, 1, 1, 1, 1, 1,15, 5],
                   [2, 5, 5, 15, 10, 10, 10, 10, 10, 2],
               ],
            initItems: [
                  { row: 8, col: 1, dir: 0, type: "robot" },
               ]
         }
      ],
      medium: [
         {
            tiles: [
            [3, 3, 3, 15, 2, 2, 2, 2, 2, 5],
            [3, 6, 7, 2, 16, 16, 15, 5, 5, 5],
            [3, 8, 9, 1, 1, 1, 1, 1, 2, 5],
            [15, 5, 5, 5, 5, 2, 2, 1, 5, 5],
            [15,16, 5, 5, 5, 5, 5, 1, 5, 2],
            [1, 1, 1, 1, 1, 1, 1, 1, 5, 2],
            [2,15, 1, 2, 2, 1,16, 5, 5, 5],
            [2, 2, 1, 2, 5, 1, 1, 1, 1, 1],
            [1, 1, 1,15,15, 5, 5, 5, 2, 5],
            [2,16, 2, 5, 5, 5, 5, 5, 5, 5],
               ],
            initItems: [
                  { row: 8, col: 1, dir: 0, type: "robot" },
               ]
         }
      ],
      hard: [
         {
            tiles: [
            [3, 3, 3, 16, 2, 2, 2, 1, 5, 16],
            [3, 6, 7, 5, 5,16,15, 1, 5, 2],
            [3, 8, 9, 1, 1, 1, 1, 1, 5, 2],
            [5, 2, 5, 5, 5, 5,15, 1, 5, 2],
            [2,10,10,10,10,10,15, 1, 5, 15],
            [1, 1, 1, 1, 1, 1, 5, 1, 1, 1],
            [16, 5, 1, 5, 5, 1,15, 1, 2, 2],
            [5, 5, 1, 5, 5, 1, 1, 1, 1, 1],
            [1, 1, 1, 16, 5, 5, 5, 5, 2, 2],
            [5, 15, 5, 2, 2,16, 2, 5, 5, 5],
               ],
            initItems: [
                  { row: 8, col: 1, dir: 0, type: "robot" },
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 120;
   displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
