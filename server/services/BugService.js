import mongoose from 'mongoose';
import Bug from '../models/Bug';

const _repository = mongoose.model('Bug', Bug);

class BugService {
  async getAll(query) {
    return await _repository.find({ ...query, closed: false });
  }
}

const bugService = new BugService();
export default bugService;
