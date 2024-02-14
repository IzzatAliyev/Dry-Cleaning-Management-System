import { Filial } from "../models/Filial";

export class FilialResponseDto {
    constructor(filial: Filial)
    {
        this.name = filial.name;
        this.location = filial.location;
    }

    name: string;
    location: string;
}