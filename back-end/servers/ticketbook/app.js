const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const axios=require('axios');
const router = express.Router();
const cors = require("cors");


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

app.use(bodyparser.json());
app.use(cors()); 


mongoose.connect("mongodb+srv://asha1:asha123@cluster0.odxl8.mongodb.net/ticketbooking",{useNewUrlParser:true ,useFindAndModify:true,useUnifiedTopology: true });
require('./bookmodel');
const booking=mongoose.model("booking");

/**
 * @swagger
 * /book/add:
 *   post:
 *     summary: Create a booking for user.
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     flight:
 *                       type: string
 *                       description: The flight.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Leanne Graham
 *                        email:
 *                       type: string
 *                       description: The user's email.
 *                       example: Leanne Graham
*/

app.post('/book/add',(req,res)=>{
   var newBooking={
      flight:req.body.flight,
      name:req.body.name,
      email:req.body.email,
      
   }  
   var book=new booking(newBooking)
       book.save().then((result)=>{
        res.status(201).json({book})
       }).catch((err)=>{
           res.status(500).json({error:err})
           
       })
  res.send("success"); 
})
app.get('/bookings',(req,res)=>{
    booking.find().then((book)=>{
         res.json(book);
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })
    
})
router.route('/booking/:id').get((req, res) => {
    Booking.findById(req.params.id, (err, booking) => {
        if (err)
            console.log(err);
        else
            res.json(booking);
    })
});
/*app.get('book/:id',(req,res)=>{
  let flight_id=req.params.id;
  booking.find({flight_id},(error,data)=>{
    if(error){
      return next(error)
    }
    else{
      res.json(data)
    }
  })
})*/
/*router.route('/booking/add').post((req, res) => {
  let booking = new booking(req.body);
  booking.save()
      .then(booking => {
          res.status(200).json({'booking': 'Added successfully'});
      })
      .catch(err => {
          res.status(400).send('Failed to create new record');
      });
});*/

router.route('/booking/delete/:id').get((req, res) => {
  booking.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
      if (err)
          res.json(err);
      else
          res.json('Removed successfully');
  });
});
app.listen(7777,()=>{
    console.log("up and running");
})

/*import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Booking from './bookmodel';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://asha1:asha123@cluster0.odxl8.mongodb.net/ticketbooking',{useNewUrlParser:true ,useFindAndModify:true,useUnifiedTopology: true });

/*
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/bookigs/add').post((req, res) => {
    let booking = new Booking(req.body);
    booking.save()
        .then(booking => {
            res.status(200).json({'booking': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/bookings').get((req, res) => {
    booking.find((err, bookings) => {
        if (err)
            console.log(err);
        else
            res.json(bookings);
    });
});

router.route('/booking/:id').get((req, res) => {
    Booking.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    })
});

/*router.route('/bookings/update/:id').post((req, res) => {
    Booking.findById(req.params.id, (err, booking) => {
        if (!issue)
            return next(new Error('Could not load Document'));
        else {
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;

            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/bookings/delete/:id').get((req, res) => {
    Booking.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`))*/
