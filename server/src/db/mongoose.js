const mongoose = require('mongoose')

async function main() {
    mongoose.connect(
      "mongodb://127.0.0.1:27017/mern"
    );
    }
    
    main().then(console.log('connection db')).catch(err => console.log(err))