import palletSchema from "./schema/pallete.schema.json";
export { palletSchema };
export interface PalleteElement extends Record<string, any> {
    name: string;
    r: number;
    g: number;
    b: number;
}
export declare const toCSSColor: any;
export interface PalleteNodeType extends PalleteElement {
    trait_definitions?: [
        {
            identifier: string;
            any?: boolean;
            options?: string[];
        }
    ];
}
export interface PalleteRelationshipType extends PalleteElement {
    source_types?: string[];
    target_types?: string[];
    trait_definitions?: [
        {
            identifier: string;
            any?: boolean;
            options?: string[];
        }
    ];
}
export interface TraitDefinition {
    name: string;
    any?: boolean;
    options?: string[];
}
export interface PropertyDefinition {
    identifier: string;
    min?: number;
    max?: number;
    type: "string" | "boolean" | "number";
    range?: string[];
    enum?: string[];
}
export declare const defaultStixPallete: {
    mitigates: {
        type: string;
        name: string;
        r: number;
        g: number;
        b: number;
    };
    uses: {
        type: string;
        name: string;
        r: number;
        g: number;
        b: number;
    };
    "subtechnique-of": {
        type: string;
        name: string;
        b: number;
        g: number;
        r: number;
    };
    "revoked-by": {
        type: string;
        name: string;
        r: number;
        g: number;
        b: number;
    };
    indicates: {
        type: string;
        name: string;
        r: number;
        g: number;
        b: number;
    };
    includes: {
        type: string;
        name: string;
        r: number;
        g: number;
        b: number;
    };
};
export declare const defaultStixNodesPallete: {
    "attack-pattern": {
        type: string;
        name: string;
        r: number;
        g: number;
        b: number;
    };
    "course-of-action": {
        type: string;
        name: string;
        r: number;
        b: number;
        g: number;
    };
    malware: {
        type: string;
        name: string;
        r: number;
        g: number;
        b: number;
    };
    "intrusion-set": {
        type: string;
        name: string;
        r: number;
        b: number;
        g: number;
    };
    tool: {
        type: string;
        name: string;
        r: number;
        g: number;
        b: number;
    };
    indicator: {
        type: string;
        name: string;
        b: number;
        g: number;
        r: number;
    };
    "control-group": {
        type: string;
        name: string;
        r: number;
        g: number;
        b: number;
    };
    control: {
        type: string;
        name: string;
        r: number;
        g: number;
        b: number;
    };
    "control-catalog": {
        type: string;
        name: string;
        r: number;
        g: number;
        b: number;
    };
};
export declare const useRigNodeSchema: import("zustand").UseStore<import("store").Store<PalleteNodeType>, import("zustand").StoreApi<import("store").Store<PalleteNodeType>>>;
export declare const useNodeTypes: import("zustand").UseStore<import("store").Store<PalleteNodeType>, import("zustand").StoreApi<import("store").Store<PalleteNodeType>>>;
export declare const useRelationshipTypes: import("zustand").UseStore<import("store").Store<PalleteRelationshipType>, import("zustand").StoreApi<import("store").Store<PalleteRelationshipType>>>;
export declare const useTraits: import("zustand").UseStore<import("store").Store<TraitDefinition>, import("zustand").StoreApi<import("store").Store<TraitDefinition>>>;
export declare const useProperties: import("zustand").UseStore<import("store").Store<PropertyDefinition>, import("zustand").StoreApi<import("store").Store<PropertyDefinition>>>;
