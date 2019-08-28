import Router from "next/router";

const closeCurrentPopin = () => {
  Router.push("/");
  return { type: "closeCurrentPopin" };
};

export default closeCurrentPopin;
