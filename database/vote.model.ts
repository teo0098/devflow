import { model, models, Schema } from "mongoose";

export interface IVote {
  author: Schema.Types.ObjectId;
  id: Schema.Types.ObjectId;
  type: "question" | "answer";
  voteType: "upvote" | "downvote";
}

const VoteSchema = new Schema<IVote>(
  {
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    id: { type: Schema.Types.ObjectId, required: true },
    type: {
      type: String,
      enum: ["question", "answer"],
      required: true,
    },
    voteType: {
      type: String,
      enum: ["upvote", "downvote"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Vote = (models?.Vote as unknown as IVote) || model<IVote>("Vote", VoteSchema);

export default Vote;
