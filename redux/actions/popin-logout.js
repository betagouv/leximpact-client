import Router from "next/router";

const showLogoutPopin = () => {
  Router.push("/ir?popin=logout");
  return { type: "showLogoutPopin" };
};

export default showLogoutPopin;
