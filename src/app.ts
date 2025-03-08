import { Request, Response } from "express";
const express = require("express");
const app = express();

// parsers
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Dev");
});

app.get("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("get data");
});
export default app;
