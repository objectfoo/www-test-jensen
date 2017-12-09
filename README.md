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

node .
```

## customize host and port

Set env vars `TEST_HOST` and `TEST_PORT` to override the defaults.

| env key       | default   |
| ------------- |---------- |
| TEST_HOST     | 127.0.0.1 |
| TEST_PORT     | 8282      |

To launch the server on osx on port 4000.

```bash
# osx

TEST_PORT=4000 node .
```
