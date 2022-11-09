import { Request, Response } from "express";

class PlaylistsController {

  public playlists(req:Request, res:Response) {
    return res.json({
      playlists: 'ta funcionando'
    });
  }
}

export const playlistsController = new PlaylistsController();