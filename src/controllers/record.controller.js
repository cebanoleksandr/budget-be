import * as recordService from '../services/record.service.js';

export const getAll = (req, res) => {
  const { userId } = req.params;
  const records = recordService.getRecordsByUserId(userId);

  res.statusCode = 200;
  res.send(records);
}

export const getOne = (req, res) => {
  const { id } = req.params;
  const record = recordService.getRecordById(id);

  if (!record) {
    res.sendStatus(404);
    return;
  }

  res.statusCode = 200;
  res.send(record);
}

export const create = (req, res) => {
  const { record } = req.body;

  if (!record) {
    res.sendStatus(422);
    return;
  }

  const newRecord = recordService.createRecord(record);
  res.statusCode = 201;
  res.send(newRecord);
}

export const remove = (req, res) => {
  const { id } = req.params;

  recordService.removeRecord(id)
  res.sendStatus(204);
}

export const update = (req, res) => {
  const { id } = req.params;
  const { recordPart } = req.body;
  const foundRecord = recordService.getRecordById(id);

  if (!foundRecord) {
    res.sendStatus(404);
    return;
  }

  if (!recordPart) {
    res.sendStatus(422);
    return;
  }

  const updatedRecord = recordService.updateRecord(id, recordPart);

  res.statusCode = 200;
  res.send(updatedRecord);
}
