import Router from "next/router";

const showConnexionPopin = () => {
  Router.push("/?popin=connection");
  return { type: null };
};

export default showConnexionPopin;
