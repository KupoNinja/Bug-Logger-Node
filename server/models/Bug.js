import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Bug = new Schema(
  {
    closed: Boolean,
    description: String,
    title: String,
    reportedBy: String, //The provided name for who reported the bug
    closedDate: Date
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Bug;
