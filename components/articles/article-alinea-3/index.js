import { connect } from "react-redux";

import ArticleAlinea3 from "./article-alinea-3-component";

const mapStateToProps = ({ token }) => ({
  isUserLogged: Boolean(token),
});

export default connect(
  mapStateToProps,
)(ArticleAlinea3);
