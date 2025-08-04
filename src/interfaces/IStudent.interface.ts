import { Group } from "./IGroup.interface";

interface Student {
    id: number;
    barcode: string;

    name: string;
    surname: string;

    image: string;
    group: Group;

    score: number;
};