import * as billService from '../services/bill.service.js';

export const getOne = (req, res) => {
  const { id } = req.params;
  const foundBill = billService.getByUserId(id);

  if (!foundBill) {
    res.sendStatus(404);
    return;
  }

  res.statusCode = 200;
  res.send(foundBill);
}

export const remove = (req, res) => {
  const { id } = req.params;

  billService.remove(id);
  res.sendStatus(204);
}

export const create = (req, res) => {
  const { userId, bill } = req.body;
  
  if (!userId || typeof bill !== 'number') {
    res.sendStatus(422);
    return;
  }

  const newBill = billService.create(userId, bill);

  res.statusCode = 201;
  res.send(newBill);
}

export const update = (req, res) => {
  const { id } = req.params;
  const { sum } = req.body;

  if (!sum) {
    res.sendStatus(422);
    return;
  }

  const updatedBill = billService.update(id, sum);

  if(!updatedBill) {
    res.sendStatus(404);
    return;
  }

  res.statusCode = 200;
  res.send(updatedBill);
}
