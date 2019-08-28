import Router from "next/router";

const showAddCasTypesPopin = () => {
  Router.push("/?popin=ajouter-cas-types");
  return { type: "showAddCasTypesPopin" };
};

export default showAddCasTypesPopin;
