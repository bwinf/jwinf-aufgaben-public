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
          sand: { num: 12, img: "sand.png", side: 60, isObstacle: true, zOrder: 0 },
          beach_tl: { num: 6, img: imgPath+"Beach_tl.png", side: 60, isObstacle: true, zOrder: 0 },
          beach_tr: { num: 7, img: imgPath+"Beach_tr.png", side: 60, isObstacle: true, zOrder: 0 },
          beach_bl: { num: 8, img: imgPath+"Beach_bl.png", side: 60, isObstacle: true, zOrder: 0 },
          beach_br: { num: 9, img: imgPath+"Beach_br.png", side: 60, isObstacle: false, isExit:true,zOrder: 0 },
          bush: { num: 11, img: imgPath+"bush.png", side: 60, isObstacle: true,  zOrder: 0 },
          water: { num: 4, img: imgPath+"water.png", side: 60, isObstacle: false, isExit:true, zOrder: 0 },
          gras: { num: 20, img: imgPath+"grass.png", side: 60, isObstacle: true, zOrder: 0 },
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
                   [12, 12, 12, 11, 11, 20, 20, 20,15,15],
                   [12, 6, 7, 20, 20, 20, 20, 20, 20, 20],
                   [12, 8, 9, 1, 1, 1, 1, 1, 20, 20],
                   [16, 20, 20, 20, 20, 20, 20, 1, 20, 20],
                   [20, 20, 20, 20, 20,16,15, 1, 11, 20],
                   [20, 20, 20, 20,15, 20, 20, 1, 11, 20],
                   [20, 15, 20,16, 20,15, 11, 1, 11, 20],
                   [20, 20, 20, 20, 20, 20, 11, 1, 11,16],
                   [1, 1, 1, 1, 1, 1, 1, 1,15, 20],
                   [11, 20, 20, 15, 10, 10, 10, 10, 10, 11],
               ],
            initItems: [
                  { row: 8, col: 1, dir: 0, type: "robot" },
               ]
         }
      ],
      medium: [
         {
            tiles: [
            [12, 12, 12, 15, 11, 11, 11, 11, 11, 20],
            [12, 6, 7, 11, 16, 16, 15, 20, 20, 20],
            [12, 8, 9, 1, 1, 1, 1, 1, 11, 20],
            [15, 20, 20, 20, 20, 11, 11, 1, 20, 20],
            [15,16, 20, 20, 20, 20, 20, 1, 20, 11],
            [1, 1, 1, 1, 1, 1, 1, 1, 20, 11],
            [11,15, 1, 11, 11, 1,16, 20, 20, 20],
            [11, 11, 1, 11, 20, 1, 1, 1, 1, 1],
            [1, 1, 1,15,15, 20, 20, 20, 11, 20],
            [11,16, 11, 20, 20, 20, 20, 20, 20, 20],
               ],
            initItems: [
                  { row: 8, col: 1, dir: 0, type: "robot" },
               ]
         }
      ],
      hard: [
         {
            tiles: [
            [12, 12, 12, 16, 11, 11, 11, 1, 20, 16],
            [12, 6, 7, 20, 20,16,15, 1, 20, 11],
            [12, 8, 9, 1, 1, 1, 1, 1, 20, 11],
            [20, 11, 20, 20, 20, 20,15, 1, 20, 11],
            [11,10,10,10,10,10,15, 1, 20, 15],
            [1, 1, 1, 1, 1, 1, 20, 1, 1, 1],
            [16, 20, 1, 20, 20, 1,15, 1, 11, 11],
            [20, 20, 1, 20, 20, 1, 1, 1, 1, 1],
            [1, 1, 1, 16, 20, 20, 20, 20, 11, 11],
            [20, 15, 20, 11, 11,16, 11, 20, 20, 20],
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

initWrapper(initTask, ["hard"], null, true);
