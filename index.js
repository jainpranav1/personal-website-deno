import express from "npm:express@4.18.2";
import {renderFile} from "https://esm.sh/ejs@3.1.8";

const app = express();

app.get("/", (_req, res) => {
  renderFile("views/home.ejs", function(_err, str){
    res.send(str);
  });
});

app.listen(8000);