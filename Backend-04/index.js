const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
uuidv4();

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id: uuidv4(),
        username:"Yashas",
        content:"I am yashas",
    },
    {
        id:"2a",
        username:"Hitesh",
        content:"I am hitesh",
    },
    {
        id:"3a",
        username:"Chandan",
        content:"I am chandan",
    }
]
// down we are using rest api - /posts
app.get("/posts",(req,res) => {
    res.render('index.ejs', { posts: posts });
});

app.get("/posts/new",(req,res) =>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=> {
    let{username,content} = req.body;
    let id = uuidv4();
    console.log(id);
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    // down very imp to add {post}
    res.render("show.ejs", {post} );
});


app.listen(port,() =>{
    console.log("Listening to port : 8080");
});





// watch that last 3 videos from this section