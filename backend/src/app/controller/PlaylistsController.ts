import { Request, Response } from "express";
import db from "../../db";

const collectionName = "playlists";
let nextId = 1;

interface Music{
    id: 1,
    name: string,
    artist: string,
    album: string,
    addIn: string,
    time: string,
    src: string,
    alt: string,
    image: string
}

class PlaylistsController {

  public async list(req:Request, res:Response) {
    let result = await db.list(collectionName); 
      return res.json(result);
  }
  
  public async get(req:Request, res:Response) {
    const { id } = req.params;
    let result = await db.get(collectionName, Number.parseInt(id));
    if(!result)
      return res.status(404).json({error: "Playlist not found"});
    return res.json(result);
  }

  public async create(req:Request, res:Response) {
    const {name, description, image, alt} = req.body;
    let result = await db.insert(collectionName, {
      id: nextId,
      name,
      description,
      image,
      alt
    });

    nextId += 1;
    return res.json(result.insertedId);
  }

  public async edit(req:Request, res:Response) {
    const { id } = req.params;
    const {name, description, image, alt} = req.body;
    
    let result = await db.update(collectionName, Number.parseInt(id), {name, description, image, alt});
    return res.json();
  }

  public async getMusic(req:Request, res:Response) {
    const { id, musicId } = req.params;
    let playlist = await db.get(collectionName, Number.parseInt(id));
    if(!playlist)
      return res.status(404).json({error: "Playlist not found"});

    let musics: Music[] = playlist.musics;
    return res.json(musics.find(music  => music.id == Number.parseInt(musicId))); 
  }

  public async searchMusicByName(req:Request, res:Response) {
    const { id } = req.params;
    const { name } = req.query;
    let playlist = await db.get(collectionName, Number.parseInt(id));
    if(!playlist)
      return res.status(404).json({error: "Playlist not found"});

    let musics: Music[] = playlist.musics;
    return res.json(musics.filter(music => music.name.includes(String(name)))); 
  }

  public async getMusics(req:Request, res:Response) {
    const { id } = req.params;
    let playlist = await db.get(collectionName, Number.parseInt(id));
    if(!playlist)
      return res.status(404).json({error: "Playlist not found"});

    return res.json(playlist.musics);
  }
}

export const playlistsController = new PlaylistsController();