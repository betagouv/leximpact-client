/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    max-nested-callbacks: [2, { "max": 4 }],
    react/jsx-closing-bracket-location: [2, {
        "nonEmpty": false,
        "selfClosing": false
    }],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"]
    }],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }]
*/
import path from "path";

import next from "next";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

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
  /* ------------------------------------

    !!! NE PAS RE-AGENCER

  ------------------------------------ */
  server.use("/", express.static(path.join(__dirname, "public")));
  // Ouverture de la popin de confirmation de connexion
  // depuis l'URL /connection/:token
  // recue via le mail contenant le magic-link
  server.get("/connection/:token", (req, res) => {
    const { token } = req.params;
    const popin = "confirmation-connexion";
    const query = { token, popin };
    return app.render(req, res, "/", query);
  });
  server.get("*", handle);
  /* ------------------------------------ */
  server.listen(port);

  return server;
}

start();
