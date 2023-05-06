import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import userRoutes from './routes/user';
//Init
const app = express();
const port =  3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

//connect mongodb

//config Routes
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
