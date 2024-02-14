import { Customer, Service, Order } from '../models/index';
export * from './customerService';
export * from './serviceService';
export * from './serviceTypeService';
export * from './orderService'

// Sample data
export const orders: Order[] = [];
export const customers: Customer[] = [];

export function placeOrder(customer: Customer, service: Service, dropOffDate: string): void {
    // const newOrder: Order = {
    //     customerId: customers.indexOf(customer),
    //     serviceId: service.id!,
    // };
    // orders.push(newOrder);

    // customer.orderCount++;

    // if (customer.orderCount >= 3) {
    //     customer.isRepeatCustomer = true;
    //     customer.discount += 3;
    // }

    // return newOrder;
}
