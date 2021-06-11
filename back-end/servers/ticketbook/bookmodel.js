const mongoose=require('mongoose');
mongoose.model("booking",{
    
            flight:{
                type:String
            },
            name:{
                type:String
            },
            email:{
                type:String
            }
            
    
})


/*import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Booking = new Schema({
    flight: {
        type: String
    },
    name: {
        type: String 
    },
    email: {
        type: String
    },

});

export default mongoose.model('Booking', Booking);*/