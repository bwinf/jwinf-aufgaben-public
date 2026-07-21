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
      easy: 40,
      medium: 80,
      hard: 120
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
            "controls_if",
            "controls_if_else",
            "math_number",
            "math_arithmetic",
            "math_modulo"
          ],
          hard: ["math_extra_single_noShadow", "logic_operation", "logic_negate", "logic_boolean"]
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
        //Überprüfe, ob die richtigen Zahlen auf den boards stehen
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
        if (true) {
          context.success = true;
          throw ("Alle Zahlen sind korrekt eingetragen!");
        }
      }
    }  
  };
  
  var easyPos1 = [2, 3, 6, 2, 1, 9]
  var easyPos2 = [2, 3, 6, 2, 1, 8]
  var easyPos3 = [1, 2, 3, 4, 5, 6]
  var easyPos4 = [1, 2, 3, 4, 5, 5]
  
  var mediumPos1 = [
    [2, 3, 5, 1],
    [1, 4, 2, 0],
    [0, 0, 1, 3],
    [1, 9, 6, 2]
  ] 
  var mediumPos2 = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ] 
  var mediumPos3 = [
    [1, 2, 3, 0],
    [4, 5, 6, 0],
    [7, 8, 9, 0],
    [0, 0, 0, 0]
  ] 
  
  
  
  var hardLevel1 = [
    [1, 2, 3, 0, 0],
    [4, 5, 6, 0, 0],
    [7, 8, 9, 0, 0],
    [0, 0, 0, 0, 0],
    [2, 3, 5, 7, 0]
  ] 

  var hardLevel2 = [
    [6, 7],
    [7, 6]
  ] 

  var hardLevel3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  var hardLevel4 = [
    [0]
  ]
  
  
  function generateHardLevel(pos) {
    var level = generateMediumLevel(pos)
    //Füge Board mit Kantenlängenangabe rechts vom Roboter dazu
    level.initItems.push({
      row: 0,
      col: 1,
      type: "board_notwritable",
      value: pos.length      
    })
    return level
  } 
  
  /**Erzeuge Nachrichtenquadrat (D) entsprechend der Kreuzsicherung (https://de.wikipedia.org/wiki/Kreuzsicherung)
     * mit Prüfziffern (P) in jeder Zeile und Spalte
     * und einem Ring aus leeren Feldern (X) außen herum
     * X X X X X
     * X D D P X
     * X D D P X
     * X P P P X
     * X X X X X
     * */
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
      initItems: generateValues(pos),
    }
  } 
  
  
  /**
  * Erzeugt ein Levelobjekt.
  * Das Feld besteht aus den Datenziffern, einer Prüfziffer und jeweils einem leeren Feld links und rechts.
  * X D D D D D D P X
  * @returns Objekt mit Tiles und Items
  */
  function generateEasyLevel(pos) {
    var tiles = [1];
    for (var i=0; i < pos.length; i++) {
      tiles.push(1)
    }
    tiles.push(90)
    tiles.push(1)
    return {
      tiles: [tiles],
      initItems: generateValuesEasy(pos),
    };
  }
  
  /**
   * Erzeugt die Items für die medium und hard-Maps.
   * Der Roboter startet oben links, die Datenziffern sind nicht überschreibbar,
   * die Prüfzifferfelder enthalten leere Boards.
   */
  function generateValues(pos) {
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
    
    var totalsum = 0 // Zur Berechnung der Prüfziffer ganz unten rechts
    for (var j = 0; j < pos.length; j++) {
      var sum = 0;
      for (var i = 0; i < pos.length; i++) {
        sum += pos[i][j]
      }
      var answer = (10 - sum % 10) % 10 // Die letzte Restbildung ist nötig, falls die Summe 0 ist.
      items.push(
        {
          row: pos.length + 1,
          col: j + 1,
          type: "board",
          answer: answer,
        }
      )
      totalsum += answer
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
  
  /**
  * Erzeugt das Array aus Items des Levels
  * @param {*} pos Koordinatentupel für die Markierungen 
  * @returns Das Itemarray
  */
  function generateValuesEasy(pos) {
    var items = [
      {
        row: 0,
        col: 0,
        type: "robot",
      },
    ];
    
    var sum = 0;
    for (var i = 0; i < pos.length; i++) {
      items.push({
        row: 0,
        col: i + 1,
        type: "board_notwritable",
        value: pos[i],
      });
      sum += pos[i];
    }
    
    items.push({
      row:0,
      col: pos.length + 1,
      type: "board",
      answer: (10 - sum % 10) % 10,
    })  
    return items;
  }
  
  //Hier werden die Aufgaben definiert
  //Index row und col starten bei 0
  subTask.data = {
    //Version *
    easy: [easyPos1, easyPos2, easyPos3, easyPos4].map(p => generateEasyLevel(p)),
    //Version **
    //Version ***
    medium: [mediumPos1, mediumPos2, mediumPos3].map(p => generateMediumLevel(p)),
    // Version ****
    hard: [hardLevel1, hardLevel2, mediumPos1, hardLevel3, hardLevel4].map(lvl => generateHardLevel(lvl)),
  };
  
  initBlocklySubTask(subTask);
  displayHelper.thresholdEasy = 5000;
  displayHelper.thresholdMedium = 10000;
}
//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
initWrapper(initTask, ["easy", "medium", "hard"], "easy", true);
