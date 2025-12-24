import { Document, model, models, Schema } from "mongoose";

interface ICollection {
  author: Schema.Types.ObjectId;
  question: Schema.Types.ObjectId;
}

export interface ICollectionDoc extends ICollection, Document {}

const CollectionSchema = new Schema<ICollection>(
  {
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
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

const Collection = models?.Collection || model<ICollection>("Collection", CollectionSchema);

export default Collection;
