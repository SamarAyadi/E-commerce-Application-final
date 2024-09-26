import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'], 
    },
    isActive: {
        type: Boolean,
        default: true // Default isActive status is true
    },
    verified: {
        type: Boolean,
        default: false // Default verified status is false
    },
    blocked: {
        type: Boolean,
        default: false // Default blocked status is false
    }
    
}, {
    timestamps: true // This option adds createdAt and updatedAt fields
});

export const user = mongoose.model('user', userSchema);

