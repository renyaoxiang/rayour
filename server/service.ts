import { Request, Response } from 'express';
import * as db from './db.json';
export const loginService = (req: Request, res: Response) => {

  res.status(200).send({ id: 123 });
};

export const menuService = (req: Request, res: Response) => {

  res.status(200).send(db);
};
