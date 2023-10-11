const express = require('express');
const cors = require('cors');

const app = express();
const port = 3010;

// Middleware
app.use(cors());
app.use(express.json());


// Sample data
const items = [
    { id: 1, price: 20, name: 'Item 1', image: 'https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-14/carousel/blue/blue-1.png' },
    { id: 2, price: 25, name: 'Item 2', image: 'https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-14/carousel/blue/blue-1.png' },
    { id: 3, price: 30, name: 'Item 3', image: 'https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-14/carousel/blue/blue-1.png' },
    { id: 4, price: 35, name: 'Item 4', image: 'https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-14/carousel/blue/blue-1.png' },
    // Add more items as needed
];

// Route to retrieve all items
app.get('/category', (req, res) => {
    res.json(items);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});