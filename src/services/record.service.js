import { v4 as uuid4 } from "uuid";

let records = [];

export const getRecordsByUserId = (userId) => {
  return records.filter(r => r.userId === userId);
}

export const getRecordById = (id) => {
  return records.find(r => r.id === id) || null;
}

export const removeRecord = (id) => {
  records = records.filter(r => r.id !== id);
}

export const createRecord = (record) => {
  const newRecord = {
    ...record,
    id: uuid4(),
  }

  records.push(newRecord);
  return newRecord;
}

export const updateRecord = (id, recordPart) => {
  let record = getRecordById(id);

  if (!!record) {
    record = {
      ...record,
      ...recordPart,
    }
  }

  return record;
}
