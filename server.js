/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  import/order: [2, {
    newlines-between: "always",
    groups: ["builtin", "external", "parent", "sibling", "index"]
  }],
  implicit-arrow-linebreak: [2, "below"]
*/
import path from "path";

import next from "next";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 9001;

async function start() {
  await app.prepare();

  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cookieParser());
  server.use("/", express.static(path.join(__dirname, "public")));
  /* ------------------------------------

    !!! NE PAS RE-AGENCER

    ------------------------------------ */
  // Route recue depuis l'email contenant le magic-link
  server.get("/token/:key", (req, res) =>
    app.render(req, res, "/", { token: req.params.key }));
  // !!! DOIT TOUJOURS ETRE LA DERNIERE DECLARATION DE ROUTES
  server.get("*", handle);
  server.listen(port);

  return server;
}

start();
