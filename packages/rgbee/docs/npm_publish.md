# Publishing RGBee to the NPM registry

1. Change the version of the package. This should follow the semantic versioning spec found at [https://semver.org/](https://semver.org/).
```s
npm version <update_type>
```
>**Note** `update_type` can be patch, minor, or major.

2. Publish the package.
```s
npm publish
```

## Reference

[NPM Docs](https://docs.npmjs.com/updating-your-published-package-version-number)
