const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {

    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(db => console.log('DB se conecto'))
    .catch(err => console.error(err));

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('conectado!!');
})

