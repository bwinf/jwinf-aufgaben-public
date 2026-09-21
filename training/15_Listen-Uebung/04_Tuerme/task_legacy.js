function initTask(subTask) {
    subTask.gridInfos = {
        contextType: "paint",
        timeoutMinutes: 15, // Nach 15 Minuten warnen
        maxIterWithoutAction: 12800,
        hideSaveOrLoad: true,
        itemTypes: {
            robot: {
                img: imgPath + "blue_robot.png",
                side: 90,
                nbStates: 1,
                isRobot: true,
                offsetX: -15,
                offsetY: 15,
                zOrder: 3
            },
            marker: {
                num: 50,
                img: imgPath + "paint_marker.png",
                side: 60,
                isContainer: true,
                containerFilter: function (item) {
                    return item.type === "paint";
                },
                zOrder: 0
            },
            paint: {
                img: imgPath + "paint.png",
                side: 60,
                isWithdrawable: true,
                isColor: true,
                zOrder: 1
            },
            board_background: {
                num: 90,
                color: "#d3d3d3",
                side: 60,
                zOrder: 0
            },
            board: {
                num: 91,
                side: 60,
                isWritable: true,
                zOrder: 1,
                isNumber: true,
                isBoard: true
            },
            board_notwritable: {
                num: 92,
                side: 60,
                zOrder: 1,
                isNumber: true
            },
            tower_start: {
                num: -1,
                img: "turm_start.svg",
                side: 60,
                zOrder: 0
            },
            tower_cont: {
                num: -2,
                img: "turm_cont.svg",
                side: 60,
                zOrder: 0
            },
        },
        maxInstructions: {
            easy: 15,
            medium: 40,
            hard: 70
        },
        includeBlocks: {
            groupByCategory: {
                easy: false,
                medium: true,
                hard: true,
            },
            generatedBlocks: {
                robot: {
                    shared: ["east", "west", "dropObject", "readNumber"],
                    easy: [],
                    medium: ["north", "south", ],
                    hard: ["north", "south", ]
                }
            },
            standardBlocks: {
                includeAll: false,
                wholeCategories: {
                    easy: [],
                    medium: ["variables"],
                    hard: ["variables"]
                },
                singleBlocks: {
                    shared: [],
                    easy: ["controls_if", "logic_compare"],
                    medium: ["controls_repeat_ext", "controls_for", "controls_if", "lists_create_with_empty", "lists_length", "lists_getIndex", "lists_setIndex", "logic_compare", "math_number"],
                    hard: ["controls_repeat_ext", "controls_for", "controls_flow_statements", "controls_if", "lists_create_with_empty", "lists_length", "lists_getIndex", "lists_setIndex", "logic_compare", "math_number", "math_arithmetic", "logic_boolean"]
                }
            },
            variables: {
                easy: ['Speicher1', 'Speicher2'],
                medium: [],
                hard: [],
            },
            variablesOnlyBlocks: ['get', 'set'],
        },

        blocklyColourTheme: "bwinf",
        ignoreInvalidMoves: false,
        checkEndEveryTurn: false,
    };

    subTask.data = {
        easy: [{
                tiles: [
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, -2, 0, 0],
                    [0, 0, -2, -2, 0, 0],
                    [0, 0, -2, -2, 0, 0],
                    [0, 0, -2, -2, 0, 0],
                    [0, 0, -1, -1, 0, 0],
                    [1, 1, 1, 1, 50, 1],
                ],
                initItems: [{
                        row: 6,
                        col: 1,
                        type: "robot"
                    },
                    {
                        row: 6,
                        col: 2,
                        type: "board_notwritable",
                        value: 4
                    },
                    {
                        row: 6,
                        col: 3,
                        type: "board_notwritable",
                        value: 5
                    }
                ]
            },
            {
                tiles: [
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, -2, 0, 0, 0],
                    [0, 0, -2, -2, 0, 0],
                    [0, 0, -2, -2, 0, 0],
                    [0, 0, -1, -1, 0, 0],
                    [1, 1, 1, 1, 1, 1],
                ],
                initItems: [{
                        row: 6,
                        col: 1,
                        type: "robot"
                    }, ,
                    {
                        row: 6,
                        col: 2,
                        type: "board_notwritable",
                        value: 4
                    },
                    {
                        row: 6,
                        col: 3,
                        type: "board_notwritable",
                        value: 3
                    }
                ]
            },
            {
                tiles: [
                    [0, 0, -2, 0, 0, 0],
                    [0, 0, -2, -2, 0, 0],
                    [0, 0, -2, -2, 0, 0],
                    [0, 0, -2, -2, 0, 0],
                    [0, 0, -2, -2, 0, 0],
                    [0, 0, -1, -1, 0, 0],
                    [1, 1, 1, 1, 1, 1],
                ],
                initItems: [{
                        row: 6,
                        col: 1,
                        type: "robot"
                    }, ,
                    {
                        row: 6,
                        col: 2,
                        type: "board_notwritable",
                        value: 6
                    },
                    {
                        row: 6,
                        col: 3,
                        type: "board_notwritable",
                        value: 5
                    }
                ]
            },
            {
                tiles: [
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, -2, 0, 0],
                    [0, 0, -2, -2, 0, 0],
                    [0, 0, -2, -2, 0, 0],
                    [0, 0, -1, -1, 0, 0],
                    [1, 1, 1, 1, 50, 1],
                ],
                initItems: [{
                        row: 6,
                        col: 1,
                        type: "robot"
                    },
                    {
                        row: 6,
                        col: 2,
                        type: "board_notwritable",
                        value: 3
                    },
                    {
                        row: 6,
                        col: 3,
                        type: "board_notwritable",
                        value: 4
                    }
                ]
            },
        ],
        medium: [{
                tiles: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, 0, -2, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, -2, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, -2, 0, -2, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, -2, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, 0, -2, 0, -2, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, 0, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 50, 50, 1, 50, 50, 1, 50, 50, 50, 1, 50, 1],
                ],
                initItems: [{
                        row: 11,
                        col: 1,
                        type: "robot"
                    }, ,
                    {
                        row: 11,
                        col: 2,
                        type: "board_notwritable",
                        value: 1
                    },
                    {
                        row: 11,
                        col: 3,
                        type: "board_notwritable",
                        value: 3
                    },
                    {
                        row: 11,
                        col: 4,
                        type: "board_notwritable",
                        value: 2
                    },
                    {
                        row: 11,
                        col: 5,
                        type: "board_notwritable",
                        value: 4
                    },
                    {
                        row: 11,
                        col: 6,
                        type: "board_notwritable",
                        value: 6
                    },
                    {
                        row: 11,
                        col: 7,
                        type: "board_notwritable",
                        value: 5
                    },
                    {
                        row: 11,
                        col: 8,
                        type: "board_notwritable",
                        value: 7
                    },
                    {
                        row: 11,
                        col: 9,
                        type: "board_notwritable",
                        value: 8
                    },
                    {
                        row: 11,
                        col: 10,
                        type: "board_notwritable",
                        value: 10
                    },
                    {
                        row: 11,
                        col: 11,
                        type: "board_notwritable",
                        value: 9
                    },
                    {
                        row: 11,
                        col: 12,
                        type: "board_notwritable",
                        value: 11
                    }
                ]
            },
            {
                tiles: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, -2, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, -2, 0, 0, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, -2, -2, 0, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, -2, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, -2, 0, 0, -2, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, -2, -2, 0, -2, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 50, 1, 1, 50, 50, 1, 1, 50, 50, 1, 1, 1],
                ],
                initItems: [{
                        row: 11,
                        col: 1,
                        type: "robot"
                    },
                    {
                        row: 11,
                        col: 2,
                        type: "board_notwritable",
                        value: 3
                    },
                    {
                        row: 11,
                        col: 3,
                        type: "board_notwritable",
                        value: 2
                    },
                    {
                        row: 11,
                        col: 4,
                        type: "board_notwritable",
                        value: 1
                    },
                    {
                        row: 11,
                        col: 5,
                        type: "board_notwritable",
                        value: 4
                    },
                    {
                        row: 11,
                        col: 6,
                        type: "board_notwritable",
                        value: 7
                    },
                    {
                        row: 11,
                        col: 7,
                        type: "board_notwritable",
                        value: 6
                    },
                    {
                        row: 11,
                        col: 8,
                        type: "board_notwritable",
                        value: 5
                    },
                    {
                        row: 11,
                        col: 9,
                        type: "board_notwritable",
                        value: 8
                    },
                    {
                        row: 11,
                        col: 10,
                        type: "board_notwritable",
                        value: 11
                    },
                    {
                        row: 11,
                        col: 11,
                        type: "board_notwritable",
                        value: 10
                    },
                    {
                        row: 11,
                        col: 12,
                        type: "board_notwritable",
                        value: 9
                    }
                ]
            },
            {
                tiles: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, 0, 0],
                    [0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, -2, 0, 0],
                    [0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, -2, -2, 0],
                    [0, 0, -2, 0, -2, 0, 0, 0, 0, 0, 0, -2, -2, 0],
                    [0, 0, -2, 0, -2, 0, 0, 0, -2, 0, 0, -2, -2, 0],
                    [0, 0, -2, 0, -2, 0, 0, 0, -2, -2, 0, -2, -2, 0],
                    [0, 0, -2, -2, -2, 0, 0, 0, -2, -2, 0, -2, -2, 0],
                    [0, 0, -2, -2, -2, 0, -2, 0, -2, -2, 0, -2, -2, 0],
                    [0, 0, -2, -2, -2, -2, -2, 0, -2, -2, 0, -2, -2, 0],
                    [0, 0, -2, -2, -2, -2, -2, -2, -2, -2, 0, -2, -2, 0],
                    [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 50, 1, 1, 1, 1, 1, 1, 1, 1, 50, 1, 1],
                ],
                initItems: [{
                        row: 11,
                        col: 1,
                        type: "robot"
                    },
                    {
                        row: 11,
                        col: 2,
                        type: "board_notwritable",
                        value: 10
                    },
                    {
                        row: 11,
                        col: 3,
                        type: "board_notwritable",
                        value: 5
                    },
                    {
                        row: 11,
                        col: 4,
                        type: "board_notwritable",
                        value: 8
                    },
                    {
                        row: 11,
                        col: 5,
                        type: "board_notwritable",
                        value: 3
                    },
                    {
                        row: 11,
                        col: 6,
                        type: "board_notwritable",
                        value: 4
                    },
                    {
                        row: 11,
                        col: 7,
                        type: "board_notwritable",
                        value: 2
                    },
                    {
                        row: 11,
                        col: 8,
                        type: "board_notwritable",
                        value: 7
                    },
                    {
                        row: 11,
                        col: 9,
                        type: "board_notwritable",
                        value: 6
                    },
                    {
                        row: 11,
                        col: 10,
                        type: "board_notwritable",
                        value: 1
                    },
                    {
                        row: 11,
                        col: 11,
                        type: "board_notwritable",
                        value: 11
                    },
                    {
                        row: 11,
                        col: 12,
                        type: "board_notwritable",
                        value: 9
                    }
                ]
            },
        ],
        hard: [{
                tiles: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, 0, -2, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, -2, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, -2, 0, -2, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, -2, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, 0, -2, 0, -2, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, 0, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 50, 1, 1, 50, 1, 1, 50, 50, 1, 1, 50, 1],
                ],
                initItems: [{
                        row: 11,
                        col: 1,
                        type: "robot"
                    },
                    {
                        row: 11,
                        col: 2,
                        type: "board_notwritable",
                        value: 1
                    },
                    {
                        row: 11,
                        col: 3,
                        type: "board_notwritable",
                        value: 3
                    },
                    {
                        row: 11,
                        col: 4,
                        type: "board_notwritable",
                        value: 2
                    },
                    {
                        row: 11,
                        col: 5,
                        type: "board_notwritable",
                        value: 4
                    },
                    {
                        row: 11,
                        col: 6,
                        type: "board_notwritable",
                        value: 6
                    },
                    {
                        row: 11,
                        col: 7,
                        type: "board_notwritable",
                        value: 5
                    },
                    {
                        row: 11,
                        col: 8,
                        type: "board_notwritable",
                        value: 7
                    },
                    {
                        row: 11,
                        col: 9,
                        type: "board_notwritable",
                        value: 8
                    },
                    {
                        row: 11,
                        col: 10,
                        type: "board_notwritable",
                        value: 10
                    },
                    {
                        row: 11,
                        col: 11,
                        type: "board_notwritable",
                        value: 9
                    },
                    {
                        row: 11,
                        col: 12,
                        type: "board_notwritable",
                        value: 11
                    }
                ]
            },
            {
                tiles: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, -2, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, -2, 0, 0, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, -2, -2, 0, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, 0, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, 0, 0, 0, -2, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, -2, 0, 0, -2, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, -2, -2, 0, -2, -2, -2, -2, -2, -2, -2, -2, 0],
                    [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 50, 1, 1, 1, 50, 1, 1, 1, 1],
                ],
                initItems: [{
                        row: 11,
                        col: 1,
                        type: "robot"
                    },
                    {
                        row: 11,
                        col: 2,
                        type: "board_notwritable",
                        value: 3
                    },
                    {
                        row: 11,
                        col: 3,
                        type: "board_notwritable",
                        value: 2
                    },
                    {
                        row: 11,
                        col: 4,
                        type: "board_notwritable",
                        value: 1
                    },
                    {
                        row: 11,
                        col: 5,
                        type: "board_notwritable",
                        value: 4
                    },
                    {
                        row: 11,
                        col: 6,
                        type: "board_notwritable",
                        value: 7
                    },
                    {
                        row: 11,
                        col: 7,
                        type: "board_notwritable",
                        value: 6
                    },
                    {
                        row: 11,
                        col: 8,
                        type: "board_notwritable",
                        value: 5
                    },
                    {
                        row: 11,
                        col: 9,
                        type: "board_notwritable",
                        value: 8
                    },
                    {
                        row: 11,
                        col: 10,
                        type: "board_notwritable",
                        value: 11
                    },
                    {
                        row: 11,
                        col: 11,
                        type: "board_notwritable",
                        value: 10
                    },
                    {
                        row: 11,
                        col: 12,
                        type: "board_notwritable",
                        value: 9
                    }
                ]
            },
            {
                tiles: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, 0, 0],
                    [0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, -2, 0, 0],
                    [0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, -2, -2, 0],
                    [0, 0, -2, 0, -2, 0, 0, 0, 0, 0, 0, -2, -2, 0],
                    [0, 0, -2, 0, -2, 0, 0, 0, -2, 0, 0, -2, -2, 0],
                    [0, 0, -2, 0, -2, 0, 0, 0, -2, -2, 0, -2, -2, 0],
                    [0, 0, -2, -2, -2, 0, 0, 0, -2, -2, 0, -2, -2, 0],
                    [0, 0, -2, -2, -2, 0, -2, 0, -2, -2, 0, -2, -2, 0],
                    [0, 0, -2, -2, -2, -2, -2, 0, -2, -2, 0, -2, -2, 0],
                    [0, 0, -2, -2, -2, -2, -2, -2, -2, -2, 0, -2, -2, 0],
                    [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ],
                initItems: [{
                        row: 11,
                        col: 1,
                        type: "robot"
                    },
                    {
                        row: 11,
                        col: 2,
                        type: "board_notwritable",
                        value: 10
                    },
                    {
                        row: 11,
                        col: 3,
                        type: "board_notwritable",
                        value: 5
                    },
                    {
                        row: 11,
                        col: 4,
                        type: "board_notwritable",
                        value: 8
                    },
                    {
                        row: 11,
                        col: 5,
                        type: "board_notwritable",
                        value: 3
                    },
                    {
                        row: 11,
                        col: 6,
                        type: "board_notwritable",
                        value: 4
                    },
                    {
                        row: 11,
                        col: 7,
                        type: "board_notwritable",
                        value: 2
                    },
                    {
                        row: 11,
                        col: 8,
                        type: "board_notwritable",
                        value: 7
                    },
                    {
                        row: 11,
                        col: 9,
                        type: "board_notwritable",
                        value: 6
                    },
                    {
                        row: 11,
                        col: 10,
                        type: "board_notwritable",
                        value: 1
                    },
                    {
                        row: 11,
                        col: 11,
                        type: "board_notwritable",
                        value: 11
                    },
                    {
                        row: 11,
                        col: 12,
                        type: "board_notwritable",
                        value: 9
                    }
                ]
            },
        ]
    };

    initBlocklySubTask(subTask);
    displayHelper.thresholdEasy = 120;
    displayHelper.thresholdMedium = 240;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);