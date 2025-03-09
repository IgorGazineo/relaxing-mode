//creating a file "hello.txt" on my desktop with the following content "Hello from Node.js!"

const fs = require("fs");

fs.writeFileSync("C:/Users/just code/Desktop/hello.txt", "Hello from Node.js!");
