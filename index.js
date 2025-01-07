const express = require('express');
const web3 = require('@solana/web3.js');

const app = express();
const port = process.env.PORT || 3000; // Use the port provided by the hosting platform

app.use(express.json()); // To parse JSON requests

app.post('/getWalletData', async (req, res) => {
    const address = req.body.address;
    const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'));
    const publicKey = new web3.PublicKey(address);

    try {
        const balance = await connection.getBalance(publicKey);
        // ... (fetch token balances and transaction history) ...
        res.json({ balance /*, tokens, transactions */ }); 
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});