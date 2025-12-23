import { model, models, Schema } from "mongoose";

export interface IQuestion {
  title: string;
  content: string;
  author: Schema.Types.ObjectId;
  tags: Schema.Types.ObjectId[];
  views: number;
  upvotes: number;
  downvotes: number;
  answers: number;
}

const QuestionSchema = new Schema<IQuestion>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    views: { type: Number, default: 0 },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    answers: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Question = (models?.Question as unknown as IQuestion) || model<IQuestion>("Question", QuestionSchema);

export default Question;
