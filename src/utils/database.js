const {DataSource} = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();

const appDataSoure = new DataSource({
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
})

appDataSoure.initialize()
.then(() => {
    console.log("Data Source has been initialize");
}).catch((err) => {
    console.err("Error occurred during Data Source initialization", err)
})

module.exports = appDataSoure

