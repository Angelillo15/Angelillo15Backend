const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.listen(3000, () => {
    console.debug(`Server started in ${port}`);
})