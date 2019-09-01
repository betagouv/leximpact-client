import Router from "next/router";

const showLogoutPopin = () => {
  Router.push("/?popin=logout");
  return { type: "showLogoutPopin" };
};

export default showLogoutPopin;
