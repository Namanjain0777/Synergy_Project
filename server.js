const express = require('express');
const { SerialPort } = require('serialport');
const cors = require('cors');
const app = express();

app.use(cors());

const port = new SerialPort({
  path: '/dev/ttyUSB0',
  baudRate: 9600
});

let latestData = null;

port.on('data', (data) => {
  latestData = data.toString().trim();
});

app.get('/sensor-data', (req, res) => {
  res.json({ value: latestData });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});