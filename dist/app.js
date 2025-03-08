"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
// parsers
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello Dev");
});
app.get("/", (req, res) => {
    console.log(req.body);
    res.send("get data");
});
exports.default = app;
