function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false,
      contextType: "gears",
		nbPlatforms: 10,
		maxInstructions: {
            easy: 10,
            medium: 12,
            hard: 20
         },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
				robot: {
					shared:["forward", "withdrawObject", "dropObject", "jump"],
					medium:["dropPlatformInFront"],
					hard:["turnAround", "dropPlatformInFront", "dropPlatformAbove"]
				}
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               easy: [],
               medium: [],
               hard: []
            }
         }
      },
      blocklyColourTheme: "bwinf",
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1],
                   [1, 5, 1, 1, 4],
                   [2, 2, 2, 2, 2],
                   [1, 1, 1, 1, 1],
						 [2, 2, 1, 1, 1]
               ],
            initItems: [
                  { row: 5, col: 0, dir: 0, type: "robot" },
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 4],
                   [1, 1, 1, 1, 2],
                   [1, 1, 1, 5, 1],
                   [2, 2, 1, 2, 2],
                   [1, 1, 1, 1, 1],
						 [2, 2, 1, 1, 1],
               ],
            initItems: [
                  { row: 5, col: 0, dir: 0, type: "robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 4],
                   [1, 1, 1, 1, 1, 1, 1],
                   [5, 1, 4, 1, 5, 1, 1],
						 [1, 1, 2, 2, 2, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1],
                   [2, 2, 2, 1, 1, 1, 1],
               ],
            initItems: [
                  { row: 6, col: 1, dir: 2, type: "robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["medium"], null, true);
