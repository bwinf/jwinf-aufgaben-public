function initTask(subTask) {
  subTask.gridInfos = {
    contextType: "cards",
    timeoutMinutes: 15, // Nach 15 Minuten warnen
    hideSaveOrLoad: true, // Verbietet speichern
    languageStrings: {
      // Ändert die lokalen language Strings
      blocklyRobot_lib: {
        label: {
          "withdrawObject": "Keks aufheben",
          "dropObject": "Keks ablegen",
          "onSquare": "auf eckigen Keks",
          "onRound": "auf runden Keks",
        },
        messages: {
          emptyBag: "Der Roboter trägt keinen Keks.",
          failureDropObject: "Der Keks kann hier nicht abgelegt werden.",
          nothingToLookAt: "An dieser Stelle liegt kein Kekse, der genauer betrachtet werden könnte.",
          tooManyObjects: "Der Roboter kann nur einen Keks tragen.",
          successContainersFilled: "Bravo, der Roboter hat alle Kekse sortiert!",
          failureContainersFilled: "Einige Kekse sind nicht richtig einsortiert.",
          failureContainersFilledLess: "Es gibt noch falsch einsortierte Kekse.",
          failureContainersFilledBag: "Der Roboter muss die Kekse ablegen."
        }
      }
    },
    maxInstructions: {
      easy: 10,
      medium: 15,
      hard: 20
    },
    includeBlocks: {
      groupByCategory: {
        easy: false,
        medium: false,
        hard: false
      },
      generatedBlocks: {
        robot: {
          easy: ["east",
            "withdrawObject", "dropObject",
            "onSquare",
          ],
          medium: ["east", "north", "south",
            "withdrawObject", "dropObject",
            "onSquare",
          ],
          hard: ["east", "north", "south",
            "withdrawObject", "dropObject",
            "onSquare", "onRound",
          ]
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
          easy: ["controls_repeat", "controls_if"],
          medium: ["controls_repeat",
            "controls_if"
          ],
          hard: ["controls_repeat",
            "controls_if_else", "controls_if"
          ]
        }
      }
    },
    blocklyColourTheme: "bwinf",
    //Defined here, so that cookies can be outside. Otherwise Include ItemTypes and define that card can be outside
    checkEndCondition: function (context, lastTurn) {
      var solved = true;

      var messages = [
        window.languageStrings.messages.failureContainersFilled,
        window.languageStrings.messages.failureContainersFilledLess,
        window.languageStrings.messages.failureContainersFilledBag
      ];
      var message = 2;
      for (var row = 0; row < context.nbRows; row++) {
        for (var col = 0; col < context.nbCols; col++) {

          if (subTask.level == "medium") {
            if (context.getItemsOn(1, col, function (obj) {
                return obj.isWithdrawable === true && obj.isSquare !== true;
              }).length > 0) {
              solved = false;
              context.success = false;
              throw ("Der Roboter möchte nur die eckigen Kekse aussortieren.")
            }
          }

          var containers = context.getItemsOn(row, col, function (obj) {
            return (obj.isContainer === true) && (!obj.isFake)
          });
          if (containers.length != 0) {
            var container = containers[0];
            if (container.containerSize == undefined && container.containerFilter == undefined) {
              container.containerSize = 1;
            }
            var filter;
            if (container.containerFilter == undefined)
              filter = function (obj) {
                return obj.isWithdrawable === true;
              };
            else
              filter = function (obj) {
                return obj.isWithdrawable === true && container.containerFilter(obj)
              };

            if (container.containerSize != undefined && context.getItemsOn(row, col, filter).length != container.containerSize) {
              solved = false;
              message = Math.min(message, 1);
            } else if (context.getItemsOn(row, col, filter).length == 0) {
              solved = false;
              message = Math.min(message, 0);
            }

            if (container.containerFilter != undefined) {
              if (context.hasOn(row, col, function (obj) {
                  return obj.isWithdrawable === true && !container.containerFilter(obj)
                })) {
                solved = false;
                message = Math.min(message, 0);
              }
              for (var item in context.bag) {
                if (filter(context.bag[item]) && context.infos.ignoreBag === undefined) {
                  solved = false;
                  message = Math.min(message, 2);
                }
              }
            }
          }
        }
      }

      if (solved) {
        context.success = true;
        throw (window.languageStrings.messages.successContainersFilled);
      }
      if (lastTurn) {
        context.success = false;
        throw (messages[message]);
      }
    }
  };

  subTask.data = {
    easy: [{
        tiles: [
          [1, 1, 1, 16, 16, 17, 16, 1, 1, 1, 2]
        ],
        toPick: 3,
        initItems: [{
          row: 0,
          col: 0,
          type: "robot"
        }]
      },

      {
        tiles: [
          [1, 1, 1, 17, 16, 16, 16, 1, 1, 1, 2]
        ],
        toPick: [3],
        initItems: [{
          row: 0,
          col: 0,
          type: "robot"
        }]
      },
      {
        tiles: [
          [1, 1, 16, 1, 17, 1, 1, 16, 1, 1, 2]
        ],
        toPick: [3],
        initItems: [{
          row: 0,
          col: 0,
          type: "robot"
        }]
      },
    ],
    medium: [{
        tiles: [
          [1, 16, 17, 16, 17, 16, 17, 16, 16, 17, 16],
          [1, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1]
        ],
        initItems: [{
          row: 0,
          col: 0,
          type: "robot"
        }]
      },
      {
        tiles: [
          [1, 17, 17, 17, 16, 16, 17, 17, 17, 16, 17],
          [1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2]
        ],
        initItems: [{
          row: 0,
          col: 0,
          type: "robot"
        }]
      },
      {
        tiles: [
          [1, 17, 16, 17, 17, 17, 17, 17, 17, 17, 17],
          [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2]
        ],
        initItems: [{
          row: 0,
          col: 0,
          type: "robot"
        }]
      }
    ],
    hard: [{
        tiles: [
          [1, 3, 1, 3, 1, 1, 1, 3, 3, 1, 3],
          [1, 16, 17, 16, 1, 1, 17, 16, 16, 17, 16],
          [1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1]
        ],
        initItems: [{
          row: 1,
          col: 0,
          type: "robot"
        }]
      },

      {
        tiles: [
          [1, 1, 3, 3, 1, 3, 1, 1, 3, 1, 3],
          [1, 17, 16, 16, 1, 16, 17, 17, 16, 17, 16],
          [1, 2, 1, 1, 1, 1, 2, 2, 1, 2, 1]
        ],
        initItems: [{
          row: 1,
          col: 0,
          type: "robot"
        }]
      },

      {
        tiles: [
          [1, 3, 1, 1, 1, 1, 3, 3, 3, 1, 1],
          [1, 16, 17, 17, 1, 1, 16, 16, 16, 17, 17],
          [1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2]
        ],
        initItems: [{
          row: 1,
          col: 0,
          type: "robot"
        }]
      },
    ]
  };
  initBlocklySubTask(subTask);
  displayHelper.thresholdEasy = 5000;
  displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);