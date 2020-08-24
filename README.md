## Breaking changes in TypeScript projects due to indirect dependencies of react-intl relying on es-abstract due to expanded tsc --lib requirements
There are two folders with identical `package.json` and `tsconfig.json`. The only difference is in the dependency versions in `yarn.lock`. One builds successfully and the other does not.

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
