import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    phoneNumber: { type: String },
    gender: { type: Boolean },
    image: { type: String },
    roleId: { type: String },
    positionId: { type: String }
}, {
    timestamps: true // Tự động tạo createdAt, updatedAt
});

const User = mongoose.model('User', userSchema);
module.exports = User;