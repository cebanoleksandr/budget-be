import { v4 as uuid4 } from "uuid";

let bills = [];

export const getByUserId = (userId) => {
  return bills.find(b => b.userId === userId) || null;
}

export const update = (userId, number) => {
  const bill = getByUserId(userId);

  if (!bill || bill.bill + number < 0) {
    return null;
  }

  bill.bill += number;
  return bill;
}

export const create = (userId, bill) => {
  const newBill = {
    id: uuid4(),
    userId,
    bill,
  }

  bills.push(newBill);
  return newBill;
}

export const remove = (id) => {
  bills = bills.filter(b => b.userId !== id);
}
