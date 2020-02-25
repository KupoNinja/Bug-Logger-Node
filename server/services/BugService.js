import mongoose from 'mongoose';
import Bug from '../models/Bug';
import { BadRequest } from '../utils/ErrorsService';

const _repository = mongoose.model('Bug', Bug);

class BugService {
  async getAll(query) {
    return await _repository.find({ ...query, closed: false });
  }

  async getById(bugId) {
    let bug = await _repository.findById(bugId);
    if (!bug) {
      throw new BadRequest('Invalid Id.');
    }
    return bug;
  }

  async create(bugData) {
    return await _repository.create(bugData);
  }

  async edit(bugId, bugData) {
    // TODO If bug is closed then return BadRequest("Bug is already closed.")
    // if ()
    return await _repository.findByIdAndUpdate(bugId, bugData, { new: true });
  }
}

const bugService = new BugService();
export default bugService;
