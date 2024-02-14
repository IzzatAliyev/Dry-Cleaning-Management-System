import { Service } from "../models/Service";

export const services: Service[] = [
    { id: 1, name: 'Dry Cleaning', type: 'Regular', cost: 10 },
    { id: 2, name: 'Dry Cleaning', type: 'Express', cost: 15 },
    { id: 3, name: 'Laundry', type: 'Regular', cost: 8 },
    { id: 4, name: 'Laundry', type: 'Express', cost: 12 },
];

export function getServices(): Service[] {
    return services;
}