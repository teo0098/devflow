import { model, models, Schema } from "mongoose";

export interface IInteraction {
  user: Schema.Types.ObjectId;
  action: string;
  actionId: Schema.Types.ObjectId;
  actionType: "question" | "answer";
}

const InteractionSchema = new Schema<IInteraction>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    action: { type: String, required: true },
    actionId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    actionType: { type: String, required: true, enum: ["question", "answer"] },
  },
  {
    timestamps: true,
  }
);

const Interaction =
  (models?.Interaction as unknown as IInteraction) || model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
