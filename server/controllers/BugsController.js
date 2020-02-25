import express from 'express';
import bugService from '../services/BugService';

export default class BugsController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.closeBug);
  }

  async getAll(req, res, next) {
    try {
      let bugs = await bugService.getAll(req.query);
      return res.send(bugs);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let bug = await bugService.getById(req.params.id);
      return res.send(bug);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let createdBug = await bugService.create(req.body);
      return res.send(createdBug);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let updatedBug = await bugService.edit(req.params.id, req.body);
      return res.send(updatedBug);
    } catch (error) {
      next(error);
    }
  }

  async closeBug(req, res, next) {
    try {
      return await bugService.closeBug(req.params.id);
      return res.send('This bug is closed!');
    } catch (error) {
      next(error);
    }
  }
}
