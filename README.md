## Breaking changes in TypeScript projects due to indirect dependencies of react-intl relying on es-abstract due to expanded tsc --lib requirements

There are two folders with identical `package.json` and `tsconfig.json`. One builds successfully and the other does not.

The only difference is in the dependency versions in `yarn.lock`. Refer to [`yarn_lock.diff`](yarn_lock.diff) to compare the versions between `breaking` and `working`. To go from the former to the latter, I had to manually downgrade all `@formatjs` packages with a reference to `@types/es-abstract`.

### `breaking/`
1. cd `breaking`
2. `yarn`
3. `yarn build`
4. Observe build errors, for example in `node_modules/@types/es-abstract/GetIntrinsic.d.ts`

### `working/`
1. cd `working`
2. `yarn`
3. `yarn build`
4. Build successful
