import express from "npm:express@4.18.2";
import { Application, Request, Response } from "npm:@types/express@4.17.15";
import { renderFileToString } from "https://deno.land/x/dejs@0.10.3/mod.ts";

const app: Application = express();

app.get("/", async (_req: Request, res: Response) => {
  const output: string = await renderFileToString("views/home.ejs", {});
  res.send(output);
});

app.listen(8000);
