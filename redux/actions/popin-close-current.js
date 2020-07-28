import Router from "next/router";

const closeCurrentPopin = () => {
  Router.push("/ir");
  return { type: "closeCurrentPopin" };
};

export default closeCurrentPopin;
