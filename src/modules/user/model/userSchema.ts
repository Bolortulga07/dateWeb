import mongoose from "mongoose";
const schema = mongoose.Schema;

export const userSchema = new schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: function (value: string) {
          return /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(value);
        },
        message:
          "Password must contain at least one uppercase letter and one number",
      },
    },

    username: {
      type: String,
      required: true,
      unique: [true, "This name is already taken."],
      trim: true,
    },
  },
  { timestamps: true }
);
