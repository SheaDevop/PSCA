import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

//setup environment variables
dotenv.config();

//setup express app
const app = express();

//setting middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }))

app.use("/api/v1/dalle", dalleRoutes);

//route
app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" })
})

//setting listening port
app.listen(8080, () => console.log('Server has started on port 8080'))