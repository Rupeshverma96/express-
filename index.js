import express from "express";
const app = express();
const port = 3001;

app.get("/signup", (req, res) => {
  res.send("Sign up page");
});

app.get("/login", (req, res) => {
  res.send("Login page");
});

app.get("/forget", (req, res) => {
  res.send("Forget password page");
});

app.get("/logout", (req, res) => {
  res.send("Logout password page");
});
app.get("/data", (req, res) => {
  const data = [
    {
      name: "rajesh",
      age: 20,
      city: "pune",
    },
    {
      name: "manish",
      age: 20,
      city: "pune",
    },
    {
      name: "manish",
      age: 20,
      city: "patna",
    },
    {
      name: "shyam",
      age: 25,
      city: "pune",
    },
    {
      name: "rupesh",
      age: 30,
      city: "delhi",
    },
  ];

  res.json(data);
});
app.get("/home", (req, res) => {
  res.send("Home page");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${3001}`);
});
