function initTask(subTask) {
   subTask.gridInfos = {
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "fishing",
      //Die BWINF-spezifischen Farben. Bitte in jeder Aufgabendatei laden, da die Blocktypen sonst nicht konsistent eingefärbt sind
      //(Unsere Farben sind natürlich schöner)
      blocklyColourTheme: "bwinf",
      //Hier könnte man "Norden, Osten Süden, Westen" einblenden, dies tun wir aber bei der
      //JwInf-Plattform eher nicht, da die Blöcke auch eh mit
      //"oben, rechts, unten, links" übersetzt sind.
      showCardinals: false,
      //Wie viele Fische kann der Roboter maximal aufsammeln/bei sich tragen
      bagSize: 100,
      //Gibt an, wie viele Blöcke für welche Versionen maimal zur Verfügung stehen
      maxInstructions: {
         easy: 40,
         medium: 50,
         hard: 120
      },
      //Gibt an, ob die Programme gespeichert und geladen werden können über das Menu auf der rechten Seite.
      //Für Wettbewerbe immer auf true setzen
      hideSaveOrLoad: true,
      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         groupByCategory: false,
         //Alle Roboter spezifischen Blocks, welche für die Version jeweils genutzt werden.
         //Blöcke bei shared werden für alle Versionen angezeigt
         generatedBlocks: {
            robot: {
               shared: ["east", "west", "south", "withdrawNum", "dropNum"],
               easy: ["onContainer", "onObject"],
               medium: ["onContainer", "containerSize", "onObject", "nbWithdrawables"],
               hard: ["nbWithdrawables"]
            }
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            singleBlocks: {
               shared: [
                  "controls_repeat_ext",
                  "controls_if",
                  "logic_compare",
               ],
               hard: ["lists_create_with_empty",
                  "lists_getIndex", "lists_setIndex",
               ]
            }
         },
         //Für hard steht die vordefinierte Variable "Liste" zur Verfügung
         variables: {
            easy: [],
            medium: [],
            hard: ["Liste"]
         },
         //welche Funktionen für Variablen zur Verfügung stehen.
         variablesOnlyBlocks: ['set', 'get'],
      },
      //Hier kann definiert werden, ob Blöcke eine limitierte Nutzung haben
      //So kann hier der Block "withdrawNum" und "dropNum" jeweils nur 1 Mal genutzt werden
      //Dies soll erzwingen, dass mit Schleifen und Parametern gearbeitet wird
      limitedUses: [{
            blocks: ["withdrawNum"],
            nbUses: 1
         },
         {
            blocks: ["dropNum"],
            nbUses: 1
         }
      ]
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version **
      easy: [{
         //Jede Zahl steht für ein spezifisches Object
         //6 ist zum Beispiel ein Insel-Container und 5 ein Fisch-Container
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 1],
            [1, 5, 1, 1, 5, 1, 1, 5, 1, 1, 1, 1],
            [1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1],
            [1, 1, 1, 6, 1, 6, 5, 1, 1, 6, 5, 1],
            [1, 6, 1, 1, 6, 1, 1, 6, 1, 1, 1, 1],
            [1, 1, 6, 1, 1, 1, 1, 1, 6, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 6, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         //Definieren, wo der Roboter starten soll
         initItems: [{
                  row: 0,
                  col: 0,
                  type: "robot"
               },
               //Legt ein Fischernetz über die Fischgrafik
               {
                  row: 2,
                  col: 1,
                  type: "net"
               },
               {
                  row: 3,
                  col: 2,
                  type: "net"
               },
               {
                  row: 1,
                  col: 3,
                  type: "net"
               },
               {
                  row: 2,
                  col: 4,
                  type: "net"
               },
               {
                  row: 1,
                  col: 5,
                  type: "net"
               },
               {
                  row: 4,
                  col: 6,
                  type: "net"
               },
               {
                  row: 2,
                  col: 7,
                  type: "net"
               },
               {
                  row: 3,
                  col: 8,
                  type: "net"
               },
               {
                  row: 1,
                  col: 9,
                  type: "net"
               },
               {
                  row: 4,
                  col: 10,
                  type: "net"
               },
               //Legt für jede Insel fest, wie viele Fische dort hingeliefert
               // werden sollen (containerSize:)
               //row und col muss mit der Insel oben (6)
               //übereinstimmen
               {
                  row: 5,
                  col: 1,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 6,
                  col: 2,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 4,
                  col: 3,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 5,
                  col: 4,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 4,
                  col: 5,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 7,
                  col: 6,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 5,
                  col: 7,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 6,
                  col: 8,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 4,
                  col: 9,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 7,
                  col: 10,
                  type: "island",
                  containerSize: 1
               }
               //Hier wird in alle Fischernetze Fische gefüllt
               //Die erste Zahl (1) gibt an, wie viele Fische
               //row und col muss mit dem zu füllenden Netz oben (5)
               //übereinstimmen
            ].concat(initArray(1, {
               row: 2,
               col: 1,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 3,
               col: 2,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 1,
               col: 3,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 2,
               col: 4,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 1,
               col: 5,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 4,
               col: 6,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 2,
               col: 7,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 3,
               col: 8,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 1,
               col: 9,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 4,
               col: 10,
               type: "fishes"
            }))
      }],
      //Version *** 
      medium: [{
         tiles: [
            // 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14  
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
            [1, 1, 1, 1, 5, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1], //1
            [1, 1, 1, 1, 1, 1, 6, 1, 1, 5, 1, 1, 5, 1, 1], //2
            [1, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 6, 1], //3
            [1, 5, 1, 1, 5, 1, 5, 1, 1, 6, 1, 1, 6, 1, 1], //4
            [1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 1], //5
            [1, 1, 6, 1, 5, 1, 1, 5, 6, 1, 1, 5, 1, 1, 1], //6
            [1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1], //7
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //8
         ],
         initItems: [{
                  row: 0,
                  col: 0,
                  type: "robot"
               },
               {
                  row: 2,
                  col: 6,
                  type: "island",
                  containerSize: 2
               },
               {
                  row: 6,
                  col: 2,
                  type: "island",
                  containerSize: 5
               },
               {
                  row: 3,
                  col: 13,
                  type: "island",
                  containerSize: 2
               },
               {
                  row: 4,
                  col: 9,
                  type: "island",
                  containerSize: 3
               },
               {
                  row: 4,
                  col: 12,
                  type: "island",
                  containerSize: 2
               },
               {
                  row: 6,
                  col: 8,
                  type: "island",
                  containerSize: 3
               },
               {
                  row: 6,
                  col: 11,
                  type: "island",
                  containerSize: 2
               },
               {
                  row: 7,
                  col: 4,
                  type: "island",
                  containerSize: 4
               },
               {
                  row: 7,
                  col: 10,
                  type: "island",
                  containerSize: 2
               },
               {
                  row: 1,
                  col: 4,
                  type: "net"
               },
               {
                  row: 1,
                  col: 7,
                  type: "net"
               },
               {
                  row: 1,
                  col: 11,
                  type: "net"
               },
               {
                  row: 2,
                  col: 9,
                  type: "net"
               },
               {
                  row: 2,
                  col: 12,
                  type: "net"
               },
               {
                  row: 3,
                  col: 2,
                  type: "net"
               },
               {
                  row: 3,
                  col: 9,
                  type: "net"
               },
               {
                  row: 4,
                  col: 1,
                  type: "net"
               },
               {
                  row: 4,
                  col: 4,
                  type: "net"
               },
               {
                  row: 4,
                  col: 6,
                  type: "net"
               },
               {
                  row: 5,
                  col: 7,
                  type: "net"
               },
               {
                  row: 5,
                  col: 12,
                  type: "net"
               },
               {
                  row: 6,
                  col: 4,
                  type: "net"
               },
               {
                  row: 6,
                  col: 7,
                  type: "net"
               }
            ].concat(initArray(2, {
               row: 1,
               col: 4,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 1,
               col: 7,
               type: "fishes"
            }))
            .concat(initArray(5, {
               row: 1,
               col: 11,
               type: "fishes"
            }))
            .concat(initArray(2, {
               row: 2,
               col: 9,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 2,
               col: 12,
               type: "fishes"
            }))
            .concat(initArray(3, {
               row: 3,
               col: 2,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 3,
               col: 9,
               type: "fishes"
            }))
            .concat(initArray(2, {
               row: 4,
               col: 1,
               type: "fishes"
            }))

            .concat(initArray(1, {
               row: 4,
               col: 4,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 4,
               col: 6,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 5,
               col: 7,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 5,
               col: 12,
               type: "fishes"
            }))
            .concat(initArray(3, {
               row: 6,
               col: 4,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 6,
               col: 7,
               type: "fishes"
            }))
      }],
      //Version ****
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
                  row: 0,
                  col: 0,
                  type: "robot"
               },
               {
                  row: 1,
                  col: 1,
                  type: "net"
               },
               {
                  row: 1,
                  col: 2,
                  type: "net"
               },
               {
                  row: 1,
                  col: 3,
                  type: "net"
               },
               {
                  row: 1,
                  col: 4,
                  type: "net"
               },
               {
                  row: 1,
                  col: 5,
                  type: "net"
               },
               {
                  row: 1,
                  col: 6,
                  type: "net"
               },
               {
                  row: 1,
                  col: 7,
                  type: "net"
               },
               {
                  row: 1,
                  col: 8,
                  type: "net"
               },
               {
                  row: 1,
                  col: 9,
                  type: "net"
               },
               {
                  row: 1,
                  col: 10,
                  type: "net"
               },
               {
                  row: 4,
                  col: 1,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 4,
                  col: 2,
                  type: "island",
                  containerSize: 6
               },
               {
                  row: 4,
                  col: 3,
                  type: "island",
                  containerSize: 2
               },
               {
                  row: 4,
                  col: 4,
                  type: "island",
                  containerSize: 9
               },
               {
                  row: 4,
                  col: 5,
                  type: "island",
                  containerSize: 4
               },
               {
                  row: 4,
                  col: 6,
                  type: "island",
                  containerSize: 4
               },
               {
                  row: 4,
                  col: 7,
                  type: "island",
                  containerSize: 1
               },
               {
                  row: 4,
                  col: 8,
                  type: "island",
                  containerSize: 3
               },
               {
                  row: 4,
                  col: 9,
                  type: "island",
                  containerSize: 4
               },
               {
                  row: 4,
                  col: 10,
                  type: "island",
                  containerSize: 1
               }
            ].concat(initArray(1, {
               row: 1,
               col: 1,
               type: "fishes"
            }))
            .concat(initArray(6, {
               row: 1,
               col: 2,
               type: "fishes"
            }))
            .concat(initArray(2, {
               row: 1,
               col: 3,
               type: "fishes"
            }))
            .concat(initArray(9, {
               row: 1,
               col: 4,
               type: "fishes"
            }))
            .concat(initArray(4, {
               row: 1,
               col: 5,
               type: "fishes"
            }))
            .concat(initArray(4, {
               row: 1,
               col: 6,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 1,
               col: 7,
               type: "fishes"
            }))
            .concat(initArray(3, {
               row: 1,
               col: 8,
               type: "fishes"
            }))
            .concat(initArray(4, {
               row: 1,
               col: 9,
               type: "fishes"
            }))
            .concat(initArray(1, {
               row: 1,
               col: 10,
               type: "fishes"
            }))
      }],
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet.
initWrapper(initTask, ["easy", "medium", "hard"], null, true);