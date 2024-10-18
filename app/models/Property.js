import mongoose, { Schema } from "mongoose";

// Ensure that MONGODB_URI is defined to avoid connection errors.
if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is missing.");
}

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

// Define the schema.
const propertySchema = new Schema({
  type: String,
  status: String,
  bedrooms: String,
  price: Number,
  property: String,
  photoUrl: String,
  address: String,
});

// Export the model, ensuring it is not recompiled on server reloads.
const Property =
  mongoose.models.Property || mongoose.model("Property", propertySchema);

export default Property;
