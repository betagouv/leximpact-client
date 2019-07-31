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

import { externalDynamicExpressJSRoutes } from "./routes";
import { generateServerDynamicRoutes } from "./lib/generateServerDynamicRoutes";

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
  /* ------------------------------------

    !!! NE PAS RE-AGENCER

  ------------------------------------ */
  server.use("/", express.static(path.join(__dirname, "public")));
  generateServerDynamicRoutes(app, server, externalDynamicExpressJSRoutes);
  server.get("*", handle);
  /* ------------------------------------ */
  server.listen(port);

  return server;
}

start();
