import { connect } from "../db/database";
import { CustomerRequestDto } from "../dtos/CustomerRequestDto";
import { Customer } from "../models";
import { customers } from "./Service";

export async function addCustomer(customer: CustomerRequestDto): Promise<string> {
    const { firstName, lastName, surName } = customer;
    const newCustomer = new Customer(firstName, lastName, surName, false, 0, 0);
    const conn = await connect();
    await conn.query(`INSERT INTO customers SET ?`, [newCustomer])
    return "Customer created";
}

export async function findCustomer(lastName: string): Promise<Customer> {
    const conn = await connect();
    const res = await conn.query(`SELECT * FROM customers WHERE lastName = ?`, [lastName])
    const customers = res[0] as Customer[]
    console.log(customers)
    return customers[0];
}

export async function getCustomers(): Promise<Customer[]> {
    const conn = await connect();
    const customers = await conn.query("SELECT * FROM customers");
    console.log(customers)
    return customers[0] as Customer[];
}


function checkCustomer(lastName: string): Customer {
    const existingCustomer = customers.find((c) => c.lastName === lastName);

    if (existingCustomer) {
        existingCustomer.isRepeatCustomer = existingCustomer.orderCount >= 2;
        return existingCustomer;
    } else {
        const newCustomer: Customer = {
            firstName: '',
            lastName,
            surName: '',
            isRepeatCustomer: false,
            discount: 0,
            orderCount: 0,
        };
        customers.push(newCustomer);
        return newCustomer;
    }
}