const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const docSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Please enter a name"
    },
    slug: String,
    description: {
        type: String,
        trim: true,
        required: "Please add a description"
    },
    created: {
        type: Date,
        default: Date.now
    }
});

docSchema.pre('save', function(next) {
    if(!this.isModified('name')) {
        return next();
    }
    this.slug = slug(this.name);
    next();
    // TODO make more resilient so slugs are unique
});

module.exports = mongoose.model('Doc', docSchema);