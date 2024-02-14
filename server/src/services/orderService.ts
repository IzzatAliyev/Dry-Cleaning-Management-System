import { connect } from "../db/database";
import { OrderRequestDto } from "../dtos/OrderRequestDto";
import { Order, Service } from "../models";
import * as customerService from "./customerService"

export async function createOrder(order: OrderRequestDto): Promise<string> {
    const conn = await connect();
    try {
        const { customerId, serviceId, filialId, receiveDate, returnDate } = order;
        const newOrder = new Order(customerId, serviceId, filialId, receiveDate, returnDate);
        const res = await conn.query(`SELECT services.cost FROM services WHERE id = ?`, [serviceId])
        const services = res[0] as Service[]
        const service = services[0];
        const discountProcent = await customerService.updateCustomer(customerId);
        const totalCost = calculateOrderSum(service.cost, receiveDate, returnDate);
        const diff = totalCost * (discountProcent / 100)
        const totalSum = totalCost - diff;
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

function calculateDateDifference(dateString1: string, dateString2: string): number {
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);

    const differenceInMilliseconds = Math.abs(date1.getTime() - date2.getTime());

    const differenceInDays = differenceInMilliseconds / (1000 * 3600 * 24);

    return differenceInDays;
}

function calculateOrderSum(baseCost: number, receiveDate: string, returnDate: string): number {
    const differenceInDays = calculateDateDifference(receiveDate, returnDate);

    let additionalCost = 0;

    if (differenceInDays <= 7) {
        additionalCost = 20;
    } else if (differenceInDays > 7 && differenceInDays <= 14) {
        additionalCost = 15;
    } else if (differenceInDays > 14 && differenceInDays >= 30) {
        additionalCost = 5;
    }

    const totalCost = baseCost + additionalCost;

    return totalCost;
}