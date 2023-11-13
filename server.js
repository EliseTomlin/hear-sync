const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

//API routes

const PORT = process.env.PORT || 8500
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});