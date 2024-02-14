import { Request, Response } from 'express';
import * as services from '../services/Service';
import { OrderRequestDto } from '../dtos/OrderRequestDto';

export async function createOrder(req: Request, res: Response): Promise<void> {
    const orderReq = req.body as OrderRequestDto;
    const order = await services.createOrder(orderReq);

    res.json(order);
}