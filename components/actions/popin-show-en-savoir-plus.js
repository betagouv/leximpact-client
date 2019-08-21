import Router from "next/router";

const showEnSavoirPlusPopin = () => {
  Router.push("/?popin=en-savoir-plus");
  return { type: null };
};

export default showEnSavoirPlusPopin;
