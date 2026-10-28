# ECHO Sentinel V0.6

BNB Chain early-stage intelligence website with a standalone research terminal.

## Features
- Responsive bilingual landing page, user journey and roadmap
- Research terminal with real GANG token reference, linked documentation and DexScreener market data
- Read-only BSC eth_getCode contract lookup
- Offline hypothetical BNB fee calculator (proposed 1% fee is not live)

## Deployment
Static site at `site/index.html`. Netlify publishes `site` using root `netlify.toml`. No build dependencies.

## Limitations
No automated 30-minute chain indexing, AI security audit, NFT/inscription feed, Binance Agentic Wallet native pairing, transaction simulation, live trades, minting or fee collection. Bytecode presence does not prove safety. Market API requests may fail due to network restrictions.
