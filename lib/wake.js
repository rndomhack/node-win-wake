"use strict";

const path = require("path");
const EventEmitter = require("events");
const child_process = require("child_process");

class Resume extends EventEmitter {
    constructor() {
        super();

        this.cp = null;
    }

    start() {
        if (this.cp) return false;
        
        this.cp = child_process.spawn(path.join(__dirname, "../bin/wake"));

        this.cp.on("exit", () => {
            this.cp = null;
            this.emit("end");
        });

        this.cp.on("error", err => {
            this.cp = null;
            this.emit("error", err);
        });

        return true;
    }

    stop() {
        if (!this.cp) return false;

        this.cp.stdin.write("\n");

        return true;
    }
}

module.exports = Resume;
