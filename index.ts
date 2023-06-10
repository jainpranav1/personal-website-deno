import { Application, Router } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { renderFileToString } from "https://deno.land/x/dejs@0.10.3/mod.ts";

const router: Router = new Router();

router.get("/logo_small.png", async (context) => {
  await context.send({
    root: `${Deno.cwd()}/images`,
    index: "logo_small.png"
  });
});

router.get("/plant_cell.png", async (context) => {
  await context.send({
    root: `${Deno.cwd()}/images`,
    index: "plant_cell.png"
  });
});

router.get("/pranav_pic.jpg", async (context) => {
  await context.send({
    root: `${Deno.cwd()}/images`,
    index: "pranav_pic.jpg"
  });
});

router.get("/", async (context) => {
  const output: string = await renderFileToString("views/home.ejs", {});
  context.response.body = output;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });