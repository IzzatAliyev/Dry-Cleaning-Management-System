import { Customer, Service } from "../models";

export class ServiceResponseDto {
    constructor(service: Service)
    {
        this.name = service.name;
        this.cost = service.cost;
    }

    name: string;
    type?: string;
    cost: number;
}