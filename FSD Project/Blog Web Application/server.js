
import express from "express"
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let isLogin = true;

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"))
 

app.get("/", (req, res) => {
    res.render("index.ejs"); 
});


app.get("/register", (req, res) => {
    res.render("pages/register.ejs"); 
});

app.get("/login", (req, res) => {
    res.render("pages/login.ejs"); 
});

app.get("/create_post", (req, res) => {
    res.render("pages/post-form.ejs"); 
});

app.get("/dashboard", (req, res) => {
    res.render("pages/dashboard.ejs"); 
});


app.post("/register", (req, res) => {
    res.render("pages/login.ejs"); 
});

app.post("/login", (req, res) => {
    if(isLogin === true){
        res.render("pages/dashboard.ejs");
    }
     
});

app.post("/submit_post", (req, res) => {
    res.render("pages/dashboard.ejs"); 
});

app.listen(port, ()=>{
    console.log(`Serever running on port ${port}`)
})


app.use((req, res) => {
    res.status(404);
});