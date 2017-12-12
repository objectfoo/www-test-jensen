# www-test-jensen

Simple http server for cluster testing. There are no production dependencies.

The development dependencies are manifested in package-lock which was created with node `8.2.1`.

tested (by hand) on node versions

* 0.10.46
* 4.8.1
* 6.10.2
* 8.2.1

```bash
# to run server on default port 8282
node ./index.js

# Customize the port by passing a command line arg.
node ./index.js --port 8080
```
