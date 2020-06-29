import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import next from "next";
import path from "path";

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT, 10) || 9001;

const app = next({ dev });
const handle = app.getRequestHandler();

async function start() {
  await app.prepare();

  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cookieParser());
  server.use("/", express.static(path.join(__dirname, "public")));
  // Ouverture de la popin de confirmation de connexion
  // depuis l'URL /connection/:token
  // recue via le mail contenant le magic-link
  server.get("/connection/:token", (req, res) => {
    const { token } = req.params;
    const popin = "confirmation-connexion";
    const query = { popin, token };
    return app.render(req, res, "/", query);
  });
  server.get("*", handle);
  /* ------------------------------------ */
  server.listen(port);

  return server;
}

start();
