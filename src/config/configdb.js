import mongoose from 'mongoose';
require('dotenv').config();

let connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/crud_db';

        const isAtlas = mongoUri.includes('mongodb+srv');
        const connType = isAtlas ? 'MongoDB Atlas (Cloud)' : 'MongoDB Local';
        
        await mongoose.connect(mongoUri);
        console.log(`✓ Connection to ${connType} has been established successfully.`);
        console.log(`Database: ${mongoose.connection.name}`);
    } catch (error) {
        console.error('✗ Unable to connect to the database:', error.message);
        // If connection fails and using local, show helpful message
        if (!process.env.MONGO_URI) {
            console.error('\n⚠ Tip: Using local MongoDB. To use MongoDB Atlas:');
            console.error('1. Get connection string from MongoDB Atlas');
            console.error('2. Update MONGO_URI in .env file');
            console.error('3. Restart the application\n');
        }
    }
}

module.exports = connectDB;