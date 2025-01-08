// index.js (Backend)
const express = require('express');
const web3 = require('@solana/web3.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/getWalletData', async (req, res) => {
    const address = req.body.address;

    try {
        // Validate the address by trying to construct a PublicKey
        const publicKey = new web3.PublicKey(address); 

        const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'));
        const balance = await connection.getBalance(publicKey);
        // ... Fetch token balances and transaction history ...

        res.json({ balance /*, tokens, transactions */ }); 
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(400).json({ error: 'Invalid Solana address' }); // Specific error message
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});