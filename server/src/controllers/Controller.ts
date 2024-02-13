import { Request, Response } from 'express';
import * as services from '../services/Service';
import { CustomerRequestDto } from '../dtos/CustomerRequestDto';

export function addCustomer(req: Request, res: Response): void {
  const customerReq = req.body as CustomerRequestDto;
  const customer = services.addCustomer(customerReq);

  res.json(customer);
}

function findCustomer(req: Request, res: Response): void {
  const lastName = req.query['lastName'] as string;
  const customer = services.findCustomer(lastName);

  res.json(customer);
}

export function startApp(req: Request, res: Response): void {
  const { lastName } = req.body;
  const customer = services.checkCustomer(lastName);

  res.json(customer);
}

export function getServices(req: Request, res: Response): void {
  const availableServices = services.getServices();
  res.json(availableServices);
}

export function getCustomers(req: Request, res: Response): void {
  if (req.query['lastName']) {
    findCustomer(req, res)
  }
  else {
    const allCustomers = services.getCustomers();
    res.json(allCustomers);
  }
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