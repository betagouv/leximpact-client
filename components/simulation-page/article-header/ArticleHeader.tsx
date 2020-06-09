import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import RefreshIcon from "@material-ui/icons/Refresh";
import { PureComponent } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "types";
import { ParametersState } from "types/parameters";

import { resetAmendementToBase, resetAmendementToPlf } from "../../../redux/actions";
import styles from "./ArticleHeader.module.scss";

const stylesTheme = () => ({
  menuItemPaper: {
    backgroundColor: "rgba(255, 255, 255, 1) !important",
    paddingBottom: "5px",
    paddingTop: "5px",
  },
  refreshIcon: {
    display: "flex",
    float: "right !important",
    marginLeft: "10px",
  },
  stylePaperTitreMenu: {
    backgroundColor: "rgba(255, 255, 255, 1) !important",
    fontFamily: "Lato",
    padding: "2px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
});

type Props = {
  classes: any;
  topic: keyof ParametersState;
}

const mapStateToProps = ({ parameters }: RootState) => ({ displayPLF: !!parameters.plf });

const mapDispatchToProps = (dispatch, ownProps: Props) => ({
  resetAmendementToBase: () => dispatch(resetAmendementToBase(ownProps.topic)),
  resetAmendementToPlf: () => dispatch(resetAmendementToPlf(ownProps.topic)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

class ArticleHeader extends PureComponent<ConnectedProps<typeof connector> & Props> {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClickPlf = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.resetAmendementToPlf();
    this.setState({ anchorEl: null });
  };

  handleClickBase = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.resetAmendementToBase();
    this.setState({ anchorEl: null });
  };


  render() {
    const { classes, displayPLF } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={styles.resetParams}>
        <Button
          aria-haspopup="true"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          color="secondary"
          size="small"
          onClick={this.handleClick}>
          Réinitialiser les paramètres
          <RefreshIcon className={styles.ml} color="secondary" />
        </Button>
        <Menu
          anchorEl={anchorEl}
          id="simple-menu"
          open={Boolean(anchorEl)}
          onClose={this.handleClose}>
          <div className={classes.stylePaperTitreMenu}>
            <span>
              Réinitialiser mon amendement
              <br />
              {" "}
                    avec les paramètres du&nbsp;:
            </span>
          </div>
          {
            displayPLF
              ? (
                <MenuItem
                  className={classes.menuItemPaper}
                  onClick={this.handleClickPlf}>
                  <span>-</span>
                  <span className={styles.plf}>PLF</span>
                </MenuItem>
              )
              : null
          }

          <MenuItem
            className={classes.menuItemPaper}
            onClick={this.handleClickBase}>
            <span>-</span>
            <span className={styles.initial}>
              code existant
            </span>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(stylesTheme as any, { withTheme: true })(connector(ArticleHeader));
