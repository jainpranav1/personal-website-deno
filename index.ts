import express from "npm:express@4.18.2";
import { Express, Request, Response } from "npm:@types/express@4.17.15";

const app: Express = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (_req: Request, res: Response) => {
  res.render("home");
});

app.get("/about_me", (_req: Request, res: Response) => {
  res.render("about_me");
});

app.get("/academics", (_req: Request, res: Response) => {
  res.render("academics");
});

app.get("/work_experience", (_req: Request, res: Response) => {
  res.render("work_experience");
});

app.get("/leadership", (_req: Request, res: Response) => {
  res.render("leadership");
});

app.get("/projects", (_req: Request, res: Response) => {
  res.render("projects");
});

app.get("/volunteering", (_req: Request, res: Response) => {
  res.render("volunteering");
});

app.get("/git_visualizer", (_req: Request, res: Response) => {
  res.render("git_visualizer");
});

app.get("/blockify", (_req: Request, res: Response) => {
  res.render("blockify");
});

app.get("/cover_up", (_req: Request, res: Response) => {
  res.render("cover_up");
});

app.listen(8000);
