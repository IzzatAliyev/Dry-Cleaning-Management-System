import { connect } from "../db/database";
import { CustomerRequestDto } from "../dtos/CustomerRequestDto";
import { Customer } from "../models";

export async function addCustomer(customer: CustomerRequestDto): Promise<string> {
    const { firstName, lastName, surName } = customer;
    const newCustomer = new Customer(firstName, lastName, surName, false, 0, 0);
    const conn = await connect();
    await conn.query(`INSERT INTO customers SET ?`, [newCustomer])
    return "Customer created";
}

export async function updateCustomer(id: number): Promise<number> {
    const customer = await findCustomerById(id);
    const conn = await connect();
    const checkedCustomer = checkAndUpdateCustomer(customer);
    await conn.query(`UPDATE customers SET ? WHERE id = ?`, [checkedCustomer, id])
    const discount = getDiscount(customer);
    return discount;
}

export async function findCustomerById(id: number): Promise<Customer> {
    const conn = await connect();
    const res = await conn.query(`SELECT * FROM customers WHERE id = ?`, [id])
    const customers = res[0] as Customer[]
    console.log(customers)
    return customers[0];
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

function checkAndUpdateCustomer(customer: Customer): Customer {
    customer.isRepeatCustomer = customer.orderCount >= 2;
    customer.orderCount++;
    return customer;
}

function getDiscount(customer: Customer) : number
{
    return customer.orderCount >= 2 ? (customer.orderCount - 2) * 3 : 0; 
}