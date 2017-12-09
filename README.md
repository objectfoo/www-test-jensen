# www-test-jensen

Simple http server for cluster testing. There is 1 production dependency `dotenv`.

The development dependencies are manifested in package-lock which was created with node `8.2.1`.

tested (by hand) on node versions

* 0.10.46
* 4.8.1
* 6.10.2
* 8.2.1

```bash
# to run server on default port 3000

node .
```

## customize host and port

This uses `dotenv` to manage defaults, the `.env` file at the root defines `TEST_HOST=127.0.0.1` and `TEST_PORT=3000`. You can set `env` vars to override.

To launch the server on osx on port 4000.

```bash
# osx

TEST_PORT=4000 node .
```
