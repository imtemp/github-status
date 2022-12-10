const express = require("express");
const request = require("request");
const cors = require("cors");

const app = express();
const PORT = 2020;

app.use(cors());

app.get("/status", (req, res) => {
  request(
    "https://www.githubstatus.com/",
    { json: true },
    (err, response, body) => {
      console.log(body);
      res.send(body.components);
    }
  );
});

app.listen(PORT, () => {
  console.log(`RUNNING ON PORT${PORT}`);
});
