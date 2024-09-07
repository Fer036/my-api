const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
origin: 'http://localhost:5173'
}));

app.get('/api/products', (req, res) => {
    res.json({ products: [] });
});

const port = process.env.PORT || 5173;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
