function initTask(subTask) {
  subTask.gridInfos = {
    conceptViewer: false,
    //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
    contextType: "paint",
    showCardinals: false,
    showLabels: true,
    blocklyColourTheme: "bwinf",
    //Gibt an, wie viele Blöcke zur Verfügung stehen
    //Für alle Versionen jeweils 20
    maxInstructions: {
      easy: 30,
      medium: 80,
      hard: 300
    },
    limitedUses:[
      //{blocks:['set'], nbUses: {easy: 1, medium: 1, hard: 1}}
    ],
    //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
    includeBlocks: {
      groupByCategory: true,
      //Alle Roboter spezifischen Blocks, welche für die Version jeweils genutzt werden.
      generatedBlocks: {
        robot: {
          shared: ["west", "east", "north", "south", "row", "col" , "readNumber", "writeNumber", "dropObject"],
          hard: ["onPaint"]
        },
      },
      //Allgemeine Blöcke wie Bedingungen und Schleifen.
      standardBlocks: {
        includeAll: false,
        singleBlocks: {
          shared: [
            "controls_repeat_ext",
            "controls_untilWhile",
            "controls_for",
            "logic_compare",
            "logic_operation", 
            "logic_negate", 
            "logic_boolean",
            "controls_if",
            "controls_if_else",
            "math_number",
            "math_arithmetic",
            "math_modulo"
          ],
          hard: ["math_extra_single_noShadow"]
        },
        wholeCategories: {
          shared: ["functions", "variables"],
          hard: ["lists"]
        },
      },
      variablesOnlyBlocks:{
        shared: ['set', 'get', "incr"]
      }
    },
    checkEndCondition: function (context, lastTurn) {
      if (lastTurn) {
        for (var iRow = 0; iRow < context.tiles.length; iRow++) {
          var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
          for (var iCol = 0; iCol < row.length; iCol++) {
            var items = context.getItemsOn(iRow, iCol, function (obj) {
              return obj.isBoard === true;
            });
            var hasNumber = (items.length != 0);
            if (hasNumber) {
              var item = items[0];
              if (item.value != item.answer) {
                context.success = false;
                throw ("Es steht nicht überall die richtige Zahl.");
              }
            }
          }
        }
        
        for (var iRow = 0; iRow < context.tiles.length; iRow++) {
          var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
          for (var iCol = 0; iCol < row.length; iCol++) {
            var items = context.getItemsOn(iRow, iCol, function (obj) {
              return obj.isContainer === true;
            });
            var hasContainer = (items.length != 0);
            var filter = function(obj) { return obj.isWithdrawable === true; };
            var item = items[0];
            if (hasContainer) {
              if (context.getItemsOn(iRow, iCol, filter).length == 0) {
                context.success = false;
                throw ("Es sind nicht alle Felder korrekt markiert.");
              }
            } else{
              if (context.getItemsOn(iRow, iCol, filter).length > 0) {
                context.success = false;
                throw ("Es sind zu viele Felder markiert.");
              }
            }
          }
        }
        
        if (true) {
          context.success = true;
          throw ("Alle Zahlen sind korrekt eingetragen!");
        }
      }
    }  
  };
  
  var easyLevel1 = {data: [2, 3, 6, 2, 1, 9], ziffer: 7, correct: true}
  var easyLevel2 = {data: [2, 3, 6, 2, 1, 9], ziffer: 6, correct: false}
  var easyLevel3 = {data: [2, 3, 6, 2, 1, 8], ziffer: 8, correct: true}
  var easyLevel4 = {data: [2, 3, 6, 2, 1, 8], ziffer: 0, correct: false}
  var easyLevel5 = {data: [1, 2, 3, 4, 5, 6], ziffer: 9, correct: true}
  var easyLevel6 = {data: [1, 2, 3, 4, 5, 5], ziffer: 9, correct: false}
  
  
  
  var hardPos1 = [
    [2, 3, 5, 1, 9],
    [1, 4, 2, 0, 3],
    [0, 0, 1, 3, 6],
    [1, 9, 6, 2, 2],
    [6, 4, 6, 4, 0]
  ] 
  
  var hardPos1f1 = hardPos1.slice()
  hardPos1f1[0] = hardPos1f1[0].slice()
  hardPos1f1[0][4] = 0
  
  var hardPos1f2 = hardPos1.slice()
  hardPos1f2[0] = hardPos1f2[0].slice()
  hardPos1f2[1] = hardPos1f2[1].slice()
  hardPos1f2[0][2] = 0
  hardPos1f2[1][3] = 1

  var hardPos1f3 = hardPos1.slice()
  hardPos1f3[4] = hardPos1f3[4].slice()
  hardPos1f3[4][3] = 3
  
  
  var hardLevel1 = {
    data : hardPos1,
    corrected: hardPos1,
    legal : true,
    fixable : true,
    lineErrors : [],
    colErrors : [],
  }
  
  var hardLevel1f1 = {
    data : hardPos1f1,
    corrected: hardPos1,
    legal : false,
    fixable : true,
    lineErrors : [0],
    colErrors : [4],
  }
  
  var hardLevel1f2 = {
    data : hardPos1f2,
    corrected: hardPos1f2,
    legal : false,
    fixable : false,
    lineErrors : [0, 1],
    colErrors : [2, 3],
  }

  var hardLevel1f3 = {
    data : hardPos1f3,
    corrected: hardPos1,
    legal : false,
    fixable : true,
    lineErrors : [4],
    colErrors : [3],
  }
  
  /**
  * Erzeugt ein Levelobjekt.
  * @returns Objekt mit Tiles und Items
  */
  function generateEasyLevel(level) {
    var pos = level.data
    var tiles = [1];
    for (var i=0; i < pos.length; i++) {
      tiles.push(1)
    }
    tiles.push(90)
    if(level.correct) {
      tiles.push(1)
    } else {
      tiles.push(2)
    }
    return {
      tiles: [tiles],
      initItems: generateValuesEasy(pos, level.ziffer),
    };
  }
  
  /**
  * Erzeugt das Array aus Items des Levels
  * @param {*} pos Koordinatentupel für die Markierungen 
  * @returns Das Itemarray
  */
  function generateValuesEasy(pos, ziffer) {
    var items = [
      {
        row: 0,
        col: 0,
        type: "robot",
      },
    ];
    
    for (var i = 0; i < pos.length; i++) {
      items.push({
        row: 0,
        col: i + 1,
        type: "board_notwritable",
        value: pos[i],
      });
    }
    
    items.push({
      row:0,
      col: pos.length + 1,
      type: "board_notwritable",
      value: ziffer
    })  
    return items;
  }
  
  
  
  function generateMediumLevel(pos) {
    var line = [1];
    var bottom = [1]
    for (var i = 0; i< pos[0].length; i++) {
      line.push(1)
      bottom.push(90)
    }
    line.push(90)
    bottom.push(90)
    var tiles = [Array(pos[0].length+3).fill(1)]
    for (var i = 0; i < pos.length; i++) {
      tiles.push(line.slice())
    }
    tiles.push(bottom)
    tiles.push(Array(pos[0].length+3).fill(1))
    return {
      tiles: tiles,
      initItems: generateValuesMedium(pos),
    }
  } 
  
  function generateHardLevel(level, levelIsHard) {
    var data = level.data
    var cols = data[0].length - 1
    var lines = data.length - 1
    var items = [
      {
        row: 0,
        col: 0,
        type: "robot",
      },
    ];
    
    tiles = [Array(data[0].length + 2).fill(1)]
    if(!level.fixable) {
      tiles[0][0] = levelIsHard ? 2 : 1
    }
    
    for(var i = 0; i < lines; i++) {
      line = [1]
      for (var j = 0; j < cols; j++) {
        line.push(1)
        items.push({
          row: i+1,
          col: j+1,
          type: levelIsHard ? "board" : "board_notwritable",
          value: data[i][j],
          answer: levelIsHard ? level.corrected[i][j] : null
        })
      }
      line.push(90)
      items.push({
        row: i + 1,
        col: cols + 1,
        type: levelIsHard ? "board" : "board_notwritable",
        value: data[i][cols],
        answer: levelIsHard ? level.corrected[i][cols] : null
      })
      line.push(1)
      tiles.push(line)
    }
    line = [1]
    for (var j = 0; j < cols + 1; j++) {
      line.push(90)
      items.push({
        row: lines + 1,
        col: j + 1,
        type: levelIsHard ? "board" : "board_notwritable",
        value: data[lines][j],
        answer: levelIsHard ? level.corrected[lines][j] : null
      })
    }
    line.push(1)
    tiles.push(line)
    line = Array(data[0].length+2).fill(1)
    tiles.push(line)
    
    for(lineError of level.lineErrors) {
      tiles[lineError + 1][cols + 2] = 2
    }
    for(colError of level.colErrors) {
      tiles[lines + 2][colError+1] = 2
    }
    return {
      tiles: tiles,
      initItems: items
    }
  } 
  
  
  
  
  function generateValuesMedium(pos) {
    var items = [
      {
        row: 0,
        col: 0,
        type: "robot",
      },
    ];
    for (var i = 0; i < pos.length; i++) {
      var sum = 0;
      for (var j = 0; j < pos.length; j++) {
        items.push({
          row: i + 1,
          col: j + 1,
          type: "board_notwritable",
          value: pos[i][j],
        });
        sum +=pos[i][j]
      }
      items.push({
        row: i+1,
        col: pos[0].length + 1,
        type:"board",
        answer: (10 - sum % 10) % 10,
      })
    } 
    
    var totalsum = 0
    for (var j = 0; j < pos.length; j++) {
      var sum = 0;
      for (var i = 0; i < pos.length; i++) {
        sum += pos[i][j]
      }
      items.push(
        {
          row: pos.length + 1,
          col: j + 1,
          type: "board",
          answer: (10 - sum % 10) % 10,
        }
      )
      totalsum += sum
    }
    items.push(
      {
        row: pos.length + 1,
        col: pos[0].length + 1,
        type: "board",
        answer: (10 - totalsum % 10) % 10,
      }
    ) 
    return items;
  }
  
  var hardLevels = [hardLevel1, hardLevel1f1, hardLevel1f2, hardLevel1f3]
  
  
  //Hier werden die Aufgaben definiert
  //Index row und col starten bei 0
  subTask.data = {
    //Version *
    easy: [easyLevel1, easyLevel2, easyLevel3, easyLevel4, easyLevel5, easyLevel6].map(p=>generateEasyLevel(p)),
    //Version **
    //Version ***
    medium: hardLevels.map(p => generateHardLevel(p, false)),
    // Version ****
    hard: hardLevels.map(lvl => generateHardLevel(lvl, true)),
  };
  
  initBlocklySubTask(subTask);
  displayHelper.thresholdEasy = 5000;
  displayHelper.thresholdMedium = 10000;
}
//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
initWrapper(initTask, ["easy", "medium", "hard"], "easy", true);
