import { Request, Response } from 'express';
import * as services from '../services/Service';
import { displayServices } from '../services/Service';

export function startApp(req: Request, res: Response): void {
  const { lastName } = req.body;
  const customer = services.checkCustomer(lastName);

  res.json({ customer });
}

export function getServices(req: Request, res: Response): void {
  const availableServices = displayServices();
  res.json(availableServices);
}

export function placeOrder(req: Request, res: Response): void {
  const { customerId, serviceId, dropOffDate } = req.body;
  const customer = services.customers[customerId];
  const service = services.services.find((s) => s.id === serviceId);

  if (customer && service) {
    const newOrder = services.placeOrder(customer, service, dropOffDate);

    res.json({
      message: 'Order placed successfully!',
      order: newOrder,
      discount: customer.discount,
    });
  } else {
    res.status(400).json({ error: 'Invalid customer or service ID' });
  }
}