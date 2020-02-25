import mongoose from 'mongoose';
import Note from '../models/Note';
import { BadRequest } from '../utils/ErrorsService';

const _repository = mongoose.model('Note', Note);

class NoteService {
  async getAllByBugId(bugId) {
    if (!bugId) {
      throw new BadRequest('Invalid Bug Id!');
    }
    return await _repository.find({ bugId });
  }

  async create(noteData) {
    return await _repository.create(noteData);
  }

  async delete(noteId) {
    await _repository.findByIdAndRemove(noteId);
  }
  // async closeBug(bugId) {
  //   let bugToClose = await _repository.findById(bugId);
  //   // @ts-ignore
  //   bugToClose.closed = true;
  //   await bugToClose.save();
  // }
}

const noteService = new NoteService();
export default noteService;
