import express, { Express } from "express";
import dotenv from "dotenv";
import * as bodyParser from 'body-parser';
import * as controllers from './controllers/Controller';
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors())
// Middleware to parse JSON
app.use(bodyParser.json());

// Define routes
app.get('/', (req,res) => res.send("<h1>Welcome to the Dry Cleaning Management System</h1>"));
app.post('/start', controllers.startApp);
app.post('/customers', controllers.addCustomer);
app.get('/services', controllers.getServices);
app.get('/customers', controllers.getCustomers);
app.post('/order', controllers.placeOrder);


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});