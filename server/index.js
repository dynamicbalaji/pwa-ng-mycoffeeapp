const express    = require("express");
const nedb       = require("nedb");
const cors       = require("cors");
const rest       = require("express-nedb-rest");

// Creating express js website
const app = express();

// Creating data store
const dataStore = new nedb({
    filename: "mycoffeeapp.db",
    autoload: true
});

// Creating Rest API
const restAPI = rest();
// We can have more than one datastore with different names
restAPI.addDatastore('coffees', dataStore);

app.use(cors());
app.use('/', restAPI);

app.listen(3000);