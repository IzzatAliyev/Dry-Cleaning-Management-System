import { connect } from "../db/database";
import { OrderRequestDto } from "../dtos/OrderRequestDto";
import { OrderSum } from "../dtos/OrderSum";
import { Order, Service } from "../models";
import * as customerService from "./customerService"

export async function createOrder(order: OrderRequestDto): Promise<string> {
    const conn = await connect();
    try {
        const { customerId, serviceId, filialId, urgency, difficulty, receiveDate, returnDate } = order;
        const newOrder = new Order(customerId, serviceId, filialId, urgency, difficulty, receiveDate, returnDate);
        const res = await conn.query(`SELECT services.cost FROM services WHERE id = ?`, [serviceId])
        const services = res[0] as Service[]
        const service = services[0];
        const discountProcent = await customerService.updateCustomer(customerId);
        const sumdiff = checkDifficulty(difficulty, service.cost); 
        const sumUrgAndDiff = checkUrgency(urgency, sumdiff); 
        newOrder.sbd = sumUrgAndDiff;
        const diff = sumUrgAndDiff * (discountProcent / 100)
        const totalSum = sumUrgAndDiff - diff;
        newOrder.sum = totalSum;
        await conn.query(`INSERT INTO orders SET ?`, [newOrder])
        return "Order created";
    } catch (err: any) {
        console.error(err.message)
        return err.message
    }
    finally {
        await conn.end()
    }
}

export async function getOrders(): Promise<Order[]> {
    const conn = await connect();
    try {
        const orders = await conn.query("SELECT * FROM orders");
        console.log(orders)
        return orders[0] as Order[];
    }
    catch (err: any) {
        console.error(err.message)
        return []
    }
    finally {
        await conn.end()
    }
}

export async function getSum(year: string): Promise<number | undefined> {
    try {
        const orders = await getSumAndMonth(year);
        let sum: number = 0
        for (let order of orders!) {
            sum += order.sum
        }

        return sum
    } catch (err: any) {
        console.error(err.message)
    }
}

export async function getSumAndMonth(year: string): Promise<OrderSum[] | undefined> {
    const conn = await connect()
    try {
        const res = await conn.query("SELECT sum, CASE WHEN orders.receiveDate like '%-01-%' THEN 1 WHEN orders.receiveDate like '%-02-%' THEN 2 WHEN orders.receiveDate like '%-03-%' THEN 3 WHEN orders.receiveDate like '%-04-%' THEN 4 WHEN orders.receiveDate like '%-05-%' THEN 5 WHEN orders.receiveDate like '%-06-%' THEN 6 WHEN orders.receiveDate like '%-07-%' THEN 7 WHEN orders.receiveDate like '%-08-%' THEN 8 WHEN orders.receiveDate like '%-09-%' THEN 9 WHEN orders.receiveDate like '%-10-%' THEN 10 WHEN orders.receiveDate like '%-11-%' THEN 11 WHEN orders.receiveDate like '%-12-%' THEN 12 ELSE 0 END AS month FROM cleaner.orders WHERE orders.receiveDate LIKE Concat(?, '%')", [year]);
        const orders = res[0] as OrderSum[];

        return orders
    } catch (err: any) {
        console.error(err.message)
    }
    finally {
        await conn.end()
    }
}

function checkDifficulty(difficulty: number, sum: number): number {
    switch (difficulty) {
        case 1:
            sum += 0;
            break;
        case 2:
            sum += 2;
            break;
        case 3:
            sum += 4;
            break;
        case 4:
            sum += 6;
            break;
        case 5:
            sum += 8;
            break;
        default:
            sum += 0;
            break;
    }

    return sum;
}

function checkUrgency(urgency: number, sum: number): number {
    switch (urgency) {
        case 1:
            sum += 0;
            break;
        case 2:
            sum += 4;
            break;
        case 3:
            sum += 6;
            break;
        case 4:
            sum += 6;
            break;
        case 5:
            sum += 8;
            break;
        default:
            sum += 10;
            break;
    }

    return sum;
}

function calculateDateDifference(dateString1: string, dateString2: string): number {
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);

    const differenceInMilliseconds = Math.abs(date1.getTime() - date2.getTime());

    const differenceInDays = differenceInMilliseconds / (1000 * 3600 * 24);

    return differenceInDays;
}