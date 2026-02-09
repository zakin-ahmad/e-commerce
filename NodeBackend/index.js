/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 5000;
const connectDB = require('../NodeBackend/Config/Database');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'Public/images')));

const startServer = async () => {
  try {
    await connectDB(); // CONNECT FIRST

    // REQUIRE ROUTES AFTER DB CONNECTION
    const productRoutes = require('./Routes/product.routes');
    app.use('/', productRoutes);

    app.listen(port, () =>
      console.log(`Server started on port ${port}`)
    );
  } catch (err) {
    console.error('Server failed to start:', err);
    process.exit(1);
  }
};

startServer();
