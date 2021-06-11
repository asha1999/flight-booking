
const express = require("express");
const PORT = process.env.PORT || 5000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();


const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
  },
  description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
    
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Development server',
    },
  ],
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

app.use(cors()); 


require("./db")(app);


//configure body parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//configure body-parser 

app.use(morgan("dev")); 

const userRoutes = require("./userRoute"); //bring in our user routes
app.use("/user", userRoutes);

app.get("/", (req, res) => {
    console.log("ready to expore??");
});

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});
