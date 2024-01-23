const express = require('express');
const gtts = require('node-gtts');
const path = require('path');

const app = express();
const port = 3000;

const route = require("./router")

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.use(route);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

