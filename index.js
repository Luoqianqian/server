const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('./config/db')
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const postsRoutes = require('./routes/postsRoutes');
const adminUserRoutes = require('./routes/adminUserRoutes'); 
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api/user', userRoutes);
app.use('/api/admin-users', adminUserRoutes);
app.use('/api/products', productRoutes);
app.use('/api/order', orderRoutes )
app.use('/api/posts', postsRoutes )

  // Start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });