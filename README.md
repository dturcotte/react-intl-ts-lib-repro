## Breaking changes in TypeScript projects due to indirect dependencies of react-intl relying on es-abstract due to expanded tsc --lib requirements

There are two folders with identical `package.json` and `tsconfig.json`. One builds successfully and the other does not.

The only difference is in the dependency versions in `yarn.lock`. Refer to [`yarn_lock.diff`](yarn_lock.diff) to compare the versions between `breaking` and `working`. To go from the former to the latter, I had to manually downgrade all `@formatjs` packages with a reference to `@types/es-abstract`.

### `breaking/`
1. cd `breaking`
2. `yarn`
3. `yarn build`
4. Observe build errors, for example in `node_modules/@types/es-abstract/GetIntrinsic.d.ts`

<details>
<summary>Some errors encountered</summary>
  
```js
node_modules/@types/es-abstract/5/ToObject.d.ts:9:26 - error TS2304: Cannot find name 'BigInt'.

9     : T extends bigint ? BigInt
                           ~~~~~~

node_modules/@types/es-abstract/GetIntrinsic.d.ts:52:38 - error TS2304: Cannot find name 'BigInt64Array'.

52     of(this: new (length: number) => BigInt64Array, ...items: bigint[]): BigInt64Array;
                                                                            ~~~~~~~~~~~~~

...

node_modules/@types/es-abstract/GetIntrinsic.d.ts:431:29 - error TS2304: Cannot find name 'AsyncGeneratorFunction'.

431         '%AsyncGenerator%': AsyncGeneratorFunction;
                                ~~~~~~~~~~~~~~~~~~~~~~

node_modules/@types/es-abstract/GetIntrinsic.d.ts:432:37 - error TS2304: Cannot find name 'AsyncGeneratorFunctionConstructor'.

432         '%AsyncGeneratorFunction%': AsyncGeneratorFunctionConstructor;
                                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

...

node_modules/@types/es-abstract/GetIntrinsic.d.ts:1133:64 - error TS2339: Property 'trimStart' does not exist on type 'String'.

1133         '%StringPrototype.trimStart%': typeof String.prototype.trimStart;
                                                                    ~~~~~~~~~

node_modules/@types/es-abstract/GetIntrinsic.d.ts:1134:63 - error TS2339: Property 'trimLeft' does not exist on type 'String'.

1134         '%StringPrototype.trimLeft%': typeof String.prototype.trimLeft;
                                                                   ~~~~~~~~

node_modules/@types/es-abstract/GetIntrinsic.d.ts:1135:62 - error TS2339: Property 'trimEnd' does not exist on type 'String'.

1135         '%StringPrototype.trimEnd%': typeof String.prototype.trimEnd;
                                                                  ~~~~~~~

node_modules/@types/es-abstract/GetIntrinsic.d.ts:1136:64 - error TS2339: Property 'trimRight' does not exist on type 'String'.

1136         '%StringPrototype.trimRight%': typeof String.prototype.trimRight;
                                                                    ~~~~~~~~~

node_modules/@types/es-abstract/GetIntrinsic.d.ts:1145:94 - error TS2339: Property 'description' does not exist on type 'Symbol'.

1145         '%Symbol.prototype.description%': (this: symbol | Symbol) => typeof Symbol.prototype.description;
                                                                                                  ~~~~~~~~~~~

node_modules/@types/es-abstract/GetIntrinsic.d.ts:1153:44 - error TS2339: Property 'matchAll' does not exist on type 'SymbolConstructor'.

1153         '%Symbol.matchAll%': typeof Symbol.matchAll;
                                                ~~~~~~~~
```

</details>

### `working/`
1. cd `working`
2. `yarn`
3. `yarn build`
4. Build successful
