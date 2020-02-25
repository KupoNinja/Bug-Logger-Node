import express from 'express';
import noteService from '../services/NoteService';

export default class NotesController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .post('', this.create)
      .delete('/:id', this.delete);
    // .get('/:id', this.getById)
    // .post('', this.create)
    // .put('/:id', this.update)
    // .delete('/:id', this.closeBug);
  }

  async create(req, res, next) {
    try {
      let createdNote = await noteService.create(req.body);
      return res.send(createdNote);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await noteService.delete(req.params.id);
      return res.send('Note deleted!');
    } catch (error) {
      next(error);
    }
  }
}
