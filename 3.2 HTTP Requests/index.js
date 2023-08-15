import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1> Hii From Rishu from Dehradun</h1>");
});

app.get("/about", (req,res) => {
    res.send("<h1> About Me </h1> <p> My name is Rishu </p>");
});

app.get("/contact", (req,res) => {
    res.send("<h1> Contact Me </h1> <p> My Phone number is : 7488384144</p>t")
})

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});