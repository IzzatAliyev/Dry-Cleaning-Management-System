export class Customer {
    constructor(public firstName: string, public lastName: string, public surName: string, public isRepeatCustomer: boolean, public discount: number, public orderCount: number, public id?: number) {}
}