export declare const nodeSchema: {
    $id: string;
    title: string;
    type: string;
    properties: {
        nodes: {
            type: string;
            items: {
                $ref: string;
            };
        };
    };
    definitions: {
        external_reference: {
            $id: string;
            type: string;
            title: string;
            properties: {
                uri: {
                    title: string;
                    type: string;
                    format: string;
                };
                source_name: {
                    title: string;
                    type: string;
                };
                external_id: {
                    title: string;
                    type: string;
                };
            };
            required: string[];
        };
        source_reference: {
            $id: string;
            title: string;
            type: string;
        };
        target_reference: {
            $id: string;
            title: string;
            type: string;
        };
        relationship: {
            type: string;
            $id: string;
            title: string;
            description: string;
            properties: {
                id: {
                    type: string;
                };
                labels: {
                    type: string;
                    items: {
                        type: string;
                    };
                };
                source: {
                    $ref: string;
                };
                relationship_type: {
                    title: string;
                    type: string;
                };
                target: {
                    $ref: string;
                };
                ns: {
                    title: string;
                    type: string;
                };
            };
            required: string[];
        };
        kill_chain: {
            $id: string;
            type: string;
            title: string;
            properties: {
                phase_name: {
                    title: string;
                    type: string;
                };
            };
            required: string[];
        };
        trait_type: {
            $id: string;
            title: string;
            type: string;
            enum: string[];
        };
        trait_value: {
            $id: string;
            title: string;
            type: string;
        };
        trait_instance: {
            $id: string;
            type: string;
            title: string;
            properties: {
                trait_type: {
                    $ref: string;
                };
                value: {
                    $ref: string;
                };
            };
            required: string[];
        };
        label_instance: {
            $id: string;
            title: string;
            type: string;
        };
        node: {
            $id: string;
            title: string;
            type: string;
            description: string;
            properties: {
                id: {
                    type: string;
                };
                name: {
                    type: string;
                };
                labels: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
                description: {
                    type: string;
                };
                external_references: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
                attributes: {
                    title: string;
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
                type: {
                    type: string;
                    enum: string[];
                };
            };
            required: string[];
        };
    };
};
