import { Request, Response } from "express";
import db from "../../db";

const collectionName = "users";
let nextId = 2;

class UserController {

    public async list(req:Request, res:Response) {
      let result = await db.list(collectionName); 
      return res.json(result);
    }

    public async get(req:Request, res:Response) {
      const { id } = req.params;
      
      let result = await db.get(collectionName, Number.parseInt(id));
      if(!result)
        return res.status(404).json({error: "User not found"});
      return res.json(result);
    }

    public async create(req:Request, res:Response) {
      const {name, email, birthdate, gender, password} = req.body;
      let result = await db.insert(collectionName, {
        id: nextId,
        name,
        email,
        birthdate,
        gender,
        password
      });

      nextId += 1;
      return res.json(result.insertedId);
    }

    public async edit(req:Request, res:Response) {
      const { id } = req.params;
      const {name, email, birthdate, gender, password} = req.body;

      let result = await db.update(collectionName, Number.parseInt(id), {name, email, birthdate, gender, password});

      return res.json(result);
    }

    public async search(req:Request, res:Response) {
      const { email } = req.query;
      let result = await db.search(collectionName, {email: String(email)});
      if(!result)
        return res.status(404).json({error: "User not found"});

      return res.json(result);
    }
}

export const userController = new UserController();
