import { Order } from "../models";
import { CustomerResponseDto } from "./CustomerResponseDto";
import { FilialResponseDto } from "./FilialResponseDto";
import { ServiceResponseDto } from "./ServiceResponseDto";

export class OrderResponseDto {
    constructor(order: Order)
    {
        this.id = order.id!;
        this.receiveDate = order.receiveDate;
        this.returnDate = order.returnDate;
        this.sum = order.sum!;
        this.sbd = order.sbd!;
    }

    id: number;
    customer?: CustomerResponseDto;
    service?: ServiceResponseDto;
    filial?: FilialResponseDto;
    urgency?: string;
    difficulty?: string;
    receiveDate: string;
    returnDate: string;
    sum: number;
    sbd: number;
}