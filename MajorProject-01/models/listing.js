const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const listingSchema = new Schema({
    titlet:{
        type:String,
        required:true
    },
    description:String,
    image:{
        type:String,
        set:(v) =>
            v===""
        ?"https://unsplash.com/photos/nusfjord-authentic-fishing-village-in-winter-with-red-rorbu-houses-lofoten-islands-norway-_nQXMH63gcg"
        :v,
},
    price:Number,
    location:String,
    Country:String
});

const Listing = mongoose.model("Listing", listingSchema);

module.export = Listing;