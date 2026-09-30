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
          sand: { num: 20, img: "sand.png", side: 60, isObstacle: true, zOrder: 0 },
          beach_tl: { num: 6, img: imgPath+"Beach_tl.png", side: 60, isObstacle: true, zOrder: 0 },
          beach_tr: { num: 7, img: imgPath+"Beach_tr.png", side: 60, isObstacle: true, zOrder: 0 },
          beach_bl: { num: 8, img: imgPath+"Beach_bl.png", side: 60, isObstacle: true, zOrder: 0 },
          beach_br: { num: 9, img: imgPath+"Beach_br.png", side: 60, isObstacle: false, isExit:true,zOrder: 0 },
          bush: { num: 21, img: imgPath+"bush.png", side: 60, isObstacle: true,  zOrder: 0 },
          water: { num: 4, img: imgPath+"water.png", side: 60, isObstacle: false, isExit:true, zOrder: 0 },
          gras: { num: 22, img: imgPath+"grass.png", side: 60, isObstacle: true, zOrder: 0 },
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
                   [20, 20, 20, 21, 21, 22, 22, 22,15,15],
                   [20, 6, 7, 22, 22, 22, 22, 22, 22, 22],
                   [20, 8, 9, 1, 1, 1, 1, 1, 22, 22],
                   [16, 22, 22, 22, 22, 22, 22, 1, 22, 22],
                   [22, 22, 22, 22, 22,16,15, 1, 21, 22],
                   [22, 22, 22, 22,15, 22, 22, 1, 21, 22],
                   [22, 15, 22,16, 22,15, 21, 1, 21, 22],
                   [22, 22, 22, 22, 22, 22, 21, 1, 21,16],
                   [1, 1, 1, 1, 1, 1, 1, 1,15, 22],
                   [21, 22, 22, 15, 10, 10, 10, 10, 10, 21],
               ],
            initItems: [
                  { row: 8, col: 1, dir: 0, type: "robot" },
               ]
         }
      ],
      medium: [
         {
            tiles: [
            [20, 20, 20, 15, 21, 21, 21, 21, 21, 22],
            [20, 6, 7, 21, 16, 16, 15, 22, 22, 22],
            [20, 8, 9, 1, 1, 1, 1, 1, 21, 22],
            [15, 22, 22, 22, 22, 21, 21, 1, 22, 22],
            [15,16, 22, 22, 22, 22, 22, 1, 22, 21],
            [1, 1, 1, 1, 1, 1, 1, 1, 22, 21],
            [21,15, 1, 21, 21, 1,16, 22, 22, 22],
            [21, 21, 1, 21, 22, 1, 1, 1, 1, 1],
            [1, 1, 1,15,15, 22, 22, 22, 21, 22],
            [21,16, 21, 22, 22, 22, 22, 22, 22, 22],
               ],
            initItems: [
                  { row: 8, col: 1, dir: 0, type: "robot" },
               ]
         }
      ],
      hard: [
         {
            tiles: [
            [20, 20, 20, 16, 21, 21, 21, 1, 22, 16],
            [20, 6, 7, 22, 22,16,15, 1, 22, 21],
            [20, 8, 9, 1, 1, 1, 1, 1, 22, 21],
            [22, 21, 22, 22, 22, 22,15, 1, 22, 21],
            [21,10,10,10,10,10,15, 1, 22, 15],
            [1, 1, 1, 1, 1, 1, 22, 1, 1, 1],
            [16, 22, 1, 22, 22, 1,15, 1, 21, 21],
            [22, 22, 1, 22, 22, 1, 1, 1, 1, 1],
            [1, 1, 1, 16, 22, 22, 22, 22, 21, 21],
            [22, 15, 22, 21, 21,16, 21, 22, 22, 22],
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

initWrapper(initTask, ["easy", "medium"], null, true);
