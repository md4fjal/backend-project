import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // cloudnay
      required: true,
    },
    thumbnail: {
      type: String, // cloudnay
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: Number,
      required: true,
    },
    duration: {
      type: String, // cloudnay
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
