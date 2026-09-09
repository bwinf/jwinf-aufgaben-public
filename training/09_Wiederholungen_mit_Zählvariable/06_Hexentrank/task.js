function initTask(subTask) {
  subTask.gridInfos = {
      context: "robot",
    contextType: "cards",
    conceptViewer: true,
    timeoutMinutes: 10, // Nach 15 Minuten warnen
    hideSaveOrLoad: true,
    bagSize: 100,
    languageStrings: {
      blocklyRobot_lib: {
        label: {
          "withdrawObject": "hebe Zutat auf",
          "dropObject": "lege Zutat ab",
        },
        messages: {
          emptyBag: "Der Roboter trägt nichts bei sich.",
          failureDropObject: "Hier kann nichts abgelegt werden.",
          nothingToLookAt: "An dieser Stelle liegt nichts, was genauer betrachtet werden könnte.",
          successContainersFilled: "Bravo, der Roboter hat den Trank korrekt zubereitet!",
          failureContainersFilled: "Einige Zutaten fehlen noch.",
          failureContainersFilledBag: "Der Roboter muss die Zutaten in den Kessel werfen."
        }
      }
    },
    maxInstructions: {
      easy: 20,
      medium: 30,
      hard: 40
    },
    includeBlocks: {
      groupByCategory: {
        easy: false,
        medium: false,
        hard: true
      },
      variables: {
        easy: ['i'],
        medium: ['i', 'anzahlZutaten'],
        hard: ['i', 'anzahlZutaten'],
      },
      variablesOnlyBlocks: {
        easy: ['get'],
        medium: ['get', 'set', 'incr'],
        hard: ['get', 'set', 'incr'],
      },
      generatedBlocks: {
        robot: {
          easy: ["east", "west", "north", "south",
            "withdrawObject", "dropObject",
             
          ],
          medium: ["east", "west", "north", "south",
            "withdrawObject", "dropObject",
            
          ],
          hard: ["east", "west", "north", "south",
            "withdrawObject", "dropObject",
             
          ]
        }
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: {
          easy: [],
          medium: [],
          hard: ["variables"]
        },
        singleBlocks: {
          easy: ["controls_for", "controls_repeat_ext"],
          medium: ["controls_for", "controls_repeat_ext", "math_number", "math_arithmetic"],
          hard: ["controls_for", "controls_repeat_ext", "math_number", "math_arithmetic"]
        }
      }
    },
    limitedUses: [{
           blocks: ["withdrawObject"],
           nbUses: 2
        },
      ],


    itemTypes: {
            robot: { img: imgPath+"red_robot.png", side: 70, nbStates: 1, isRobot: true, offsetX: -5, offsetY: 5, zOrder: 2 },
            roundQuadrille: {num: 10, img: imgPath+"card_roundQuadrille.png", side: 60, isWithdrawable: true, isRound: true, isQuadrille: true, zOrder: 1 },
            squareQuadrille: { num: 11,img: imgPath+"card_squareQuadrille.png", side: 60, isWithdrawable: true, isSquare: true, isQuadrille: true, zOrder: 1 },
            triangleQuadrille: {num: 12, img: "butterfly.svg", side: 50, isWithdrawable: true, isTriangle: true, isQuadrille: true, zOrder: 1,offsetX:5,offsetY:-5 },
            roundStriped: {num: 13, img: "leaf.svg", side: 50, isWithdrawable: true, isRound: true, isStriped: true, zOrder: 1, offsetX:5,offsetY:-5 },
            squareStriped: {num: 14, img: "frog.svg", side: 50, isWithdrawable: true, isSquare: true, isStriped: true, zOrder: 1, offsetX:5,offsetY:-5 },
            triangleStriped: {num: 15, img: imgPath+"card_triangleStriped.png", side: 50, isWithdrawable: true, isTriangle: true, isStriped: true, zOrder: 1 },
            roundDotted: {num: 16, img: "bat.svg", side: 50, isWithdrawable: true, isRound: true, isDotted: true, zOrder: 1, offsetX:5,offsetY:-5  },
            squareDotted: { num: 17,img: "mouse.svg", side: 50, isWithdrawable: true, isSquare: true, isDotted: true, zOrder: 1, offsetX:5,offsetY:-5},
            triangleDotted: {num: 18, img: imgPath+"card_triangleDotted.png", side: 60, isWithdrawable: true, isTriangle: true, isDotted: true, zOrder: 1 },
            chauldron: {num: 20, img: "chauldron.svg", side: 90,offsetX: -15, offsetY: 15, zOrder: 1,  },


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
          var objects = context.getItemsOn(0, 0, function (obj) {
            return (obj.isWithdrawable === true) && (!obj.isFake)
          });
          if (objects.length != 0) {
            if (subTask.level == "easy"){
              if(objects.length != 5){
                solved = false
                throw("Der Roboter hat nicht alle benötigten Zutaten in den Kessel geworfen.")
              } else {
              if(objects[4].type == "roundDotted" &&
                 objects[3].type == "squareStriped" &&
                 objects[2].type == "triangleQuadrille" &&
                 objects[1].type == "roundStriped" &&
                 objects[0].type == "squareDotted"){
                  solved = true
                 }
                else {
                  solved = false
                  throw("Der Roboter hat die Zutaten nicht in der richtigen Reihenfolge in den Kessel geworfen.")
                }
              }
            }
            if (subTask.level == "medium"){
              console.log(objects)
              if(objects.length != 31){
                solved = false
                throw("Der Roboter hat nicht alle benötigten Zutaten in den Kessel geworfen.")
              } else {
              if(objects[0].type == "squareDotted" &&
                 objects[1].type == "roundStriped" &&
                 objects[2].type == "roundStriped" &&
                 objects[3].type == "triangleQuadrille" &&
                 objects[4].type == "triangleQuadrille" &&
                 objects[5].type == "triangleQuadrille" &&
                 objects[6].type == "triangleQuadrille" &&
                 objects[7].type == "squareStriped" &&
                 objects[8].type == "squareStriped" &&
                 objects[9].type == "squareStriped" &&
                 objects[10].type == "squareStriped" &&
                 objects[11].type == "squareStriped" &&
                 objects[12].type == "squareStriped" &&
                 objects[13].type == "squareStriped" &&
                 objects[14].type == "squareStriped" &&
                 objects[15].type == "roundDotted" &&
                 objects[16].type == "roundDotted" &&
                 objects[17].type == "roundDotted" &&
                 objects[18].type == "roundDotted" &&
                 objects[19].type == "roundDotted" &&
                 objects[20].type == "roundDotted" &&
                 objects[21].type == "roundDotted" &&
                 objects[22].type == "roundDotted" &&
                 objects[23].type == "roundDotted" &&
                 objects[24].type == "roundDotted" &&
                 objects[25].type == "roundDotted" &&
                 objects[26].type == "roundDotted" &&
                 objects[27].type == "roundDotted" &&
                 objects[28].type == "roundDotted" &&
                 objects[29].type == "roundDotted" &&
                 objects[30].type == "roundDotted" ){
                  solved = true
                 }
                else {
                  solved = false
                  throw("Der Roboter hat die Zutaten nicht in der richtigen Reihenfolge in den Kessel geworfen.")
                }
              }
              
            }
            if (subTask.level == "hard"){
              console.log(objects)
              if(objects.length != 12){
                solved = false
                throw("Der Roboter hat nicht alle benötigten Zutaten in den Kessel geworfen.")
              } else {
              if(objects[0].type == "squareDotted" &&
                 objects[1].type == "roundStriped" &&
                 objects[2].type == "triangleQuadrille" &&
                 objects[3].type == "triangleQuadrille" &&
                 objects[4].type == "squareStriped" &&
                 objects[5].type == "squareStriped" &&
                 objects[6].type == "squareStriped" &&
                 objects[7].type == "roundDotted" &&
                 objects[8].type == "roundDotted" &&
                 objects[9].type == "roundDotted" &&
                 objects[10].type == "roundDotted" &&
                 objects[11].type == "roundDotted"){
                  solved = true
                 }
                else {
                  solved = false
                  throw("Der Roboter hat die Zutaten nicht in der richtigen Reihenfolge in den Kessel geworfen.")
                }
              }
              
            }
          } else{
            solved = false
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
    easy: [
      {
        tiles: [
          [20, 1, 1 , 1 , 1,1 ,1 ],
          [1, 1, 1 , 1 , 1,1,1 ],
          [1, 1, 1 ,1, 1 , 1, 1 ],

        ],
        initItems: [{
          row: 1,
          col: 0,
          type: "robot"
        },
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},

{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},

{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},

{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},

{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},

]
      },
    ],
    
    medium: [
      {
        tiles: [
          [20, 1, 1 , 1 , 1,1 ,1 ],
          [1, 1, 1 , 1 , 1,1,1 ],
          [1, 1, 1 ,1, 1 , 1, 1 ],

        ],
        initItems: [{
          row: 1,
          col: 0,
          type: "robot"
        },
        {
          row: 1,
          col: 2,
          type: "#fffff"
        },
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},

{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},

{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},

{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},

{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},

]
      },
    ],

    hard: [
      {
        tiles: [
          [20, 1, 1 , 1 , 1,1 ,1 ],
          [1, 1, 1 , 1 , 1,1,1 ],
          [1, 1, 1 ,1, 1 , 1, 1 ],

        ],
        initItems: [{
          row: 1,
          col: 0,
          type: "robot"
        },
        {
          row: 1,
          col: 2,
          type: "#fffff"
        },
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},
{row: 0, col: 1, type: "roundDotted"},

{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},
{row: 0, col: 2, type: "squareStriped"},

{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},
{row: 0, col: 3, type: "triangleQuadrille"},

{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},
{row: 0, col: 4, type: "roundStriped"},

{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},
{row: 0, col: 5, type: "squareDotted"},

]
      },
    ],
  };
  initBlocklySubTask(subTask);
}

window.initBlocklySubTask = function () {};
window.taskData = {};
window.taskData.waitInit = function () { initTask(window.taskData);
   function ccTask(){try{return window.Codecast.environments.main.store.getState().task;}catch(e){return null;}}
   try{Object.defineProperty(window.taskData,"level",{configurable:true,get:function(){var t=ccTask();return t?t.currentLevel:undefined;},set:function(){}});Object.defineProperty(window.taskData,"iTestCase",{configurable:true,get:function(){var t=ccTask();return(t&&t.currentTestId!=null)?t.currentTestId:0;},set:function(){}});}catch(e){} };
window.taskData.codecastParameters = {
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

