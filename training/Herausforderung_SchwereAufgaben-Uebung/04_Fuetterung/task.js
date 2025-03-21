function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: false,
      timeoutMinutes: 15, // Nach 15 Minuten warnen
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "veterinary",
      //Die BWINF-spezifischen Farben. Bitte in jeder Aufgabendatei laden, da die Blocktypen sonst nicht konsistent eingefärbt sind
      //(Unsere Farben sind natürlich schöner)
      blocklyColourTheme: "bwinf",
      //Muss für diese Aufgabe hoch gesetzt werden, da Blockly doof ist und die Schleifen sonst mit 
      //"Zu viele Anweisungen ohne eine Aktion wurden ausgeführt!" abbricht.
      maxIterWithoutAction: 1000,
      //Mit true wird eine Nummerierung des grids angezeigt.
      //Die Nummberierung beginnt bei 1
      showLabels: true,
      //Wie viel Holz kann der Roboter maximal aufsammeln/bei sich tragen
      bagSize: 200,
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         easy: 30,
         medium: 60,
         hard: 200
      },
      limitedUses: [{
         blocks: ["dropNum"],
         nbUses: 15
      },],
      //Gibt an, ob die Programme gespeichert und geladen werden können über das Menu auf der rechten Seite.
      //Für Wettbewerbe immer auf true setzen
      hideSaveOrLoad: true,
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         //Für medium und hard werden die Blöcke nach Kategorie gruppiert, da hier 
         //die komplette Kategorie "Variablen" eingebunden ist und die 
         //Funktionen bzw. die Anzeige nur korrekt ist bei Gruppierung.
         groupByCategory: {
            easy: false,
            medium: true,
            hard: true,
         },
         //Alle Roboter spezifischen Blocks, welche für die Version jeweils genutzt werden.
         //Blöcke bei shared werden für alle Versionen angezeigt
         generatedBlocks: {
            robot: {
               shared: ["forward", "left", "right", "nbWithdrawables", "withdrawNum", "dropNum"],
               medium: ["col", "backwards"],
               hard: ["col", "backwards", "nbInBag"]
            }
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            //Für medium und hard wird die komplette Variablen-Funktionalität inkludiert
            //Dies erlaubt den Usern selbst Variablen zu erstellen.
            wholeCategories: {
               easy: [],
               medium: ["variables"],
               hard: ["variables"],
            },
            //Weitere allgemeine Blöcke für jeweilige Versionen
            singleBlocks: {
               shared: ["lists_create_with_empty", "lists_getIndex", "lists_setIndex",
                  "controls_repeat_ext"
               ],
               medium: ["lists_repeat", "controls_whileUntil", "controls_if",
                  "controls_if_else", "math_number",
                  "math_arithmetic", "logic_compare", "logic_operation", "logic_negate"
               ],
               hard: ["lists_repeat", "controls_whileUntil", "controls_if",
                  "controls_if_else", "math_number",
                  "math_arithmetic", "logic_compare", "logic_operation", "logic_negate", "lists_isEmpty"
               ],
            }
         },
         //Falls nicht selbst Variablen definiert werden sollen, sondern Variablen
         //vorgegeben werden, können die Namen hier definiert werden.
         variables: {
            easy: ["Liste"],
            medium: [],
            hard: []
         },
         //welche Funktionen für Variablen zur Verfügung stehen.
         variablesOnlyBlocks: ['set', 'get'],
      },
      //Hier kann definiert werden, ob Blöcke eine limitierte Nutzung haben
      //So kann hier der Block "math_number" nur 12 Mal genutzt werden
      //limitedUses: [{
      //   blocks: ["math_number"],
      //   nbUses: 12
      //}]
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version **
      easy: [{
         //Jede Zahl steht für ein spezifisches Object
         //7 ist zum Beispiel ein Biber-Container und 6 ein Holz-Container
         tiles: [
            [4, 4, 4, 4, 4, 4, 4, 4],
            [1, 6, 6, 6, 6, 6, 1, 4],
            [4, 4, 4, 4, 4, 4, 1, 4],
            [1, 7, 7, 7, 7, 7, 1, 4],
            [4, 4, 4, 4, 4, 4, 4, 4]
         ],
         //Definieren, wo der Roboter starten soll
         //dir: Gibt an, in welche Richtung der Roboter bei Start schaut
         initItems: [{
                  row: 1,
                  col: 0,
                  dir: 0,
                  type: "robot"
               },
               //Legt einen Biber in den Biber-Container und sag
               //wie viel Holz der Biber bestellt (containerSize:)
               //row und col muss mit dem Biber oben (7)
               //übereinstimmen
               {
                  row: 3,
                  col: 1,
                  type: "beaver",
                  containerSize: 3
               },
               {
                  row: 3,
                  col: 2,
                  type: "beaver",
                  containerSize: 1
               },
               {
                  row: 3,
                  col: 3,
                  type: "beaver",
                  containerSize: 4
               },
               {
                  row: 3,
                  col: 4,
                  type: "beaver",
                  containerSize: 5
               },
               {
                  row: 3,
                  col: 5,
                  type: "beaver",
                  containerSize: 2
               }
               //Hier wird in alle Holzcontainer Holz gefüllt
               //Die erste Zahl (3) gibt an, wie viele Holzscheite
               //row und col muss mit dem zu füllenden Holzcontainer oben (6)
               //übereinstimmen
            ].concat(initArray(3, {
               row: 1,
               col: 1,
               type: "wood_outside"
            }))
            .concat(initArray(1, {
               row: 1,
               col: 2,
               type: "wood_outside"
            }))
            .concat(initArray(4, {
               row: 1,
               col: 3,
               type: "wood_outside"
            }))
            .concat(initArray(5, {
               row: 1,
               col: 4,
               type: "wood_outside"
            }))
            .concat(initArray(2, {
               row: 1,
               col: 5,
               type: "wood_outside"
            }))
      }],
      //Version *** 
      medium: [{
            //Testfall 1
            tiles: [
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
               [4, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 4],
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4],
               [4, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 4],
               [4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
               [4, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 4],
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
            ],
            initItems: [{
                     row: 1,
                     col: 1,
                     dir: 0,
                     type: "robot"
                  },
                  {
                     row: 5,
                     col: 8,
                     type: "beaver",
                     containerSize: 3
                  },
                  {
                     row: 5,
                     col: 9,
                     type: "beaver",
                     containerSize: 4
                  },
                  {
                     row: 5,
                     col: 10,
                     type: "beaver",
                     containerSize: 5
                  },
                  {
                     row: 5,
                     col: 3,
                     type: "beaver",
                     containerSize: 5
                  },
                  {
                     row: 5,
                     col: 4,
                     type: "beaver",
                     containerSize: 3
                  },
                  {
                     row: 5,
                     col: 5,
                     type: "beaver",
                     containerSize: 6
                  },
                  {
                     row: 5,
                     col: 7,
                     type: "beaver",
                     containerSize: 7
                  },
                  {
                     row: 5,
                     col: 6,
                     type: "beaver",
                     containerSize: 5
                  },
                  {
                     row: 5,
                     col: 2,
                     type: "beaver",
                     containerSize: 8
                  },
               ].concat(initArray(3, {
                  row: 1,
                  col: 8,
                  type: "wood_outside"
               }))
               .concat(initArray(1, {
                  row: 1,
                  col: 9,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 1,
                  col: 10,
                  type: "wood_outside"
               }))
               .concat(initArray(5, {
                  row: 1,
                  col: 3,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 1,
                  col: 4,
                  type: "wood_outside"
               }))
               .concat(initArray(6, {
                  row: 1,
                  col: 5,
                  type: "wood_outside"
               }))
               .concat(initArray(7, {
                  row: 1,
                  col: 7,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 1,
                  col: 6,
                  type: "wood_outside"
               }))
               .concat(initArray(8, {
                  row: 1,
                  col: 2,
                  type: "wood_outside"
               }))

               .concat(initArray(1, {
                  row: 3,
                  col: 8,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 3,
                  col: 9,
                  type: "wood_outside"
               }))
               .concat(initArray(5, {
                  row: 3,
                  col: 10,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 3,
                  col: 3,
                  type: "wood_outside"
               }))
               .concat(initArray(3, {
                  row: 3,
                  col: 4,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 3,
                  col: 5,
                  type: "wood_outside"
               }))
               .concat(initArray(6, {
                  row: 3,
                  col: 7,
                  type: "wood_outside"
               }))
               .concat(initArray(5, {
                  row: 3,
                  col: 6,
                  type: "wood_outside"
               }))
               .concat(initArray(3, {
                  row: 3,
                  col: 2,
                  type: "wood_outside"
               }))
         },
         //Testfall 2
         {
            tiles: [
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
               [4, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 4],
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4],
               [4, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 4],
               [4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
               [4, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 4],
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
            ],
            initItems: [{
                     row: 1,
                     col: 1,
                     dir: 0,
                     type: "robot"
                  },
                  {
                     row: 5,
                     col: 2,
                     type: "beaver",
                     containerSize: 3
                  },
                  {
                     row: 5,
                     col: 3,
                     type: "beaver",
                     containerSize: 4
                  },
                  {
                     row: 5,
                     col: 4,
                     type: "beaver",
                     containerSize: 5
                  },
                  {
                     row: 5,
                     col: 5,
                     type: "beaver",
                     containerSize: 5
                  },
                  {
                     row: 5,
                     col: 6,
                     type: "beaver",
                     containerSize: 3
                  },
                  {
                     row: 5,
                     col: 7,
                     type: "beaver",
                     containerSize: 6
                  },
                  {
                     row: 5,
                     col: 8,
                     type: "beaver",
                     containerSize: 7
                  },
                  {
                     row: 5,
                     col: 9,
                     type: "beaver",
                     containerSize: 5
                  },
                  {
                     row: 5,
                     col: 10,
                     type: "beaver",
                     containerSize: 8
                  },
               ].concat(initArray(3, {
                  row: 1,
                  col: 2,
                  type: "wood_outside"
               }))
               .concat(initArray(1, {
                  row: 1,
                  col: 3,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 1,
                  col: 4,
                  type: "wood_outside"
               }))
               .concat(initArray(5, {
                  row: 1,
                  col: 5,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 1,
                  col: 6,
                  type: "wood_outside"
               }))
               .concat(initArray(6, {
                  row: 1,
                  col: 7,
                  type: "wood_outside"
               }))
               .concat(initArray(7, {
                  row: 1,
                  col: 8,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 1,
                  col: 9,
                  type: "wood_outside"
               }))
               .concat(initArray(8, {
                  row: 1,
                  col: 10,
                  type: "wood_outside"
               }))

               .concat(initArray(1, {
                  row: 3,
                  col: 2,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 3,
                  col: 3,
                  type: "wood_outside"
               }))
               .concat(initArray(5, {
                  row: 3,
                  col: 4,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 3,
                  col: 5,
                  type: "wood_outside"
               }))
               .concat(initArray(3, {
                  row: 3,
                  col: 6,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 3,
                  col: 7,
                  type: "wood_outside"
               }))
               .concat(initArray(6, {
                  row: 3,
                  col: 8,
                  type: "wood_outside"
               }))
               .concat(initArray(5, {
                  row: 3,
                  col: 9,
                  type: "wood_outside"
               }))
               .concat(initArray(3, {
                  row: 3,
                  col: 10,
                  type: "wood_outside"
               }))
         }
      ],
      //Version ****
      hard: [{
            //Testfall 1
            tiles: [
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
               [4, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 4],
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4],
               [4, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 4],
               [4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
               [4, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 4],
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4],
               [4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 4],
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
            ],
            initItems: [{
                     row: 1,
                     col: 1,
                     dir: 0,
                     type: "robot"
                  },
                  {
                     row: 7,
                     col: 8,
                     type: "beaver",
                     containerSize: 2
                  },
                  {
                     row: 7,
                     col: 9,
                     type: "beaver",
                     containerSize: 3
                  },
                  {
                     row: 7,
                     col: 10,
                     type: "beaver",
                     containerSize: 2
                  },
                  {
                     row: 7,
                     col: 3,
                     type: "beaver",
                     containerSize: 5
                  },
                  {
                     row: 7,
                     col: 4,
                     type: "beaver",
                     containerSize: 3
                  },
                  {
                     row: 7,
                     col: 5,
                     type: "beaver",
                     containerSize: 7
                  },
                  {
                     row: 7,
                     col: 6,
                     type: "beaver",
                     containerSize: 2
                  },
                  {
                     row: 7,
                     col: 7,
                     type: "beaver",
                     containerSize: 6
                  },
                  {
                     row: 7,
                     col: 2,
                     type: "beaver",
                     containerSize: 4
                  },

                  {
                     row: 7,
                     col: 1,
                     type: "beaver",
                     containerSize: 70
                  }
               ].concat(initArray(3, {
                  row: 1,
                  col: 8,
                  type: "wood_outside"
               }))
               .concat(initArray(1, {
                  row: 1,
                  col: 9,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 1,
                  col: 10,
                  type: "wood_outside"
               }))
               .concat(initArray(5, {
                  row: 1,
                  col: 3,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 1,
                  col: 4,
                  type: "wood_outside"
               }))
               .concat(initArray(7, {
                  row: 1,
                  col: 5,
                  type: "wood_outside"
               }))
               .concat(initArray(1, {
                  row: 1,
                  col: 6,
                  type: "wood_outside"
               }))
               .concat(initArray(3, {
                  row: 1,
                  col: 7,
                  type: "wood_outside"
               }))
               .concat(initArray(9, {
                  row: 1,
                  col: 2,
                  type: "wood_outside"
               }))

               .concat(initArray(1, {
                  row: 3,
                  col: 8,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 3,
                  col: 9,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 3,
                  col: 10,
                  type: "wood_outside"
               }))
               .concat(initArray(6, {
                  row: 3,
                  col: 3,
                  type: "wood_outside"
               }))
               .concat(initArray(3, {
                  row: 3,
                  col: 4,
                  type: "wood_outside"
               }))
               .concat(initArray(9, {
                  row: 3,
                  col: 5,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 3,
                  col: 6,
                  type: "wood_outside"
               }))
               .concat(initArray(8, {
                  row: 3,
                  col: 7,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 3,
                  col: 2,
                  type: "wood_outside"
               }))

               .concat(initArray(2, {
                  row: 5,
                  col: 8,
                  type: "wood_outside"
               }))
               .concat(initArray(3, {
                  row: 5,
                  col: 9,
                  type: "wood_outside"
               }))
               .concat(initArray(1, {
                  row: 5,
                  col: 10,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 5,
                  col: 3,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 5,
                  col: 4,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 5,
                  col: 5,
                  type: "wood_outside"
               }))
               .concat(initArray(5, {
                  row: 5,
                  col: 6,
                  type: "wood_outside"
               }))
               .concat(initArray(6, {
                  row: 5,
                  col: 7,
                  type: "wood_outside"
               }))
               .concat(initArray(3, {
                  row: 5,
                  col: 2,
                  type: "wood_outside"
               }))
         },
         //Testfall 2
         {
            tiles: [
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
               [4, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 4],
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4],
               [4, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 4],
               [4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
               [4, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 4],
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4],
               [4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 4],
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
            ],
            initItems: [{
                     row: 1,
                     col: 1,
                     dir: 0,
                     type: "robot"
                  },
                  {
                     row: 7,
                     col: 2,
                     type: "beaver",
                     containerSize: 2
                  },
                  {
                     row: 7,
                     col: 3,
                     type: "beaver",
                     containerSize: 3
                  },
                  {
                     row: 7,
                     col: 4,
                     type: "beaver",
                     containerSize: 2
                  },
                  {
                     row: 7,
                     col: 5,
                     type: "beaver",
                     containerSize: 5
                  },
                  {
                     row: 7,
                     col: 6,
                     type: "beaver",
                     containerSize: 3
                  },
                  {
                     row: 7,
                     col: 7,
                     type: "beaver",
                     containerSize: 7
                  },
                  {
                     row: 7,
                     col: 8,
                     type: "beaver",
                     containerSize: 2
                  },
                  {
                     row: 7,
                     col: 9,
                     type: "beaver",
                     containerSize: 6
                  },
                  {
                     row: 7,
                     col: 10,
                     type: "beaver",
                     containerSize: 4
                  },

                  {
                     row: 7,
                     col: 1,
                     type: "beaver",
                     containerSize: 70
                  }
               ].concat(initArray(3, {
                  row: 1,
                  col: 2,
                  type: "wood_outside"
               }))
               .concat(initArray(1, {
                  row: 1,
                  col: 3,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 1,
                  col: 4,
                  type: "wood_outside"
               }))
               .concat(initArray(5, {
                  row: 1,
                  col: 5,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 1,
                  col: 6,
                  type: "wood_outside"
               }))
               .concat(initArray(7, {
                  row: 1,
                  col: 7,
                  type: "wood_outside"
               }))
               .concat(initArray(1, {
                  row: 1,
                  col: 8,
                  type: "wood_outside"
               }))
               .concat(initArray(3, {
                  row: 1,
                  col: 9,
                  type: "wood_outside"
               }))
               .concat(initArray(9, {
                  row: 1,
                  col: 10,
                  type: "wood_outside"
               }))

               .concat(initArray(1, {
                  row: 3,
                  col: 2,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 3,
                  col: 3,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 3,
                  col: 4,
                  type: "wood_outside"
               }))
               .concat(initArray(6, {
                  row: 3,
                  col: 5,
                  type: "wood_outside"
               }))
               .concat(initArray(3, {
                  row: 3,
                  col: 6,
                  type: "wood_outside"
               }))
               .concat(initArray(9, {
                  row: 3,
                  col: 7,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 3,
                  col: 8,
                  type: "wood_outside"
               }))
               .concat(initArray(8, {
                  row: 3,
                  col: 9,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 3,
                  col: 10,
                  type: "wood_outside"
               }))

               .concat(initArray(2, {
                  row: 5,
                  col: 2,
                  type: "wood_outside"
               }))
               .concat(initArray(3, {
                  row: 5,
                  col: 3,
                  type: "wood_outside"
               }))
               .concat(initArray(1, {
                  row: 5,
                  col: 4,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 5,
                  col: 5,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 5,
                  col: 6,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 5,
                  col: 7,
                  type: "wood_outside"
               }))
               .concat(initArray(5, {
                  row: 5,
                  col: 8,
                  type: "wood_outside"
               }))
               .concat(initArray(6, {
                  row: 5,
                  col: 9,
                  type: "wood_outside"
               }))
               .concat(initArray(3, {
                  row: 5,
                  col: 10,
                  type: "wood_outside"
               }))
         },
         //Testfall 3
         {
            tiles: [
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
               [4, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 4],
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4],
               [4, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 4],
               [4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
               [4, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 4],
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4],
               [4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 4],
               [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
            ],
            initItems: [{
                     row: 1,
                     col: 1,
                     dir: 0,
                     type: "robot"
                  },
                  {
                     row: 7,
                     col: 2,
                     type: "beaver",
                     containerSize: 5
                  },
                  {
                     row: 7,
                     col: 3,
                     type: "beaver",
                     containerSize: 6
                  },
                  {
                     row: 7,
                     col: 4,
                     type: "beaver",
                     containerSize: 2
                  },
                  {
                     row: 7,
                     col: 5,
                     type: "beaver",
                     containerSize: 5
                  },
                  {
                     row: 7,
                     col: 6,
                     type: "beaver",
                     containerSize: 5
                  },
                  {
                     row: 7,
                     col: 7,
                     type: "beaver",
                     containerSize: 6
                  },
                  {
                     row: 7,
                     col: 8,
                     type: "beaver",
                     containerSize: 6
                  },
                  {
                     row: 7,
                     col: 9,
                     type: "beaver",
                     containerSize: 4
                  },
                  {
                     row: 7,
                     col: 10,
                     type: "beaver",
                     containerSize: 5
                  },

                  {
                     row: 7,
                     col: 1,
                     type: "beaver",
                     containerSize: 89
                  }
               ].concat(initArray(4, {
                  row: 1,
                  col: 2,
                  type: "wood_outside"
               }))
               .concat(initArray(7, {
                  row: 1,
                  col: 3,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 1,
                  col: 4,
                  type: "wood_outside"
               }))
               .concat(initArray(9, {
                  row: 1,
                  col: 5,
                  type: "wood_outside"
               }))
               .concat(initArray(5, {
                  row: 1,
                  col: 6,
                  type: "wood_outside"
               }))
               .concat(initArray(6, {
                  row: 1,
                  col: 7,
                  type: "wood_outside"
               }))
               .concat(initArray(3, {
                  row: 1,
                  col: 8,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 1,
                  col: 9,
                  type: "wood_outside"
               }))
               .concat(initArray(5, {
                  row: 1,
                  col: 10,
                  type: "wood_outside"
               }))

               .concat(initArray(5, {
                  row: 3,
                  col: 2,
                  type: "wood_outside"
               }))
               .concat(initArray(6, {
                  row: 3,
                  col: 3,
                  type: "wood_outside"
               }))
               .concat(initArray(7, {
                  row: 3,
                  col: 4,
                  type: "wood_outside"
               }))
               .concat(initArray(5, {
                  row: 3,
                  col: 5,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 3,
                  col: 6,
                  type: "wood_outside"
               }))
               .concat(initArray(1, {
                  row: 3,
                  col: 7,
                  type: "wood_outside"
               }))
               .concat(initArray(7, {
                  row: 3,
                  col: 8,
                  type: "wood_outside"
               }))
               .concat(initArray(4, {
                  row: 3,
                  col: 9,
                  type: "wood_outside"
               }))
               .concat(initArray(8, {
                  row: 3,
                  col: 10,
                  type: "wood_outside"
               }))

               .concat(initArray(9, {
                  row: 5,
                  col: 2,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 5,
                  col: 3,
                  type: "wood_outside"
               }))
               .concat(initArray(1, {
                  row: 5,
                  col: 4,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 5,
                  col: 5,
                  type: "wood_outside"
               }))
               .concat(initArray(6, {
                  row: 5,
                  col: 6,
                  type: "wood_outside"
               }))
               .concat(initArray(9, {
                  row: 5,
                  col: 7,
                  type: "wood_outside"
               }))
               .concat(initArray(6, {
                  row: 5,
                  col: 8,
                  type: "wood_outside"
               }))
               .concat(initArray(8, {
                  row: 5,
                  col: 9,
                  type: "wood_outside"
               }))
               .concat(initArray(2, {
                  row: 5,
                  col: 10,
                  type: "wood_outside"
               }))
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
initWrapper(initTask, ["easy", "medium", "hard"], null, true);