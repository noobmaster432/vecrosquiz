const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const cors = require('cors');
const routes = require('./src/routes');
const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
