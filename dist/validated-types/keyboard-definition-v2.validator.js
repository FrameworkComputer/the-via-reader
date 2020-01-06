"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
// generated by typescript-json-validator
var util_1 = require("util");
var Ajv = require("ajv");
exports.ajv = new Ajv({
    allErrors: true,
    coerceTypes: false,
    format: 'fast',
    nullable: true,
    unicode: true,
    uniqueItems: true,
    useDefaults: true
});
exports.ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
exports.KeyboardDefinitionV2Schema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    defaultProperties: [],
    definitions: {
        BacklightConfig: {
            enum: [
                1,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                2,
                20,
                21,
                23,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            type: 'number'
        },
        LightingTypeDefinition: {
            enum: [
                'none',
                'qmk_backlight',
                'qmk_underglow',
                'wt_mono_backlight',
                'wt_rgb_backlight'
            ],
            type: 'string'
        },
        'Partial<VIALightingTypeDefinition>': {
            defaultProperties: [],
            properties: {
                effects: {
                    items: {
                        additionalItems: {
                            anyOf: [
                                {
                                    type: 'string'
                                },
                                {
                                    type: 'number'
                                }
                            ]
                        },
                        items: [
                            {
                                type: 'string'
                            },
                            {
                                type: 'number'
                            }
                        ],
                        minItems: 2,
                        type: 'array'
                    },
                    type: 'array'
                },
                keycodes: {
                    enum: ['none', 'qmk', 'wt'],
                    type: 'string'
                },
                supportedBacklightValues: {
                    items: {
                        $ref: '#/definitions/BacklightConfig'
                    },
                    type: 'array'
                }
            },
            type: 'object'
        },
        'Partial<{c:string;t:string;x:number;y:number;w:number;a:number;}>': {
            defaultProperties: [],
            properties: {
                a: {
                    type: 'number'
                },
                c: {
                    type: 'string'
                },
                t: {
                    type: 'string'
                },
                w: {
                    type: 'number'
                },
                x: {
                    type: 'number'
                },
                y: {
                    type: 'number'
                }
            },
            type: 'object'
        }
    },
    properties: {
        customFeatures: {
            items: {
                enum: ['rotary-encoder'],
                type: 'string'
            },
            type: 'array'
        },
        customKeycodes: {
            items: {
                defaultProperties: [],
                properties: {
                    name: {
                        type: 'string'
                    },
                    shortName: {
                        type: 'string'
                    },
                    title: {
                        type: 'string'
                    }
                },
                required: ['name', 'title'],
                type: 'object'
            },
            type: 'array'
        },
        layouts: {
            defaultProperties: [],
            properties: {
                keymap: {
                    items: {
                        anyOf: [
                            {
                                defaultProperties: [],
                                properties: {
                                    name: {
                                        type: 'string'
                                    }
                                },
                                type: 'object'
                            },
                            {
                                items: {
                                    anyOf: [
                                        {
                                            $ref: '#/definitions/Partial<{c:string;t:string;x:number;y:number;w:number;a:number;}>'
                                        },
                                        {
                                            type: 'string'
                                        }
                                    ]
                                },
                                type: 'array'
                            }
                        ]
                    },
                    type: 'array'
                },
                labels: {
                    items: {
                        anyOf: [
                            {
                                items: {
                                    type: 'string'
                                },
                                type: 'array'
                            },
                            {
                                type: 'string'
                            }
                        ]
                    },
                    type: 'array'
                },
                presets: {
                    additionalProperties: {
                        items: {
                            type: 'number'
                        },
                        type: 'array'
                    },
                    defaultProperties: [],
                    type: 'object'
                }
            },
            required: ['keymap'],
            type: 'object'
        },
        lighting: {
            anyOf: [
                {
                    allOf: [
                        {
                            $ref: '#/definitions/Partial<VIALightingTypeDefinition>'
                        },
                        {
                            defaultProperties: [],
                            properties: {
                                extends: {
                                    $ref: '#/definitions/LightingTypeDefinition'
                                }
                            },
                            required: ['extends'],
                            type: 'object'
                        }
                    ]
                },
                {
                    enum: [
                        'none',
                        'qmk_backlight',
                        'qmk_underglow',
                        'wt_mono_backlight',
                        'wt_rgb_backlight'
                    ],
                    type: 'string'
                }
            ]
        },
        matrix: {
            defaultProperties: [],
            properties: {
                cols: {
                    type: 'number'
                },
                rows: {
                    type: 'number'
                }
            },
            required: ['cols', 'rows'],
            type: 'object'
        },
        name: {
            type: 'string'
        },
        productId: {
            type: 'string'
        },
        vendorId: {
            type: 'string'
        }
    },
    required: ['layouts', 'lighting', 'matrix', 'name', 'productId', 'vendorId'],
    type: 'object'
};
exports.isKeyboardDefinitionV2 = exports.ajv.compile(exports.KeyboardDefinitionV2Schema);
function validate(value) {
    if (exports.isKeyboardDefinitionV2(value)) {
        return value;
    }
    else {
        throw new Error(exports.ajv.errorsText(exports.isKeyboardDefinitionV2.errors.filter(function (e) { return e.keyword !== 'if'; }), { dataVar: 'KeyboardDefinitionV2' }) +
            '\n\n' +
            util_1.inspect(value));
    }
}
exports.default = validate;
