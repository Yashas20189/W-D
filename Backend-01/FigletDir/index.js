const figlet = require("figlet");

figlet("Hello World Yashas!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

  // npm install figlet -> to install figlet 
  // npm install -> to install node_modules