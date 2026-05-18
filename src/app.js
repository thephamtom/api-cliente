require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/clientes'));

app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo en puerto 3000');
});