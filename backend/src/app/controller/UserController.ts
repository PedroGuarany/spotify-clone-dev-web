import { Request, Response } from "express";

class UserController {
    public users(req:Request, res:Response) {
        return res.json({
          user: 'ta funcionando'
        });
      }
}

export const userController = new UserController();
