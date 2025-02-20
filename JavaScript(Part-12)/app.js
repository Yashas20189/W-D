let url = "https://catfact.ninja/fact?max_length=140";

fetch(url)
     .then((res) => {
        console.log(res);
        console.log(res.json())
     })
     .catch((err) =>{
        console.log("Error",err);
     });