const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);


const swaggerUi = require('swagger-ui-express');


// ...



app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const db = require("./models");


app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  require("./routes/flights.route")(app);
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to flight application." });
});
require("./routes/flights.route")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});