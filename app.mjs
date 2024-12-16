import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(8080, ()=> console.log('Server up and running...'));

/*index.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';
import db from './config/database.js';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/petugas_ronda', UserRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
*/