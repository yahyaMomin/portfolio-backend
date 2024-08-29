import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
   {
      ip: {
         type: String,
         required: true,
      },
      city: {
         type: String,
         required: true,
      },
      region: {
         type: String,
         required: true,
      },
      country: {
         type: String,
         required: true,
      },
      location: {
         type: String,
         required: true,
      },
      Organization: {
         type: String,
         required: true,
      },
      postal: {
         type: String,
         required: true,
      },
      timezone: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
