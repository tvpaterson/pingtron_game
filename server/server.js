const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_routers.js")
const cors = require("cors");

app.use(express.json());
app.use(cors());

MongoClient.connect("mongodb://0.0.0.0:27017", { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("playerList");
    const playerCollection = db.collection("players");
    const playerRouter = createRouter(playerCollection);
    app.use("/api/players", playerRouter);
  })
  .catch(console.error);

app.listen(5000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
