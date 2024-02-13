import { CustomerRequestDto } from '../dtos/CustomerRequestDto';
import { Customer, Service, Order } from '../models/index';

// Sample data
export const orders: Order[] = [];
export const customers: Customer[] = [];
export const services: Service[] = [
    { id: 1, name: 'Dry Cleaning', type: 'Regular', cost: 10 },
    { id: 2, name: 'Dry Cleaning', type: 'Express', cost: 15 },
    { id: 3, name: 'Laundry', type: 'Regular', cost: 8 },
    { id: 4, name: 'Laundry', type: 'Express', cost: 12 },
];

export function addCustomer(customer: CustomerRequestDto): Customer {
    const { firstName, lastName, surname } = customer;
    const newCustomer = new Customer(firstName, lastName, surname, false, 0, 0);
    customers.push(newCustomer);
    return newCustomer;
}

export function findCustomer(lastName: string): Customer {
    const customer = customers.find(x => x.lastName === lastName);
    return customer ?? new Customer('', '', '', false, -1, -1);
}

export function getCustomers(): Customer[] {
    return customers;
}

export function getServices(): Service[] {
    return services;
}

export function checkCustomer(lastName: string): Customer {
    const existingCustomer = customers.find((c) => c.lastName === lastName);

    if (existingCustomer) {
        existingCustomer.isRepeatCustomer = existingCustomer.orderCount >= 2;
        return existingCustomer;
    } else {
        const newCustomer: Customer = {
            firstName: '',
            lastName,
            surname: '',
            isRepeatCustomer: false,
            discount: 0,
            orderCount: 0,
        };
        customers.push(newCustomer);
        return newCustomer;
    }
}

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
