import { Concept } from './concept'
export interface Attribute {
    id: number;
    uuid: string;
    value: string;
    concept: Concept;

}
