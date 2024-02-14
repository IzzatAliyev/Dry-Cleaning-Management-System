import { Customer, Service, Order } from '../models/index';
export * from './customerService';
export * from './serviceService';

// Sample data
export const orders: Order[] = [];
export const customers: Customer[] = [];

export function placeOrder(customer: Customer, service: Service, dropOffDate: string): Order {
    const newOrder: Order = {
        customerId: customers.indexOf(customer),
        serviceId: service.id,
        dropOffDate,
    };
    orders.push(newOrder);

    customer.orderCount++;

    if (customer.orderCount >= 3) {
        customer.isRepeatCustomer = true;
        customer.discount += 3;
    }

    return newOrder;
}
