const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const reservation = new Schema({

    Source:{
        type:String,
        
    },
    Destination:{
        type:String,
        
    },
    Flight_Name:{
        type:String,
        
    },
    Fare:{
        type:Number,
        required:[false]
    },
    Book:{
        type:Boolean,

    },
    Passenger:{
        type:Number,
        required:[true,'Please specify no of passengers']
    }

});

const Reservation = mongoose.model('reservation',reservation);

module.exports = Reservation;