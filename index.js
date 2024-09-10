import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import postsRoutes from './routes/postsRoutes.js';
import adminUserRoutes from './routes/adminRoutes.js'; 
import dotenv from 'dotenv';
dotenv.config();

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