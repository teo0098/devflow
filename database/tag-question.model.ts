import { Document, model, models, Schema } from "mongoose";

interface ITagQuestion {
  tag: Schema.Types.ObjectId;
  question: Schema.Types.ObjectId;
}

export interface ITagQuestionDoc extends ITagQuestion, Document {}

const TagQuestionSchema = new Schema<ITagQuestion>(
  {
    tag: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Tag",
    },
    question: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Question",
    },
  },
  {
    timestamps: true,
  }
);

const TagQuestion = models?.TagQuestion || model<ITagQuestion>("TagQuestion", TagQuestionSchema);

export default TagQuestion;
