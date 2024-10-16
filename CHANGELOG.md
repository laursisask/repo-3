# Changelog

## [1.2.0](https://github.com/laursisask/repo-3/compare/v1.1.2...v1.2.0) (2024-10-16)


### Features

* add otel support for ExtractSampledTraceID ([#46](https://github.com/laursisask/repo-3/issues/46)) ([fe211cd](https://github.com/laursisask/repo-3/commit/fe211cd3587c29d42ce74245fe7a175b863aa494))
* utilities for manipulating blocks ([#152](https://github.com/laursisask/repo-3/issues/152)) ([9e2e794](https://github.com/laursisask/repo-3/commit/9e2e7946c33b256ee474b804b42e58c0da61bf82))


### Bug Fixes

* actually add release-please-config ([#30](https://github.com/laursisask/repo-3/issues/30)) ([9f8f881](https://github.com/laursisask/repo-3/commit/9f8f88136925aed525a31ffd658531277ae8ec57))
* add optional params to remoteread api for client_golang 1.20.x ([#207](https://github.com/laursisask/repo-3/issues/207)) ([03b451c](https://github.com/laursisask/repo-3/commit/03b451cc4a0816fce917bac7dc683bb526f4a2d7))
* add release-please manifest ([#31](https://github.com/laursisask/repo-3/issues/31)) ([d4a563f](https://github.com/laursisask/repo-3/commit/d4a563fef54f577e69bb819dbdba7bfaaa68fa70))
* adjust date ranges for UTC and remove debug cruft ([#84](https://github.com/laursisask/repo-3/issues/84)) ([867f4a8](https://github.com/laursisask/repo-3/commit/867f4a8fe691cb3c6b663c8a264c9a0b2f55d66e))
* fix release process ([#142](https://github.com/laursisask/repo-3/issues/142)) ([d185e18](https://github.com/laursisask/repo-3/commit/d185e1883b5bbe60e5366eb19772f14e51b807b5))
* go version in release-please.yml ([21ac5c4](https://github.com/laursisask/repo-3/commit/21ac5c4c6d0e18bcf31a1ccb48729c29dee7e319))
* handle timeout and unexpected eof error by returning 408 or 499 ([#64](https://github.com/laursisask/repo-3/issues/64)) ([5807bcd](https://github.com/laursisask/repo-3/commit/5807bcd690d5ca291d7d3306c90caeeab85f083d))
* make requestLimitsMiddleware return 400 instead of 500 ([52de8c3](https://github.com/laursisask/repo-3/commit/52de8c3a217484194e51c7da080c7f74ca6a9d80))
* manifest format ([#34](https://github.com/laursisask/repo-3/issues/34)) ([7c78521](https://github.com/laursisask/repo-3/commit/7c78521cb7f6c2212b0586fe93104fc0475eb2eb))
* return 500 in case of reading body failed ([6a1b562](https://github.com/laursisask/repo-3/commit/6a1b562e061465e484dd81345d4b45bb6cb3f6d0))
* skip points outside of archive retention on first pass ([#82](https://github.com/laursisask/repo-3/issues/82)) ([b4b782c](https://github.com/laursisask/repo-3/commit/b4b782c385f0d4ff9db59970c4c95de6b62a7924))
* try to do building inside release-please ([#29](https://github.com/laursisask/repo-3/issues/29)) ([b8a50db](https://github.com/laursisask/repo-3/commit/b8a50db44d27bf57c2f8d9e44bd5c559d63981c2))
* try to fix tag naming in gh release ([#39](https://github.com/laursisask/repo-3/issues/39)) ([5301c71](https://github.com/laursisask/repo-3/commit/5301c713f8bbeddcfbf87d109ecd91d14239d317))
* trying to get release-please to see my packages ([#32](https://github.com/laursisask/repo-3/issues/32)) ([b8c258c](https://github.com/laursisask/repo-3/commit/b8c258c9dd6bc548064a67a6eb5200812242a6de))
* use goreleaser to build archives ([#37](https://github.com/laursisask/repo-3/issues/37)) ([19b6cfe](https://github.com/laursisask/repo-3/commit/19b6cfed323e48bbac31e9aca5a85540c3710ebd))
* use NewWithLogger in request_limits middleware ([#66](https://github.com/laursisask/repo-3/issues/66)) ([5656112](https://github.com/laursisask/repo-3/commit/56561125064cfca5221811f6ce6e94f390b9370c))

## [1.1.2](https://github.com/grafana/mimir-proxies/compare/v1.1.1...v1.1.2) (2024-03-19)


### Bug Fixes

* fix release process ([#142](https://github.com/grafana/mimir-proxies/issues/142)) ([d185e18](https://github.com/grafana/mimir-proxies/commit/d185e1883b5bbe60e5366eb19772f14e51b807b5))

## [1.1.1](https://github.com/grafana/mimir-proxies/compare/mimir-proxies-v1.0.2...mimir-proxies-v1.1.0) (2024-03-14)


### Features

* internal server becomes not ready when stop signal is received ([#79](https://github.com/grafana/mimir-proxies/pull/79))
* build from go 1.21 ([#132](https://github.com/grafana/mimir-proxies/pull/132))

## [1.1.0](https://github.com/grafana/mimir-proxies/compare/mimir-proxies-v1.0.2...mimir-proxies-v1.1.0) (2023-09-28)


### Features

* add otel support for ExtractSampledTraceID ([#46](https://github.com/grafana/mimir-proxies/issues/46)) ([fe211cd](https://github.com/grafana/mimir-proxies/commit/fe211cd3587c29d42ce74245fe7a175b863aa494))


### Bug Fixes

* adjust date ranges for UTC and remove debug cruft ([#84](https://github.com/grafana/mimir-proxies/issues/84)) ([867f4a8](https://github.com/grafana/mimir-proxies/commit/867f4a8fe691cb3c6b663c8a264c9a0b2f55d66e))
* handle timeout and unexpected eof error by returning 408 or 499 ([#64](https://github.com/grafana/mimir-proxies/issues/64)) ([5807bcd](https://github.com/grafana/mimir-proxies/commit/5807bcd690d5ca291d7d3306c90caeeab85f083d))
* make requestLimitsMiddleware return 400 instead of 500 ([52de8c3](https://github.com/grafana/mimir-proxies/commit/52de8c3a217484194e51c7da080c7f74ca6a9d80))
* return 500 in case of reading body failed ([6a1b562](https://github.com/grafana/mimir-proxies/commit/6a1b562e061465e484dd81345d4b45bb6cb3f6d0))
* skip points outside of archive retention on first pass ([#82](https://github.com/grafana/mimir-proxies/issues/82)) ([b4b782c](https://github.com/grafana/mimir-proxies/commit/b4b782c385f0d4ff9db59970c4c95de6b62a7924))
* use NewWithLogger in request_limits middleware ([#66](https://github.com/grafana/mimir-proxies/issues/66)) ([5656112](https://github.com/grafana/mimir-proxies/commit/56561125064cfca5221811f6ce6e94f390b9370c))

## [1.0.2](https://github.com/grafana/mimir-proxies/compare/mimir-proxies-v1.0.0...mimir-proxies-v1.0.2) (2023-06-23)


### Bug Fixes

* actually add release-please-config ([#30](https://github.com/grafana/mimir-proxies/issues/30)) ([9f8f881](https://github.com/grafana/mimir-proxies/commit/9f8f88136925aed525a31ffd658531277ae8ec57))
* add release-please manifest ([#31](https://github.com/grafana/mimir-proxies/issues/31)) ([d4a563f](https://github.com/grafana/mimir-proxies/commit/d4a563fef54f577e69bb819dbdba7bfaaa68fa70))
* go version in release-please.yml ([21ac5c4](https://github.com/grafana/mimir-proxies/commit/21ac5c4c6d0e18bcf31a1ccb48729c29dee7e319))
* manifest format ([#34](https://github.com/grafana/mimir-proxies/issues/34)) ([7c78521](https://github.com/grafana/mimir-proxies/commit/7c78521cb7f6c2212b0586fe93104fc0475eb2eb))
* try to do building inside release-please ([#29](https://github.com/grafana/mimir-proxies/issues/29)) ([b8a50db](https://github.com/grafana/mimir-proxies/commit/b8a50db44d27bf57c2f8d9e44bd5c559d63981c2))
* try to fix tag naming in gh release ([#39](https://github.com/grafana/mimir-proxies/issues/39)) ([5301c71](https://github.com/grafana/mimir-proxies/commit/5301c713f8bbeddcfbf87d109ecd91d14239d317))
* trying to get release-please to see my packages ([#32](https://github.com/grafana/mimir-proxies/issues/32)) ([b8c258c](https://github.com/grafana/mimir-proxies/commit/b8c258c9dd6bc548064a67a6eb5200812242a6de))
* use goreleaser to build archives ([#37](https://github.com/grafana/mimir-proxies/issues/37)) ([19b6cfe](https://github.com/grafana/mimir-proxies/commit/19b6cfed323e48bbac31e9aca5a85540c3710ebd))

## [1.0.0] (2023-06-23)


### Features

* move to github actions for semi-automated releases ([#25](https://github.com/grafana/mimir-proxies/issues/25)) ([dd21479](https://github.com/grafana/mimir-proxies/commit/dd214796623f9b2d0362e58184a478ccbf2516b8))


### Bug Fixes

* correct changelog formatting and version extraction ([#27](https://github.com/grafana/mimir-proxies/issues/27)) ([d659354](https://github.com/grafana/mimir-proxies/commit/d6593548a6bebd8bc47fbccace38876f65c2538c))

## [0.0.3]

Rebuild with Go 1.20.4

## [0.0.2]

Release mimir-whisper-converter, a utility for converting large Graphite Whisper
databases of untagged metrics to mimir blocks.

## [0.0.1]

Initial release
