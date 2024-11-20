import mongoose, { Schema } from "mongoose";

// Ensure that MONGODB_URI is defined to avoid connection errors.
if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is missing.");
}

// Connect to MongoDB.
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

// Define the schema.
const projectSchema = new Schema({
  developer: { type: String, required: true },
  project: { type: String, required: true },
  delivery: { type: String },
  paymentPlan: { type: String },
  projectProperties: { type: String },
  startingPrice: { type: Number },
  photosUrl: { type: String },
  description: { type: String },
});

// Export the model, ensuring it is not recompiled on server reloads.
const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
