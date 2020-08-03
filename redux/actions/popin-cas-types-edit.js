import Router from "next/router";

const showEditCasTypesPopin = (index) => {
  Router.push(`/ir?popin=ajouter-cas-types&index=${index}`);
  return { type: "showEditCasTypesPopin" };
};

export default showEditCasTypesPopin;
