const express = require("express");
const dbconnect = require("./db/db");
const dotenv = require("dotenv");
const userRoute = require("./routers/users/userRoute");
const incomeRoute = require("./routers/income/incomeRoute");
const expensesRoute = require("./routers/expenses/expenseRoute");
const { errorHandler , notFound } = require("./middleware/errorMiddleware");

const app = express();

// env
dotenv.config();

// middleware and pass the data to express
 app.use(express.json());
  
// db connection
  dbconnect();

// users routes
  app.use('/api/users', userRoute);

// income routes
  app.use("/api/income",incomeRoute );

// expenses routes
  app.use("/api/expenses",expensesRoute );
    
// Error handler
  app.use(notFound);
  app.use(errorHandler);
  

module.exports = app;
