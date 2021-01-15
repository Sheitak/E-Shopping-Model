/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./router/route');
const cors = require('cors');

dotenv.config()
mongoose.connect(process.env.DATABASE_URL, () => console.log('Database Connected'));

app.use(express.json());
app.use(cors());
app.use('/', routesUrls);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});