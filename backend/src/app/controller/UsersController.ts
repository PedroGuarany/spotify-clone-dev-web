import { Request, Response } from "express";
import { stringify } from "querystring";
import data from "../../db.json";
const users = data["users"];

class UserController {
    public list(req:Request, res:Response) {
      return res.json(users);
    }

    public get(req:Request, res:Response) {
      const { id } = req.params;
      const user = users.find(user => user.id === Number.parseInt(id));
      if(!user)
        return res.status(404).json({error: "User not found"});
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

      return res.json({id: users.length});
    }

    public edit(req:Request, res:Response) {
      const { id } = req.params;
      const {name, email, birthdate, gender, password} = req.body;
      let user = users.find(user => user.id === Number.parseInt(id));
      if(!user)
        return res.status(404).json({error: "User not found"});

      user.email = email ? email : user.email;
      user.name = name ? name : user.name;
      user.birthdate = birthdate ? email : user.email;
      user.gender = gender ? gender : user.gender;
      user.password = password ? password : user.password;
      users[Number.parseInt(id)] = user;

      return res.json({});
    }

    public search(req:Request, res:Response) {
      const { email } = req.query;
      const user = users.find(user => user.email === String(email));
      if(!user)
        return res.status(404).json({error: "User not found"});
      return res.json(user);
    }
}

export const userController = new UserController();
