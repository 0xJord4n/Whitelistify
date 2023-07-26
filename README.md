# Whitelistify

[![GitHub forks](https://img.shields.io/github/forks/0xJord4n/Whitelistify?style=social)](https://github.com/0xJord4n/Whitelistify/fork)
![GitHub stars](https://img.shields.io/github/stars/0xJord4n/Whitelistify?style=social)

> A Cloudflare worker for whitelist system

A Cloudflare worker that can be used to obtain a Merkle proof from a list of Ethereum addresses and an address.

## How to use ?

1. Fill array in `src/addresses.ts` with addresses
2. (Optional) You can use your own CORS origin by replacing CORS_ORIGIN value in `src/worker.ts`
3. Install dependencies with `npm i`
4. Deploy the worker with `npm run deploy`
5. Test worker endpoint with a GET request at worker-url/?address=0x...

## Contributing

1. Fork it (<https://github.com/0xJord4n/Whitelistify/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Meta

0xJordan – [@0xjord4n\_](https://twitter.com/0xjord4n_) – contact@0xjordan.dev
Distributed under the MIT license. See `LICENSE` for more information.

## Donate

- EVM Chains: 0x1814b7a2a132a816ff5bd8573b1c2bf5995d2fda
- BTC: bc1q6wjvnldvrcaq6aafgacjy70vh32a4rc2f3mdgj
- LTC: MCufZV9LUczQT7Fnctzh58iGPkXrQMjcK7
- XMR: 457Yxyaguty51nD4pDAo2zTGy3a2V22gW4BsTkUUCUUa2Efng8xxKRFNMupiVu8CBGGKAcDCT7rQvhrHP5n8EJSRCjFYwa9
- BCH: qqhpf7cepn23wwu6yxh7nn33u9dslhnkdc7m48y3u8
- Cosmos: cosmos1jy8exr0m6j7twu3d28hd8j3j6m3fzkhgml42ng
- SUI: 0xc0e53341b57c67c3fa1d23a10b4f28c3449e7d6c8930495b5d66236b5944c75f
- Solana: C3VmQpDvQ8zibqQ9AByJidfsmwE1NmKFJ75x3josUFPx
- Aptos: 0x6a9d57a6308beffa370a6efb544b54dc5d157db5252d12c299e872cfee2a8f72
