const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventApplicationSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: {
            validator: (v) => /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/.test(v),
            message: props => `${props.value} is not a valid email`
        },
    },
    date: {
        type: Date,
        required: [true, 'Event date is required']
    }
}, {
    collection: 'applications'
});

module.exports = mongoose.model('EventApplication', eventApplicationSchema);
