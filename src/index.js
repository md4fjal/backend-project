import dotenv from "dotenv";
import connect_BD from "./db/connect.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connect_BD()
  .then(() => {
    app.listen(process.env.PORT || 3300, () => {
      console.log(`Server is running on : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("database connection failed", error);
  });
