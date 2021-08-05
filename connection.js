const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1:27017/mywebstore';
const db = mongoose.connection;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .catch(err => console.long(err));

mongoose.connection.once('open',_ => {
    console.log('Data is connected to',uri);
})

mongoose.connection.on('error', err => {
    console.log(err)
})
