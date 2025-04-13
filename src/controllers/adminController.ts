import { Request, Response } from "express";
import Grocery from "../models/Grocery";

export const addGrocery = async (req: Request, res: Response) => {
  const { name, price, stock } = req.body;
  const grocery = await Grocery.create({ name, price, stock });
  res.status(201).json(grocery);
};

export const getGroceries = async (_: Request, res: Response) => {
  const groceries = await Grocery.findAll();
  res.json(groceries);
};

export const deleteGrocery = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Grocery.destroy({ where: { id } });
  res.send("Deleted");
};

export const updateGrocery = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;
  await Grocery.update({ name, price, stock }, { where: { id } });
  res.send("Updated");
};
