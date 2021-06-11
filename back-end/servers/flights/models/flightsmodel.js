
module.exports = mongoose => {
    var schema = mongoose.Schema(
        
        {
            flight:{type:String},
            source:{type:String},
            destination:{type:String},
            date:{type:String},
            fare:{type:Number}
        },
        { timestamps: true }
      );
  
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
      const Flight = mongoose.model("flights", schema);
      return Flight;
    };
