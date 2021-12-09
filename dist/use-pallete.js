import { composeStore } from "store";
import nodeSchema from "./schema/node.schema.json";
import palletSchema from "./schema/pallete.schema.json";
export { palletSchema };
export const toCSSColor = ({
  r,
  g,
  b
} = {
  r: 1,
  g: 1,
  b: 1
}) => "rgb(" + [r, g, b].map(x => Math.floor(x * 255)).join(",") + ")";
;
;
;
;
export const defaultStixPallete = {
  "mitigates": {
    "type": "relationship",
    "name": "mitigates",
    "r": 0.073,
    "g": 0.572,
    "b": 0.277
  },
  "uses": {
    "type": "relationship",
    "name": "uses",
    "r": 1,
    "g": 0.136,
    "b": 0.605
  },
  "subtechnique-of": {
    "type": "relationship",
    "name": "subtechnique-of",
    "b": 0.532,
    "g": 0.627,
    "r": 0.928
  },
  "revoked-by": {
    "type": "relationship",
    "name": "revoked-by",
    "r": 0.73,
    "g": 0.687,
    "b": 0.636
  },
  "indicates": {
    "type": "relationship",
    "name": "indicates",
    "r": 1,
    "g": 0.58,
    "b": 1
  },
  "includes": {
    "type": "relationship",
    "name": "includes",
    "r": 1,
    "g": 1,
    "b": 1
  }
};
export const defaultStixNodesPallete = {
  "attack-pattern": {
    "type": "node",
    "name": "attack-pattern",
    "r": 1,
    "g": 0.562,
    "b": 0
  },
  "course-of-action": {
    "type": "node",
    "name": "course-of-action",
    "r": 0,
    "b": 1,
    "g": 0.499
  },
  "malware": {
    "type": "node",
    "name": "malware",
    "r": 0.936,
    "g": 0.074,
    "b": 0.064
  },
  "intrusion-set": {
    "type": "node",
    "name": "intrusion-set",
    "r": 0.751,
    "b": 1,
    "g": 0.444
  },
  "tool": {
    "type": "node",
    "name": "tool",
    "r": 0.471,
    "g": 0.491,
    "b": 0.539
  },
  "indicator": {
    "type": "node",
    "name": "indicator",
    "b": 1,
    "g": 0,
    "r": 1
  },
  "control-group": {
    "type": "node",
    "name": "control-group",
    "r": 0.5,
    "g": 0.7,
    "b": 0.812
  },
  "control": {
    "type": "node",
    "name": "control",
    "r": 0.385,
    "g": 0.831,
    "b": 0.644
  },
  "control-catalog": {
    "type": "node",
    "name": "control-catalog",
    "r": 1,
    "g": 1,
    "b": 1
  }
};
export const useNodeSchema = composeStore < PalleteNodeType > {
  schema: nodeSchema,
  definition: "node",
  identifier: "id"
};
export const useNodeTypes = composeStore < PalleteNodeType > {
  schema: palletSchema,
  definition: "pallete_node",
  identifier: "name"
};
export const useRelationshipTypes = composeStore < PalleteRelationshipType > {
  schema: palletSchema,
  definition: "pallete_relationship",
  identifier: "name"
};
export const useTraits = composeStore < TraitDefinition > {
  schema: palletSchema,
  identifier: "name",
  definition: "trait_definition"
};
export const useProperties = composeStore < PropertyDefinition > {
  schema: palletSchema,
  identifier: "name",
  definition: "property_definition"
};