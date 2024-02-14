export class Order {
    constructor(
        public customerId: number,
        public serviceId: number,
        public filialId: number,
        public sum: number,
        public receiveDate: string,
        public returnDate: string,
        public id?: number) { }
}