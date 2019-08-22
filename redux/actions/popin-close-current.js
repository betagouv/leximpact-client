import Router from "next/router";

const closeCurrentPopin = () => {
  Router.push("/");
  return { type: null };
};

export default closeCurrentPopin;
