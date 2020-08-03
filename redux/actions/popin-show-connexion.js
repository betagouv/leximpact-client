import Router from "next/router";

const showConnexionPopin = () => {
  Router.push("/ir?popin=connection");
  return { type: "showConnexionPopin" };
};

export default showConnexionPopin;
