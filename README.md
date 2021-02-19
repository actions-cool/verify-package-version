# 🙏 Verify Package Version

![](https://img.shields.io/github/workflow/status/actions-cool/verify-package-version/CI?style=flat-square)
[![](https://img.shields.io/badge/marketplace-verify--package--version-blueviolet?style=flat-square)](https://github.com/marketplace/actions/verify-package-version)
[![](https://img.shields.io/github/v/release/actions-cool/verify-package-version?style=flat-square&color=orange)](https://github.com/actions-cool/verify-package-version/releases)

Verify your package version whether meets some conditions.

Currently only PR triggering is supported, and more scenario requirements can be raised through [issue](https://github.com/actions-cool/verify-package-version/issues).

## Preview

- [#6](https://github.com/actions-cool/verify-package-version/pull/6)

![](./public/2.png)

![](./public/1.png)

## How to use ?

```yml
name: Verify Package Version

on:
  pull_request:
    types: [opened, edited, reopened, synchronize, ready_for_review]

jobs:
  verify:
    runs-on: ubuntu-latest
    # Add conditions to trigger more effectively
    if: contains(github.event.pull_request.title, 'changelog')
    steps:
      - uses: actions/checkout@v2
      - name: verify-version
        uses: actions-cool/verify-package-version@v1.1.1
        with:
          title-include-content: 'docs'
          title-include-version: true
          open-comment: true
```

- `title-include-content`: Verify that the title contains content
- `title-include-version`: Verify that the title whether contains version, default `true`
- `open-comment`：Whether to open comments, default `false`

## Note

- When set `open-comment`, the ref of PR must be in the current repositorie
- When use `1.1.0+` and PR ref is base branch, it will use `fs.readFileSync`. This requires you add `- uses: actions/checkout@v2`

## Changelog

[CHANGELOG](./CHANGELOG.md)

## LICENSE

[MIT](https://github.com/actions-cool/verify-package-version/blob/main/LICENSE)
