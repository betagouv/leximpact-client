import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FaceIcon from "@material-ui/icons/Face";
import { flow } from "lodash";
import Head from "next/head";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";
import { connect } from "react-redux";

import { Articles } from "../components/ir";
import { CartesImpact as ImpactCards } from "../components/ir";
import PopinManager from "../components/PopinManager";
import SimulationPage from "../components/simulation-page";
import withRoot from "../lib/withRoot";
import {
  disabledEtat, fetchSimPop, showAddCasTypesPopin, simulateCasTypes,
} from "../redux/actions";

const mapStateToProps = ({ token }) => ({
  isUserLogged: !!token,
});

const mapDispatchToProps = dispatch => ({
  showAddCasTypesPopin: () => dispatch(showAddCasTypesPopin()),
  simulateCasTypes: () => {
    dispatch(simulateCasTypes());
    dispatch(disabledEtat());
  },
  simulatePopulation: () => {
    dispatch(fetchSimPop());
    dispatch(simulateCasTypes());
  },
});

const populationIcon = (
  <Fragment>
    <AccountBalanceIcon tag="macro" />
    <FaceIcon tag="cas type" />
  </Fragment>
);

const casTypesIcon = <FaceIcon tag="cas type" />;


class IndexPage extends PureComponent {
  render() {
    const {
      // eslint-disable-next-line no-shadow
      isUserLogged, showAddCasTypesPopin, simulateCasTypes, simulatePopulation,
    } = this.props;

    const primaryButtons = [
      {
        caption: "ESTIMER ~5''",
        icon: casTypesIcon,
        mobileCaption: "ESTIMER",
        mobileIcon: casTypesIcon,
        onClick: simulateCasTypes,
      },
    ];

    if (isUserLogged) {
      primaryButtons.push({
        caption: "ESTIMER ~60''",
        icon: populationIcon,
        mobileCaption: "ESTIMER",
        mobileIcon: populationIcon,
        onClick: simulatePopulation,
      });
    }

    return (
      <Fragment>
        <Head>
          <title>LexImpact - Impôt sur le revenu</title>
        </Head>
        <SimulationPage
          showLoginButton
          parameters={<Articles />}
          primaryButtons={primaryButtons}
          results={<ImpactCards />}
          secondaryButtons={[
            {
              caption: "Ajouter un cas type",
              mobileCaption: "Cas type",
              mobileIcon: <AddCircleOutlineIcon />,
              onClick: showAddCasTypesPopin,
            },
          ]}
          subTitle1="IMPÔT SUR"
          subTitle2="LE REVENU"
          title="IR"
          topic="impot_revenu"
        />
        <PopinManager />
      </Fragment>
    );
  }
}

IndexPage.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
  showAddCasTypesPopin: PropTypes.func.isRequired,
  simulateCasTypes: PropTypes.func.isRequired,
  simulatePopulation: PropTypes.func.isRequired,
};

export default flow(
  withRouter,
  withRoot,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(IndexPage);
