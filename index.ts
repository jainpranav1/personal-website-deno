import { Application, Router } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { renderFileToString } from "https://deno.land/x/dejs@0.10.3/mod.ts";

const router: Router = new Router();

router.get("/logo_small.png", async (context) => {
  await context.send({
    root: "images",
    index: "logo_small.png"
  });
});

router.get("/plant_cell.png", async (context) => {
  await context.send({
    root: "images",
    index: "plant_cell.png"
  });
});

router.get("/pranav_pic.jpg", async (context) => {
  await context.send({
    root: "images",
    index: "pranav_pic.jpg"
  });
});

router.get("/", async (context) => {
  const output: string = await renderFileToString("views/home.ejs", {});
  context.response.body = output;
});

router.get("/about_me", async (context) => {
  const output: string = await renderFileToString("views/about_me.ejs", {});
  context.response.body = output;
});

router.get("/academics", async (context) => {
  const output: string = await renderFileToString("views/academics.ejs", {});
  context.response.body = output;
});

router.get("/achievements", async (context) => {
  const output: string = await renderFileToString("views/achievements.ejs", {});
  context.response.body = output;
});

router.get("/blockify", async (context) => {
  const output: string = await renderFileToString("views/blockify.ejs", {});
  context.response.body = output;
});

router.get("/cover_up", async (context) => {
  const output: string = await renderFileToString("views/cover_up.ejs", {});
  context.response.body = output;
});

router.get("/git_visualizer", async (context) => {
  const output: string = await renderFileToString("views/git_visualizer.ejs", {});
  context.response.body = output;
});

router.get("/leadership", async (context) => {
  const output: string = await renderFileToString("views/leadership.ejs", {});
  context.response.body = output;
});

router.get("/projects", async (context) => {
  const output: string = await renderFileToString("views/projects.ejs", {});
  context.response.body = output;
});

router.get("/volunteering", async (context) => {
  const output: string = await renderFileToString("views/volunteering.ejs", {});
  context.response.body = output;
});

router.get("/work_experience", async (context) => {
  const output: string = await renderFileToString("views/work_experience.ejs", {});
  context.response.body = output;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });