export class Order {
    constructor(
        public customerId: number,
        public serviceId: number,
        public filialId: number,
        public urgency: number,
        public difficulty: number,
        public receiveDate: string,
        public returnDate: string,
        public sum?: number,
        public sbd?: number,
        public id?: number) { }
}