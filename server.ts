const express = require('express')
const app = express()
const port = 3000
const mongo = require('mongodb');

app.use(express.json());

const routeHandler = require("./router.ts");

app.use("/", routeHandler); 

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

app.listen(port, () => {
    console.log(`Listening on ${port}`)
});

module.exports = app;