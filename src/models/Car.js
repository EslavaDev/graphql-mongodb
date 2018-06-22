import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//{_id: 1233jh1g23jy123y12}
const CarSchema = new Schema({
    name: String,
    color: String,
    model: String
})

const Car = mongoose.model('cars', CarSchema);

export default Car;