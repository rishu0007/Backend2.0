import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1> Home Page </h1>");
});

app.post("/register", (req, res) => {
    // do something with data
    res.sendStatus(201);
});

app.put("/user/rishu", (req,res) => {
    res.sendStatus(200);
});

app.patch("/user/rishu", (req,res) => {
    res.sendStatus(200);
});

app.delete("/user/rishu", (req,res) => {
    // deleting user data
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});