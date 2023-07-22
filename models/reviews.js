import mongoose from "mongoose";

const reviewsSchema =  new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    reviews_information: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
});

const Reviews = mongoose.model('Reviews', reviewsSchema);

export {Reviews};