require("dotenv").config();
var app = require('./src/app');
var db = require("./src/models/index.js");

const PORT = process.env.NODE_DOCKER_PORT || 3000;

app.listen(PORT, async () => {
    console.log(`server running on port ${PORT}`);

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});