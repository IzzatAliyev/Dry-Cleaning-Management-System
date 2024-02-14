import { Customer } from "./Customer";
import { FilialRes } from "./FilialRes";
import { Service } from "./Service";

export interface OrderRes {
    customer: Customer;
    service: Service;
    filial: FilialRes;
    receiveDate: string;
    returnDate: string;
    sum: number;
}
