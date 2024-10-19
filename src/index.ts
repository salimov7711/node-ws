import express from "express";
import cors from "cors";
import { routes } from "./routes";

import "./socket";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://192.168.0.118:5173",
      
    ],
  }),
);

routes(app);

// app.listen(8001, () => {
//   console.log("listening to port 8001");
// });
