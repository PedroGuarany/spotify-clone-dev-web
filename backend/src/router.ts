import { Router } from "express";
import { playlistsController } from "./app/controller/PlaylistsController";

const router: Router = Router()

router.get("/playlists", playlistsController.playlists);

export { router };