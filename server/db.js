const Pool = require("pg").Pool

//connects server to database
const pool = new Pool ({
    user: "roseegle",
    password: "Square*19",
    host: "localhost",
    port: 5432,
    database: "perntodo"
})

module.exports = pool