// Libraries
const dotenv = require("dotenv");

// Utils
const { db } = require("./utils/database");

// Express app
const { app } = require("./app");

dotenv.config({ path: "./config.env" });

// Connect with db
db.sync()
  .then(() => {
    console.log("Database connected");
    startServer();
  })
  .catch((err) => console.log(err));

// Run server (API)
const startServer = () => {
  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`To Do API running on port ${PORT}!`);
  });
};
