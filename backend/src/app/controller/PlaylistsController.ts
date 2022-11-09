import { Request, Response } from "express";
import data from "../../db.json";
const playlists = data["playlists"];

class PlaylistsController {

  public list(req:Request, res:Response) {
    return res.json(playlists);
  }
  
  public get(req:Request, res:Response) {
    const { id } = req.params;
    const playlist = playlists.find(playlist => playlist.id === Number.parseInt(id));
    return res.json(playlist);
  }

  public create(req:Request, res:Response) {
    const {name, description, image, alt} = req.body;
    playlists.push({
      id: playlists.length + 1,
      name,
      description,
      image,
      alt
    });

    return res.json({id: playlists.length + 1});
  }

  public edit(req:Request, res:Response) {
    const { id } = req.params;
    const {name, description, image, alt} = req.body;
    let playlist = playlists.find(playlist => playlist.id === Number.parseInt(id));
    if(!playlist)
      return res.status(404).json({error: "Playlist not found"});

    playlist.name = name;
    playlist.description = description;
    playlist.image = image;
    playlist.alt = alt;
    playlists[Number.parseInt(id)] = playlist;

    return res.json();
  }

  public getMusic(req:Request, res:Response) {
    const { id, musicId } = req.params;
    const playlist = playlists.find(playlist => playlist.id === Number.parseInt(id));
    if(!playlist)
      return res.status(404).json({error: "Playlist not found"});

    return res.json(playlist.musics?.find(music => music.id == Number.parseInt(musicId))); 
  }

  public getMusics(req:Request, res:Response) {
    const { id } = req.params;
    const playlist = playlists.find(playlist => playlist.id === Number.parseInt(id));
    if(!playlist)
      return res.status(404).json({error: "Playlist not found"});

    return res.json(playlist.musics);
  }
}

export const playlistsController = new PlaylistsController();