const {DataSource} = require("typeorm");
const path = require("path");
const envPath = path.join(__dirname, "../utils","env")
const dotenv = require("dotenv");
const { json } = require("body-parser");
dotenv.config({path: envPath});
const appDataSoure = new DataSource({
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
})

module.exports = {
    appDataSoure
}