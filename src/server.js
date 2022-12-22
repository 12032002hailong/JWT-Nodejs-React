import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require('dotenv').config();
import bodyParser from 'body-parser';


const PORT = process.env.PORT || 8080;

const app = express();

// config view engine
configViewEngine(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//init web routes
initWebRoutes(app);


app.listen(PORT, () => {
    console.log("??JWT Backend is running in port :", PORT);
})