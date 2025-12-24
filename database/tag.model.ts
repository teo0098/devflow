import { Document, model, models, Schema } from "mongoose";

interface ITag {
  name: string;
  questions: number;
}

export interface ITagDoc extends ITag, Document {}

const TagSchema = new Schema<ITag>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    questions: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Tag = (models?.Tag as unknown as ITag) || model<ITag>("Tag", TagSchema);

export default Tag;
