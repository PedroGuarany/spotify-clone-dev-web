import { Router } from "express";
import { playlistsController } from "./app/controller/PlaylistsController";
import { userController } from "./app/controller/UsersController";

const router: Router = Router()

router.get("/playlists", playlistsController.list);
router.get("/playlists/:id", playlistsController.get);
router.post("/playlists", playlistsController.create);
router.post("/playlists/:id", playlistsController.edit);
router.get("/playlists/:id/musics", playlistsController.getMusics);
router.get("/playlists/:id/musics/:musicId", playlistsController.getMusic);


router.get("/users", userController.list);
router.get("/users/:id", userController.get);
router.post("/users", userController.create);
router.put("/users/:id", userController.edit);

export { router };