To repro:
1. Run `npm i` to install dependencies
2. Run `npm run build` to bundle the code
3. Look at `out/test/two.js`

Expected:
```js
import { one } from './one.js';

function two() {
    one();
    console.log('two');
}

export { two };
```

Actual:
```js
function one() {
    console.log('one');
}

function two() {
    one();
    console.log('two');
}

export { two };
```

Note: Removing `rollup-plugin-typescript2` from the plugins array eliminates the repro.
