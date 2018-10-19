import { LocationAttribute } from './location-attribute'
export interface Location {

    id: number;
    parent: any;
    uuid: string;
    name: string;
    addressLine1: string;
    addressLine2: string,
    addressLine3?: string;
    addressLine4?: string;
    addressLine5?: string;
    locality: string;
    state: string;
    country: string;
    attributes?: LocationAttribute[]

}