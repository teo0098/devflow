import { model, models, Schema } from "mongoose";

export interface ITagQuestion {
  tag: Schema.Types.ObjectId;
  question: Schema.Types.ObjectId;
}

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

const TagQuestion =
  (models?.TagQuestion as unknown as ITagQuestion) || model<ITagQuestion>("TagQuestion", TagQuestionSchema);

export default TagQuestion;
