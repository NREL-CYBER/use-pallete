export const nodeSchema = {
    $id: "node-instance",
    title: "Node",
    type: "object",
    properties: {
        nodes: {
            type: "array",
            items: {
                $ref: "#/definitions/node"
            }
        }
    },
    definitions: {
        external_reference: {
            $id: "#/definitions/external_reference",
            type: "object",
            title: "External Reference",
            properties: {
                uri: {
                    title: "Universal resource Identifier",
                    type: "string",
                    format: "uri"
                },
                source_name: {
                    title: "Source Name",
                    type: 'string'
                },
                external_id: {
                    title: "External ID (usually TTP)",
                    type: "string"
                }
            }, required: [
                'uri'
            ]
        },
        source_reference: {
            $id: "#/definitions/source_reference",
            title: "Source",
            type: "string",
        },
        target_reference: {
            $id: "#/definitions/target_reference",
            title: "Target",
            type: "string",
        },
        relationship: {
            type: "object",
            $id: "#/definitions/relationship",
            title: "Relationship",
            description: "describes a relationship between nodes",
            properties: {
                id: {
                    type: 'string'
                },
                labels: {
                    type: "array",
                    items: {
                        type: "string"
                    }
                },
                source: {
                    $ref: "#/definitions/source_reference",
                },
                relationship_type: {
                    title: "Relationship Type",
                    type: "string",
                },
                target: {
                    $ref: "#/definitions/target_reference",
                },
                ns: {
                    title: "Namespace",
                    type: "string",
                },
            }, required: [
                'source',
                'target',
                "id",
                'relationship_type',
                "ns"
            ]
        },
        kill_chain: {
            $id: "#/definitions/kill_chain",
            type: "object",
            title: "Kill Chain",
            properties: {
                phase_name: {
                    title: "Kill Chain Phase",
                    type: "string"
                },
            }, required: [
                'phase_name'
            ]
        },
        trait_type: {
            $id: "#/definitions/trait_type",
            title: "Trait Type",
            type: "string",
            enum: [
                "error"
            ]
        },
        trait_value: {
            $id: "#/definitions/trait_value",
            title: "Trait Value",
            type: "string",
        },
        trait_instance: {
            $id: "#/definitions/trait_instance",
            type: "object",
            title: "Node Trait",
            properties: {
                trait_type: {
                    $ref: "#/definitions/trait_type"
                },
                value: {
                    $ref: "#/definitions/trait_value",
                },
            }, required: [
                'trait_type',
                "value"
            ]
        },
        label_instance: {
            $id: "#/definitions/label_instance",
            title: "Label this node",
            type: "string",
        },
        node: {
            $id: "#/definitions/node",
            title: "Node",
            type: "object",
            description: "A node in the graph",
            properties: {
                id: {
                    type: 'string'
                },
                name: {
                    type: "string"
                },
                labels: {
                    type: "array",
                    items: {
                        $ref: "#/definitions/label_instance"
                    }
                },
                description: {
                    type: 'string'
                },
                external_references: {
                    type: "array",
                    items: {
                        "$ref": "#/definitions/external_reference"
                    }
                },
                attributes: {
                    title: "Attributes",
                    type: 'array',
                    items: {
                        "$ref": "#/definitions/trait_instance"
                    }
                },
                type: {
                    type: "string",
                    enum: [
                        "error"
                    ]
                }
            },
            required: [
                "id",
                'name',
                'type',
                'description',
            ]
        }
    }
}