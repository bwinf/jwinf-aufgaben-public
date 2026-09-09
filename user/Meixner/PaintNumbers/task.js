function initTask(subTask) {
   subTask.gridInfos = {
      context: "robot",
      conceptViewer: false,
      //Hier wird der Kontext definiert. Mit dem Kontext werden ItemTypes und Aufgabenspezifische Übersetzungen geladen
      contextType: "paint",
      showCardinals: false,
      blocklyColourTheme: "bwinf",
      //Gibt an, wie viele Blöcke zur Verfügung stehen
      //Für alle Versionen jeweils 20
        maxInstructions: {
      medium: 16,
      hard: 20
    },

      //Hier kann angegeben werden, welche Blöcke für die Aufgabe zur Verfügung stehen.
      includeBlocks: {
         groupByCategory: false,
         //Alle Roboter spezifischen Blocks, welche für die Version jeweils genutzt werden.
         generatedBlocks: {
            robot: {
               shared: ["east", "west", "north", "south", "dropObject","readNumber"],
            }
         },
         //Allgemeine Blöcke wie Bedingungen und Schleifen.
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
            //Alle Blöcke bei shared weden für alle Versionen angezeigt
               shared: ["controls_repeat_ext"]
            }
         },

         variables: {
            shared: ["Anzahl"],

         },
         //welche Funktionen für Variablen zur Verfügung stehen.
         variablesOnlyBlocks: {
            shared: ['get', 'set'],

         }
      }
   };

   //Hier werden die Aufgaben definiert
   //Index row und col starten bei 0
   subTask.data = {
      //Version **
      medium: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         //Definieren, wo der Roboter starten soll
         initItems: [{
            row: 0,
            col: 0,
            type: "robot"
         },
         {
                  row: 1,
                  col: 0,
                  type: "number",
                  value: 4
               }]
      },
      {

         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         //Definieren, wo der Roboter starten soll
         initItems: [{
            row: 0,
            col: 0,
            type: "robot"
         },
         {
                  row: 1,
                  col: 0,
                  type: "number",
                  value: 7
               }]
      },
      {

         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
         ],
         //Definieren, wo der Roboter starten soll
         initItems: [{
            row: 0,
            col: 0,
            type: "robot"
         },
         {
                  row: 1,
                  col: 0,
                  type: "number",
                  value: 0
               }]
      }
   
   ],
      //Version ****
      hard: [{
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 2, 2, 1, 1, 1, 1, 1],
            [1, 2, 2, 1, 1, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 2, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 0,
            col: 0,
            type: "robot"
         },
         {
                  row: 1,
                  col: 0,
                  type: "number",
                  value: 3
               },
         {
                  row: 2,
                  col: 0,
                  type: "number",
                  value: 2
               },
         {
                  row: 3,
                  col: 0,
                  type: "number",
                  value: 5
               },
         {
                  row: 4,
                  col: 0,
                  type: "number",
                  value: 0
               },
         {
                  row: 5,
                  col: 0,
                  type: "number",
                  value: 1
               }      
      ]
      },
   {
         tiles: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 2, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1]
         ],
         initItems: [{
            row: 0,
            col: 0,
            type: "robot"
         },
         {
                  row: 1,
                  col: 0,
                  type: "number",
                  value: 1
               },
         {
                  row: 2,
                  col: 0,
                  type: "number",
                  value: 0
               },
         {
                  row: 3,
                  col: 0,
                  type: "number",
                  value: 2
               },
         {
                  row: 4,
                  col: 0,
                  type: "number",
                  value: 0
               },
         {
                  row: 5,
                  col: 0,
                  type: "number",
                  value: 7
               }      
      ]
      }],
   };

   initBlocklySubTask(subTask);
}
//Laden der definierten Informationen
//2. Parameter: Die Liste gibt an, welche Versionen es gibt
//3. Parameter: Gibt an bei welcher Version gestartet wird. Bei null wird bei basic gestartet
window.initBlocklySubTask = function () {};
window.taskData = window.taskData || {};
window.taskData.waitInit = function () { initTask(window.taskData); };
window.taskData.codecastParameters = window.taskData.codecastParameters || {
    language: "de-DE",
    platform: "blockly",
    canChangePlatform: false,
    showStepper: true,
    showStack: false,
    showViews: true,
    showIO: true,
    controls: { reload: false },
    hideSettings: true,
    jwinfMenu: { copyPaste: true, undoRedo: true, svgExport: true }
};
