import { CustomerRes } from "./CustomerRes";
import { FilialRes } from "./FilialRes";
import { Service } from "./Service";

export interface OrderRes {
    id: number;
    customer: CustomerRes;
    service: Service;
    filial: FilialRes;
    receiveDate: string;
    returnDate: string;
    sum: number;
}
