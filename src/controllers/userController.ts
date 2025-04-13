import { Request, Response } from "express";
import Grocery from "../models/Grocery";
import Order from "../models/Order";
import { Op } from "sequelize";

// View groceries with stock > 0
export const viewGroceries = async (req: Request, res: Response) => {
  try {
    const items = await Grocery.findAll({
      where: { stock: { [Op.gt]: 0 } },
    });
    res.json(items);
  } catch (error) {
    console.error("Error in viewGroceries:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Book an order
export const bookOrder = async (req: Request, res: Response) => {
  try {
    const { items } = req.body;
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: "Invalid order format" });
    }

    let total = 0;

    for (let item of items) {
      const grocery = await Grocery.findByPk(item.id);
      if (!grocery) {
        return res.status(400).send(`Grocery item with ID ${item.id} does not exist.`);
      }

      if (grocery.stock < item.qty) {
        return res.status(400).send(`Not enough stock for item: ${grocery.name}`);
      }

      total += grocery.price * item.qty;
    }

    const order = await Order.create({ items, total });

    for (let item of items) {
      const grocery = await Grocery.findByPk(item.id);
      if (grocery) {
        await grocery.update({ stock: grocery.stock - item.qty });
      }
    }

    res.status(201).json(order);
  } catch (error) {
    console.error("Error in bookOrder:", error);
    res.status(500).send("Internal Server Error");
  }
};
