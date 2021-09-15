//This file is producing mock api from our JSON file

const express = require("express");
var cors = require("cors"); // Prevents CORS error

const port = 9000;
const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "email@email.test" && password === "p422w0rd")
    res.send({
      success: true,
      token: "123123123123",
      user: { username: "email@email.test" },
      profiles: [
        { id: 1, name: "Herr Max Mustermann" },
        { id: 2, name: "Frau Mina Musterfrau" },
      ],
    });
  else
    res
      .status(401)
      .send({ success: false, msg: "The username or password is incorrect" });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
