import { Document, model, models, Schema } from "mongoose";

interface IVote {
  author: Schema.Types.ObjectId;
  actionId: Schema.Types.ObjectId;
  actionType: "question" | "answer";
  voteType: "upvote" | "downvote";
}

export interface IVoteDoc extends IVote, Document {}

const VoteSchema = new Schema<IVote>(
  {
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    actionId: { type: Schema.Types.ObjectId, required: true },
    actionType: {
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
