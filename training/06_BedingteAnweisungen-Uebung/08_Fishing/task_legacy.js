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
         easy: 12,
         medium: 10,
         hard: 20
      },
      languageStrings: {
          blocklyRobot_lib: {
             messages: {
                successContainersFilled: "Gut gemacht, der Fisch wurde erfolgreich abgeliefert.",
                failureContainersFilled: "Der Fisch muss auf der Insel abgeliefert werden.",
             },
             label: {
               obstacleEast: "Riff rechts"

             }
          }
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
               shared: ["east", "withdrawObject", "dropObject", ],
               easy: [],
               medium: ["onObject"],
               hard: ["north", "south","obstacleEast", "onObject"]
            }
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            singleBlocks: {
               shared: [
                  "controls_repeat_ext",
               ],
               medium: [ "controls_if",],
               hard: [ "controls_if","controls_if_else",]
            }
         },
         //Für hard steht die vordefinierte Variable "Liste" zur Verfügung
         variables: {
            easy: [],
            medium: [],
            hard: []
         },
         //welche Funktionen für Variablen zur Verfügung stehen.
         variablesOnlyBlocks: ['set', 'get'],
      },
      //Hier kann definiert werden, ob Blöcke eine limitierte Nutzung haben
      //So kann hier der Block "withdrawNum" und "dropNum" jeweils nur 1 Mal genutzt werden
      //Dies soll erzwingen, dass mit Schleifen und Parametern gearbeitet wird
      // limitedUses: [{
      //       blocks: ["withdrawNum"],
      //       nbUses: 1
      //    },
      //    {
      //       blocks: ["dropNum"],
      //       nbUses: 1
      //    }
      // ]
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version **
      easy: [{
         //Jede Zahl steht für ein spezifisches Object
         //6 ist zum Beispiel ein Insel-Container und 5 ein Fisch-Container
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 6],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         //Definieren, wo der Roboter starten soll
         initItems: [{
                  row: 1,
                  col: 0,
                  type: "robot"
               },
               //Legt ein Fischernetz über die Fischgrafik
               {
                  row: 1,
                  col: 3,
                  type: "net"
               },
               //Legt für jede Insel fest, wie viele Fische dort hingeliefert
               // werden sollen (containerSize:)
               //row und col muss mit der Insel oben (6)
               //übereinstimmen
               {
                  row: 1,
                  col: 10,
                  type: "island",
                  containerSize: 1
               }
               
               //Hier wird in alle Fischernetze Fische gefüllt
               //Die erste Zahl (1) gibt an, wie viele Fische
               //row und col muss mit dem zu füllenden Netz oben (5)
               //übereinstimmen
            ].concat(initArray(1, {
               row: 1,
               col: 3,
               type: "fishes"
            }))
         
            
      }],
      //Version *** 
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 6],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         //Definieren, wo der Roboter starten soll
         initItems: [{
                  row: 1,
                  col: 0,
                  type: "robot"
               },
               //Legt ein Fischernetz über die Fischgrafik
               {
                  row: 1,
                  col: 3,
                  type: "net"
               },
               //Legt für jede Insel fest, wie viele Fische dort hingeliefert
               // werden sollen (containerSize:)
               //row und col muss mit der Insel oben (6)
               //übereinstimmen
               {
                  row: 1,
                  col: 10,
                  type: "island",
                  containerSize: 1
               }
               
               //Hier wird in alle Fischernetze Fische gefüllt
               //Die erste Zahl (1) gibt an, wie viele Fische
               //row und col muss mit dem zu füllenden Netz oben (5)
               //übereinstimmen
            ].concat(initArray(1, {
               row: 1,
               col: 3,
               type: "fishes"
            }))
         },
         {
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 6],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         //Definieren, wo der Roboter starten soll
         initItems: [{
                  row: 1,
                  col: 0,
                  type: "robot"
               },
               //Legt ein Fischernetz über die Fischgrafik
               {
                  row: 1,
                  col: 1,
                  type: "net"
               },
               //Legt für jede Insel fest, wie viele Fische dort hingeliefert
               // werden sollen (containerSize:)
               //row und col muss mit der Insel oben (6)
               //übereinstimmen
               {
                  row: 1,
                  col: 10,
                  type: "island",
                  containerSize: 1
               }
               
               //Hier wird in alle Fischernetze Fische gefüllt
               //Die erste Zahl (1) gibt an, wie viele Fische
               //row und col muss mit dem zu füllenden Netz oben (5)
               //übereinstimmen
            ].concat(initArray(1, {
               row: 1,
               col: 1,
               type: "fishes"
            }))
         },
         {
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 6],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         //Definieren, wo der Roboter starten soll
         initItems: [{
                  row: 1,
                  col: 0,
                  type: "robot"
               },
               //Legt ein Fischernetz über die Fischgrafik
               {
                  row: 1,
                  col: 2,
                  type: "net"
               },
               //Legt für jede Insel fest, wie viele Fische dort hingeliefert
               // werden sollen (containerSize:)
               //row und col muss mit der Insel oben (6)
               //übereinstimmen
               {
                  row: 1,
                  col: 10,
                  type: "island",
                  containerSize: 1
               }
               
               //Hier wird in alle Fischernetze Fische gefüllt
               //Die erste Zahl (1) gibt an, wie viele Fische
               //row und col muss mit dem zu füllenden Netz oben (5)
               //übereinstimmen
            ].concat(initArray(1, {
               row: 1,
               col: 2,
               type: "fishes"
            }))
         },
         {
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 6],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         //Definieren, wo der Roboter starten soll
         initItems: [{
                  row: 1,
                  col: 0,
                  type: "robot"
               },
               //Legt ein Fischernetz über die Fischgrafik
               {
                  row: 1,
                  col: 9,
                  type: "net"
               },
               //Legt für jede Insel fest, wie viele Fische dort hingeliefert
               // werden sollen (containerSize:)
               //row und col muss mit der Insel oben (6)
               //übereinstimmen
               {
                  row: 1,
                  col: 10,
                  type: "island",
                  containerSize: 1
               }
               
               //Hier wird in alle Fischernetze Fische gefüllt
               //Die erste Zahl (1) gibt an, wie viele Fische
               //row und col muss mit dem zu füllenden Netz oben (5)
               //übereinstimmen
            ].concat(initArray(1, {
               row: 1,
               col: 9,
               type: "fishes"
            }))
      }],
      //Version ****
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 9, 5, 1, 1, 1, 1, 1, 1, 6],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         //Definieren, wo der Roboter starten soll
         initItems: [{
                  row: 1,
                  col: 0,
                  type: "robot"
               },
               //Legt ein Fischernetz über die Fischgrafik
               {
                  row: 1,
                  col: 3,
                  type: "net"
               },
               {
                  row: 1,
                  col:2,
                  type:"reef"
               },
               //Legt für jede Insel fest, wie viele Fische dort hingeliefert
               // werden sollen (containerSize:)
               //row und col muss mit der Insel oben (6)
               //übereinstimmen
               {
                  row: 1,
                  col: 10,
                  type: "island",
                  containerSize: 1
               }
               
               //Hier wird in alle Fischernetze Fische gefüllt
               //Die erste Zahl (1) gibt an, wie viele Fische
               //row und col muss mit dem zu füllenden Netz oben (5)
               //übereinstimmen
            ].concat(initArray(1, {
               row: 1,
               col: 3,
               type: "fishes"
            }))
         },

         {
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 9, 1, 5, 1, 1, 1, 1, 1, 1, 6],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         //Definieren, wo der Roboter starten soll
         initItems: [{
                  row: 1,
                  col: 0,
                  type: "robot"
               },
               //Legt ein Fischernetz über die Fischgrafik
               {
                  row: 1,
                  col: 3,
                  type: "net"
               },
               {
                  row: 1,
                  col:1,
                  type:"reef"
               },
               //Legt für jede Insel fest, wie viele Fische dort hingeliefert
               // werden sollen (containerSize:)
               //row und col muss mit der Insel oben (6)
               //übereinstimmen
               {
                  row: 1,
                  col: 10,
                  type: "island",
                  containerSize: 1
               }
               
               //Hier wird in alle Fischernetze Fische gefüllt
               //Die erste Zahl (1) gibt an, wie viele Fische
               //row und col muss mit dem zu füllenden Netz oben (5)
               //übereinstimmen
            ].concat(initArray(1, {
               row: 1,
               col: 3,
               type: "fishes"
            }))
         },
         {
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 5, 1, 1, 1, 1, 1, 9, 6],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         //Definieren, wo der Roboter starten soll
         initItems: [{
                  row: 1,
                  col: 0,
                  type: "robot"
               },
               //Legt ein Fischernetz über die Fischgrafik
               {
                  row: 1,
                  col: 3,
                  type: "net"
               },
               {
                  row: 1,
                  col:9,
                  type:"reef"
               },
               //Legt für jede Insel fest, wie viele Fische dort hingeliefert
               // werden sollen (containerSize:)
               //row und col muss mit der Insel oben (6)
               //übereinstimmen
               {
                  row: 1,
                  col: 10,
                  type: "island",
                  containerSize: 1
               }
               
               //Hier wird in alle Fischernetze Fische gefüllt
               //Die erste Zahl (1) gibt an, wie viele Fische
               //row und col muss mit dem zu füllenden Netz oben (5)
               //übereinstimmen
            ].concat(initArray(1, {
               row: 1,
               col: 3,
               type: "fishes"
            }))
         },

         {
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 5, 1, 1, 9, 1, 1, 1, 1, 6],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         //Definieren, wo der Roboter starten soll
         initItems: [{
                  row: 1,
                  col: 0,
                  type: "robot"
               },
               //Legt ein Fischernetz über die Fischgrafik
               {
                  row: 1,
                  col: 2,
                  type: "net"
               },
               {
                  row: 1,
                  col:5,
                  type:"reef"
               },
               //Legt für jede Insel fest, wie viele Fische dort hingeliefert
               // werden sollen (containerSize:)
               //row und col muss mit der Insel oben (6)
               //übereinstimmen
               {
                  row: 1,
                  col: 10,
                  type: "island",
                  containerSize: 1
               }
               
               //Hier wird in alle Fischernetze Fische gefüllt
               //Die erste Zahl (1) gibt an, wie viele Fische
               //row und col muss mit dem zu füllenden Netz oben (5)
               //übereinstimmen
            ].concat(initArray(1, {
               row: 1,
               col: 2,
               type: "fishes"
            }))
         },
         {
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 6],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         //Definieren, wo der Roboter starten soll
         initItems: [{
                  row: 1,
                  col: 0,
                  type: "robot"
               },
               //Legt ein Fischernetz über die Fischgrafik
               {
                  row: 1,
                  col: 9,
                  type: "net"
               },
               {
                  row: 1,
                  col:3,
                  type:"reef"
               },
               //Legt für jede Insel fest, wie viele Fische dort hingeliefert
               // werden sollen (containerSize:)
               //row und col muss mit der Insel oben (6)
               //übereinstimmen
               {
                  row: 1,
                  col: 10,
                  type: "island",
                  containerSize: 1
               }
               
               //Hier wird in alle Fischernetze Fische gefüllt
               //Die erste Zahl (1) gibt an, wie viele Fische
               //row und col muss mit dem zu füllenden Netz oben (5)
               //übereinstimmen
            ].concat(initArray(1, {
               row: 1,
               col: 9,
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