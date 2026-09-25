   function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false,
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "flowers",
      //Die BWINF-spezifischen Farben. Bitte in jeder Aufgabendatei laden, da die Blocktypen sonst nicht konsistent eingefärbt sind
      //(Unsere Farben sind natürlich schöner)
      blocklyColourTheme: "bwinf",
      //Gibt an, ob die Programme gespeichert und geladen werden können über das Menu auf der rechten Seite.
      //Für Wettbewerbe immer auf true setzen
      hideSaveOrLoad: true,
      timeoutMinutes: 15, // Nach 15 Minuten warnen
      languageStrings: {
         blocklyRobot_lib: {
         messages: {
            successPickedAllWithdrawables: "Bravo, der Roboter hat das hohe Gras gemäht!",
            failurePickedAllWithdrawables: "Der Roboter hat nicht alles gemäht.",
            failureContainersFilledLess: "Es muss in jeden Erdhaufen eine Blume gepflanzt werden."
         }}
      },
      //Alle Gräser mussen eingesammelt werden.
      checkEndCondition: function (context, lastTurn) {
         //Check ContainersFilled
         var solved = true;
         for (var row = 0; row < context.nbRows; row++) {
            for (var col = 0; col < context.nbCols; col++) {
               var containers = context.getItemsOn(row, col, function (obj) {
                  return (obj.isContainer === true)
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
                     throw (window.languageStrings.messages.failureContainersFilledLess)
                  } else if (context.getItemsOn(row, col, filter).length == 0) {
                     solved = false;
                     throw (window.languageStrings.messages.failureContainersFilled)
                  }

                  if (container.containerFilter != undefined) {
                     if (context.hasOn(row, col, function (obj) {
                           return obj.isWithdrawable === true && !container.containerFilter(obj)
                        })) {
                        solved = false;
                        throw (window.languageStrings.messages.failureContainersFilled)
                     }
                     for (var item in context.bag) {
                        if (filter(context.bag[item]) && context.infos.ignoreBag === undefined) {
                           solved = false;
                           throw (window.languageStrings.messages.failureContainersFilledBag)
                        }
                     }
                  }
               } else {
                  if (context.getItemsOn(row, col, function (obj) {
                        return obj.isWithdrawable === true
                     }).length > 0) {
                     //Check Picked All Withdrawables            
                     var solved = true;
                     for (var row = 0; row < context.nbRows; row++) {
                        for (var col = 0; col < context.nbCols; col++) {
                           if (context.hasOn(row, col, function (obj) {
                                 return obj.isWithdrawable === true;
                              })) {
                              solved = false;
                           }
                        }
                     }
                  }
               }
            }
         }
         if (solved) {
            context.success = true;
            if(subTask.level == "hard" || subTask.level == "medium"){
               throw ("Bravo, der Roboter hat alles gemäht und die Blumen gepflanzt!");
            }else{
               throw ("Bravo, der Roboter hat das hohe Gras gemäht!");
            }

         }
         if (lastTurn) {
            context.success = false;
            throw ("Der Roboter hat nicht alles gemäht.");
         }
      },
      itemTypes: {
         robot: {
            img: imgPath + "garden_robot.png",
            side: 80,
            nbStates: 9,
            isRobot: true,
            offsetX: -11,
            zOrder: 2
         },
         //green_robot: { img: imgPath+"green_robot.png", side: 80, nbStates: 9, isRobot: true, offsetX: -11, zOrder: 2 },
         earth: {
            num: 2,
            img: imgPath + "earth.png",
            side: 60,
            isContainer: true,
            zOrder: 0
         },
         grass: {
            num: 4,
            img: "grass.png",
            side: 60,
            isFake: true,
            isWithdrawable: true,
            isObstacle: false,
            autoWithdraw: true,
            zOrder: 1
         },
         flower: {
            num: 3,
            img: imgPath + "flower.png",
            side: 60,
            isWithdrawable: true,
            isObstacle: false,
            autoWithdraw: true,
            zOrder: 1
         },
         fixed_flower: {
            num: 5,
            img: imgPath + "fixed_flower.png",
            side: 60,
            isObstacle: true,
            zOrder: 1
         },
         number: {
            num: 6,
            side: 60,
            zOrder: 1
         },
         bush: {
            num: 7,
            img: imgPath + "bush.png",
            side: 60,
            isObstacle: true,
            zOrder: 0
         },
         water: {
            num: 8,
            img: imgPath + "water.png",
            side: 60,
            isObstacle: true,
            zOrder: 1
         },
         tree: {
            num: 9,
            img: imgPath + "tree.png",
            side: 80,
            isObstacle: true,
            zOrder: 2,
            offsetX: -15,
            offsetY: 8
         },
         bridge: {
            num: 10,
            img: imgPath + "water+board.png",
            side: 60,
            zOrder: 1
         }
      },
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         easy: 10,
         medium: 10,
         hard: 27
      },
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         //Bei true werden die Blöcke nach Kategorien gruppiert. 
         //Dies kann Sinn ergebene, wenn sehr viele Blöcke zur Verfügung stehen.
         //Dies ist notwendig, wenn Funktionen oder Variablen (zum selber erstellen/nicht vordefiniert) benutzt werden.
         groupByCategory: false,
         //Alle Roboter spezifischen Blocks, welche für die Version jeweils genutzt werden.
         generatedBlocks: {
            robot: {
               easy: ["forward"],
               medium: ["forward", "dropObject", "onContainer"],
               hard: ["left", "right", "forward", "backwards", "dropObject", "onContainer"]
            }
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               shared: ["controls_repeat"],
               //easy: ["controls_repeat"],
               medium: ["controls_if"],
               hard: ["controls_if"]
            },

         }
      },
      //Wie viele Blumen kann der Roboter maximal pflanzen
      bagInit: {
         count: 200,
         type: "flower"
         //type: "fixed_flower"
      },
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version **
      easy: [{
         //Jede Zahl steht für ein spezifisches Object
         //2 ist zum Beispiel ein Beet
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 4, 4, 4, 4, 4, 10, 4, 4, 4, 4, 4, 4, 1],
            [1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1]
         ],
         //Definieren, wo der Roboter starten soll
         //dir: Definiert in welche Richtung der Roboter bei Start schaut
         initItems: [{
            row: 2,
            col: 1,
            dir: 0,
            type: "robot"
         }]
      }],
      //Version ***
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 4, 2, 1, 1, 4, 1, 2, 4, 4, 1, 4, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
            row: 2,
            col: 1,
            dir: 0,
            type: "robot"
         }, ]
      },
      {
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 2, 4, 4, 4, 4, 2, 2, 2, 2, 4, 2, 4, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
            row: 2,
            col: 1,
            dir: 0,
            type: "robot"
         }, ]
      }],
      //Version ****
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1],
            [1, 4, 2, 1, 2, 4, 2, 1, 2, 4, 2, 1, 2, 1, 1],
            [1, 4, 2, 4, 2, 1, 2, 4, 2, 4, 2, 4, 2, 1, 1],
            [1, 1, 1, 4, 1, 4, 1, 1, 1, 4, 4, 1, 4, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         initItems: [{
            row: 4,
            col: 1,
            dir: 0,
            type: "robot"
         }, ]
      }]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
initWrapper(initTask, ["easy", "medium", "hard"], "easy", true);
