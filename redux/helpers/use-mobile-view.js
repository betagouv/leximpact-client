// Documentation Material UI
// pour la gestion du responsive
// https://v3.material-ui.com/layout/breakpoints/#withwidth
//
// -----------------------------------
//
// xs, extra-small: 0px or larger
// sm, small: 600px or larger
// md, medium: 960px or larger
// lg, large: 1280px or larger
// xl, extra-large: 1920px or larger
//
// -----------------------------------
//
// These values can always be customized.
// You will find them in the theme, in the breakpoints.values object.
const useMobileView = (withWidthProps) => {
  const { width } = withWidthProps || {};
  if (!width) return false;
  return width === "xs" || width === "sm" || width === "md";
};

export default useMobileView;
