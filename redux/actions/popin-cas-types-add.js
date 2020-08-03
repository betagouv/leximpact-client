import Router from "next/router";

const showAddCasTypesPopin = () => {
  Router.push("/ir?popin=ajouter-cas-types");
  return { type: "showAddCasTypesPopin" };
};

export default showAddCasTypesPopin;
