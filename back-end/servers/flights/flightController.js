const db = require("./models");
const Flight = db.flights;

// Create and Save a new flight
exports.create = (req, res) => {
    // Validate request
    if (!req.body.flight) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a flight
    const flight = new Flight({
      flight:req.body.flight,
      source:req.body.source,
      destination:req.body.destination,
      date:req.body.date,
      fare:req.body.fare
    });
  
    // Save flight in the database
    flight
      .save(flight)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the flight."
        });
      });
  };

// Retrieve all flights from the database.
exports.findAll = (req, res) => {
    const flight = req.query.flight;
    var condition = flight ? { flight: { $regex: new RegExp(flight), $options: "i" } } : {};
  
    Flight.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving flights."
        });
      });
  };

// Find a single flight with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Flight.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Flight with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Flight with id=" + id });
      });
  };

// Update a flight by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Flight.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Flight with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "Flight was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Flight with id=" + id
        });
      });
  };

// Delete a flight with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Flight.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete flight with id=${id}. Maybe flight was not found!`
          });
        } else {
          res.send({
            message: "flight was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:err.message|| "Could not delete flight with id=" + id
        });
      });
  };

// Delete all flights from the database.
exports.deleteAll = (req, res) => {
    Flight.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} flights were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all flights."
        });
      });
  };

// Find all published flights
exports.findAllflight = (req, res) => {
    Flight.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving flights."
        });
      });
  };

  exports.findMany=async(req,res)=>{
     // res.send(data);
     try{
      await Flight.find({source:req.body.source,destination:req.body.destination},(err,val)=>{
           if(err){
               console.log(err)
           }else{
               if(val){
                   res.status(200).json(val)
               }else{
                   res.status(400).json(err)
               }
           }
       });
   }catch(err){
       res.status(500).json(err)
   }
  };
  exports.findMany=async function(req,res){
    const name=req.params.name;
    try{
      await Flight.find({flight:name},(err,val)=>{
            if(err){
                res.status(400).json(err)
            }else{
                if(val){
                    res.status(200).json(val)
                }else{
                    res.status(400).json(err)
                }
            }
        });
    }catch(err){
        res.status(500).json(err)
    }
};
  