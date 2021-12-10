const mongoose = require("mongoose");

const documentsSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
    },
    fileType: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('Documents', documentsSchema);