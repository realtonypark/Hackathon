import mongoose from 'mongoose';
const { Schema } = mongoose;

const LandSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }, 
    location: {
        type: String,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    term: {
        type: String
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    house: {
        type: Boolean,
        required: true
    },
    material: {
        type: Boolean,
        required: true
    },
    negotiate: {
        type: Boolean,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    contractTerm: {
        type: String,
        required: true
    }
});

export default mongoose.model('Land', LandSchema);