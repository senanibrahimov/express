let express = require("express");
let app = express();

const uuid = require("uuid");

const staf = [
  { id: uuid(), name: "test", age: 21 },
  { id: uuid(), name: "test", age: 21 },
  { id: uuid(), name: "test", age: 33 },
];

app.listen(3000, () => {
  console.log("listening on 3000");
});
app.get("/", async (_, res) => {
  res.json(staf);
});
