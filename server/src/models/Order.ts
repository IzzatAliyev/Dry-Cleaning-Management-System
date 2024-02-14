export class Order {
    constructor(
        public customerId: number,
        public serviceId: number,
        public filialId: number,
        public receiveDate: string,
        public returnDate: string,
        public sum?: number,
        public id?: number) { }
}