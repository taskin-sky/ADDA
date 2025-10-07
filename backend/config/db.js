import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('DB connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDB;
