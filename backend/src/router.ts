import { Router } from "express";
import { playlistsController } from "./app/controller/PlaylistsController";
import { userController } from "./app/controller/UserController";

const router: Router = Router()

router.get("/playlists", playlistsController.playlists);
router.post("/users", userController.users);

export { router };