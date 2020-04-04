const express = require("express");
const app = express();
const cors = require("cors")

//middleware
app.use(cors())

//allows access to request.body to get data from clientside
app.use(express.json())

app.listen(5000, () => {
    console.log("server has started on port 5000")
});
