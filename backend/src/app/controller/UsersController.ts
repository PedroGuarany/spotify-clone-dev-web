import { Request, Response } from "express";
import data from "../../db.json";
const users = data["users"];

class UserController {
    public list(req:Request, res:Response) {
      return res.json(users);
    }

    public get(req:Request, res:Response) {
      const { id } = req.params;
      const user = users.find(user => user.id === Number.parseInt(id));
      return res.json(user);
    }

    public create(req:Request, res:Response) {
      const {name, email, birthdate, gender, password} = req.body;
      users.push({
        id: users.length + 1,
        name,
        email,
        birthdate,
        gender,
        password
      });

      return res.json({id: users.length + 1});
    }

    public edit(req:Request, res:Response) {
      const { id } = req.params;
      const {name, email, birthdate, gender, password} = req.body;
      let user = users.find(user => user.id === Number.parseInt(id));
      if(!user)
        return res.status(404).json({error: "User not found"});

      user.email = email;
      user.name = name;
      user.birthdate = birthdate;
      user.gender = gender;
      user.password = password;
      users[Number.parseInt(id)] = user;

      return res.json({});
    }
}

export const userController = new UserController();
