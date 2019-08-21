import Router from "next/router";

const showAddImpactCardPopin = () => {
  Router.push("/?popin=ajouter-carte-impact");
  return { type: null };
};

export default showAddImpactCardPopin;
