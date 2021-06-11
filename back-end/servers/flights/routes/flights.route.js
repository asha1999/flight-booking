
module.exports = app => {
    const flights = require("../flightController");
  
    var router = require("express").Router();
  
    // Create a new flight
    router.post("/", flights.create);
  
    // Retrieve all flights
    router.get("/", flights.findAll);
  
    // Retrieve all added flights
    router.get("/flight", flights.findAllflight);
  
    // Retrieve a single flight with id
    router.get("/:id", flights.findOne);
  
    // Update a flight with id
    router.put("/:id", flights.update);
  
    // Delete a flight with id
    router.delete("/:id", flights.delete);
  
    // Create a new flight
    router.delete("/", flights.deleteAll);

    router.get('/flightname/:name',flights.findMany)

  

    router.get('/flightsd/:source/:destination',flights.findMany);
    /*router.get('flightsd/:src/:dest',async function(req,res){
   
   
      // res.send(data);
      try{
         await Flight.find({source:req.params.src,destination:req.params.dest},(err,val)=>{
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
  });*/
  

    
  
    app.use('/api/flights', router);
    

  };