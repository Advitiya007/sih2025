import mongoose from "mongoose";

const service = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    country: { type: String, required: true },
    jobsdone: { type: Number, default: 0 },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const serviesmodel = mongoose.model("Servies", service);
