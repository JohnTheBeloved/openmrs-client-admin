import { Attribute } from "./attribute";
import { ConceptType } from "./concept-type.enum";

export interface Concept {
    id: number;
    uuid: string;
    name: string;
    description: string;
    options: Attribute[];
    type: ConceptType
}
