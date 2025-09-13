import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { createtoken } from '../service/auth.js';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Optional but recommended
  },
  password: {
    type: String,
    required: true
  },
  services: {
    type: [String],
    default: []
  },
  provides_service: { type: Boolean, default: false } ,
  profileImage: String,
    profession: String,
    location: String,
    rating: Number,
    price: String,
    skills: [String],
}, { timestamps: true });

// Hash password before saving
userSchema.pre("save", async function(next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Static method for checking password and returning token
userSchema.statics.matchpasswordandsendtoken = async function(email, password) {
  try {
    const user = await this.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }

    const token = createtoken(user);
    return token;

  } catch (err) {
    console.error(err.message);
    throw err; // Let controller handle response
  }
};

export const usermodel = mongoose.model("User", userSchema);
