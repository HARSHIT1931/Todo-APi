// require('dotenv').config();
// const app = require('./app');
// const express = require('express');
// const dbConnect = require('./config/database');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// dbConnect();

require('dotenv').config();
const express = require('express');
const app = require('./app');
const dbConnect = require('./config/database');


app.use(express.json());

// ✅ Connect to database
dbConnect();

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
