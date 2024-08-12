# Prime data

Repository for data related to Centrifuge Prime users.

## Publishing to IPFS

### Dev

Opening a PR will trigger a deployment of the `dev-data.json` file to IPFS. The new hash can be found in the `Upload to IPFS` step in the [Publish action](https://github.com/centrifuge/prime-data/actions/workflows/publish_to_ipfs.yml).

### Prod

Merging PR to main will trigger a release of the `data.json` file to IPFS. The new hash can be found in the latest [Github release](https://github.com/centrifuge/prime-data/releases).
