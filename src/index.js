const express = require('express');
const mongoose = require('mongoose');
const db = require('./database/config');


class App {
    constructor() {
        this.express = express();

        this.database();
        this.middlewares();
        this.routes();

        const PORT = process.env.NODE_ENV || 2000
        this.express.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    }

    database() {
        mongoose.connect(db.uri, {useNewUrlParser: true, useUnifiedTopology: true})
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes () {
        this.express.use(require('./routes'));
    }
}

module.exports = new App().express;
