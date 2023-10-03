const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.until");

const uri = config.app.db.uri;

async function startServer() {
  try {
    await MongoDB.connect(uri);
    console.log("Connected to the database!");

    const port = config.app.port;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}.`);
    });
  } catch (error) {
    console.log("Cannot connect to the database!", error);
    process.exit(1);
  }
}

startServer();