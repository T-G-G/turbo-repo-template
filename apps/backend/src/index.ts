import express from "express";
import cors from "cors";

import { helloSchema } from "@repo/types/routes/hello";

const app = express();

app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  const tenant = helloSchema.parse({ message: "Hello World" });
  res.send(tenant);
});

app.listen(3002, () => {
  console.log("Server is running on port 3000");
});
