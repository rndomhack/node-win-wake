# win-wake
Prevent from entering sleep on windows

## Install
```sh
npm i --save win-wake
```

## Example
This example prevent from entering sleep during 1 minute.

```js
"use strict";

const Wake = require("win-wake");

let wake = new Wake();

wake.on("end", () => console.log("end"));
wake.on("error", err => console.log(`error: ${err}`));

wake.start();

setTimeout(() => wake.stop(), 60 * 1000);
```
