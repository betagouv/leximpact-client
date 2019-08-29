import Router from "next/router";

const showEditCasTypesPopin = (index) => {
  Router.push(`/?popin=ajouter-cas-types&index=${index}`);
  return { type: "showEditCasTypesPopin" };
};

export default showEditCasTypesPopin;
