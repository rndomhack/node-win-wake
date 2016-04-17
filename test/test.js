"use strict";

const Wake = require("../index");

let wake = new Wake();

wake.on("end", () => console.log("end"));
wake.on("error", err => console.log(`error: ${err}`));

wake.start();

setTimeout(() => wake.stop(), 60 * 1000);
