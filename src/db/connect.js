import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connect_BD = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB conncected host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Coneection error: ", error);
    process.exit(1);
  }
};

export default connect_BD;
