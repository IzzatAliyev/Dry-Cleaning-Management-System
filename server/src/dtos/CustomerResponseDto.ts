import { Customer } from "../models";

export class CustomerResponseDto {
    constructor(customer: Customer)
    {
        this.id = customer.id!;
        this.firstName = customer.firstName;
        this.lastName = customer.lastName;
        this.surName = customer.surName;
        this.isRepeatCustomer = customer.isRepeatCustomer;
        this.orderCount = customer.orderCount;
    }

    id: number;
    firstName: string;
    lastName: string;
    surName: string;
    isRepeatCustomer: boolean;
    orderCount: number;
}