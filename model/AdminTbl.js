
const moogoose = require('mongoose')

const AdminSchema = moogoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    genres: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true,

    },
    image: {
        type: String,
        required: true
    }
})
const MovieData = moogoose.model('MovieData', AdminSchema)

module.exports = MovieData