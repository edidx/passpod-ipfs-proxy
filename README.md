
# PassPod IPFS Proxy Server

A lightweight Node.js server to fetch and relay metadata from IPFS based on .didx domain names.

## Setup

1. Install dependencies:
   ```
   npm install express node-fetch
   ```

2. Run the server:
   ```
   node ipfs-proxy.js
   ```

## Usage

Send GET requests to:
```
/api/ipfs-proxy?domain=alice.didx
```

## Add New Domains

Edit `domainMap.json` to include new domain-to-IPFS mappings.
