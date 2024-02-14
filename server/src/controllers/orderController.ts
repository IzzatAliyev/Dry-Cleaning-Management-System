import { Request, Response } from 'express';
import * as services from '../services/index';
import { OrderRequestDto } from '../dtos/OrderRequestDto';
import { OrderResponseDto } from '../dtos/OrderResponseDto';
import { CustomerResponseDto } from '../dtos/CustomerResponseDto';
import { ServiceResponseDto } from '../dtos/ServiceResponseDto';
import { FilialResponseDto } from '../dtos/FilialResponseDto';

export async function createOrder(req: Request, res: Response): Promise<void> {
    const orderReq = req.body as OrderRequestDto;
    const order = await services.createOrder(orderReq);

    res.json(order);
}

export async function getOrders(req: Request, res: Response): Promise<void> {
    const orders = await services.getOrders();
    const resOrders: OrderResponseDto[] = [];
    for (const order of orders) {
        const customer = await services.findCustomerById(order.customerId);
        const customerRes = new CustomerResponseDto(customer);
        const service = await services.findServiceById(order.serviceId);
        const serviceRes = new ServiceResponseDto(service);
        const filial = await services.findFilialById(order.filialId)
        const filialRes = new FilialResponseDto(filial);
        const resOrder = new OrderResponseDto(order);
        resOrder.customer = customerRes;
        resOrder.service = serviceRes;
        resOrder.filial = filialRes;
        resOrders.push(resOrder)
    }

    res.json(resOrders);
}