import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Bug = new Schema(
  {
    content: { type: String, maxlength: 1000, trim: true },
    bug: { type: ObjectId, ref: 'Bug', required: true },
    reportedBy: { type: String, required: true }, //The provided name for who reported the bug
    closedDate: { type: Date }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Bug;
