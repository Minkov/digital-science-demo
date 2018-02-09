const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const lodashId = require("lodash-id");

const adapter = new FileSync("db.json");
const db = lowdb(adapter);
db._.mixin(lodashId);

const data = {
    friends: db.defaults({
        friends: [],
        cities: []
    }).get("friends"),
    cities: db.defaults({
        friends: [],
        cities: []
    }).get("cities"),
};

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "client")));

app.get("/api/friends", (req, res) => {
    setTimeout(function () {
        const friends = data.friends.value();
        res.send(friends);
    }, 2000);
});

app.post("/api/friends", (req, res) => {
    setTimeout(function () {
        const friend = req.body;
        data.friends
            .insert(friend)
            .write();
        return res.send(friend);
    }, 2000);
});

app.listen(3001, () => console.log("Unicorns at :3001"));