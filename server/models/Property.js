import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      city: {
        type: String,
        required: true,
        trim: true,
      },
      address: {
        type: String,
        required: true,
        trim: true,
      },
    },
    type: {
      type: String,
      enum: ["sale", "rent"],
      required: true,
    },
    category: {
      type: String,
      enum: ["house", "apartment", "plot", "commercial"],
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      default: 0,
    },
    bathrooms: {
      type: Number,
      default: 0,
    },
    images: [
      {
        type: String,
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["available", "sold", "rented"],
      default: "available",
    },
  },
  {
    timestamps: true,
  }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;