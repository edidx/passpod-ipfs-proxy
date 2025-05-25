
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

const domainMap = require('./domainMap.json');

app.get('/api/ipfs-proxy', async (req, res) => {
    const domain = req.query.domain;
    if (!domain || !domainMap[domain]) {
        return res.status(400).json({ error: "Invalid or unknown domain." });
    }

    const ipfsHash = domainMap[domain];
    const url = `https://ipfs.io/ipfs/${ipfsHash}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("IPFS fetch failed");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

app.listen(PORT, () => {
    console.log(`IPFS Proxy running on port ${PORT}`);
});
