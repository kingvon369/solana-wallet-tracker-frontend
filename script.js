function trackWallet() {
    const address = document.getElementById('walletAddress').value;
    // Basic address validation (improve this)
    if (!address.startsWith(' ')) { 
        alert('Invalid Solana address');
        return;
    }

    fetchWalletData(address);
}

async function fetchWalletData(address) {
    try {
        const response = await fetch('/getWalletData', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ address: address })
        });
        const data = await response.json();

        document.getElementById('balance').textContent = data.balance;
        // ... (process and display tokens and transactions) ...

    } catch (error) {
        console.error('Error fetching data:', error);
        // ... (display error message to the user) ...
    }
}