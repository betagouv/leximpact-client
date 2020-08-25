import HomeIcon from "@material-ui/icons/Home";
import { flow } from "lodash";
import Head from "next/head";
import { withRouter } from "next/router";
import { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { HelpWindow, SimulationPage } from "../components/common";
import { Articles, Results } from "../components/dotations";
import PopinManager from "../components/PopinManager";
import withRoot from "../lib/withRoot";
import { initFakePlf, simulateDotations } from "../redux/actions";

const mapDispatchToProps = dispatch => ({
  addFakePlf: () => dispatch(initFakePlf()),
  simulate: () => dispatch(simulateDotations()),
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class DotationPage extends PureComponent<PropsFromRedux> {
  componentDidMount() {
    const { addFakePlf } = this.props;
    const url = new URLSearchParams(window.location.search);
    if (url.has("fauxplf")) {
      addFakePlf();
    }
  }

  render() {
    const { simulate } = this.props;
    return (
      <Fragment>
        <Head>
          <title>LexImpact - Dotations aux collectivités territoriales</title>
        </Head>
        <SimulationPage
          parameters={<Articles />}
          primaryButtons={[
            {
              caption: "Estimer",
              icon: <HomeIcon />,
              mobileCaption: "Estimer",
              mobileIcon: <HomeIcon />,
              onClick: simulate,
            },
          ]}
          results={<Results />}
          secondaryButtons={[]}
          showLoginButton={false}
          subTitle1="Dotations"
          subTitle2="Communes"
          title="DSR & DSU"
          topic="dotations"
        />
        <PopinManager />
        <HelpWindow name="potentiel financier" title="Qu’est-ce que le potentiel financier ?">
          <div>
            Le potentiel financier est un indicateur des ressources d&apos;une
            collectivité locale. Celui-ci rend compte des différentes richesses
            perçues par la commune sur son territoire.
            <br />
            <br />
            Le potentiel financier se calcule par rapport à la population dite DGF,
            en prenant en compte :
            <ul>
              <li>les revenus des impôts locaux des ménages ; </li>
              <li>les revenus des impôts locaux des entreprises ; </li>
              <li>la dotation forfaitaire de la commune ;</li>
              <li>les sommes perçues au travers de l&apos;EPCI pour les communes concernées.</li>
            </ul>
            <br />
            L&apos;indicateur peut être donné pour la commune, ou rapporté à son nombre
            d&apos;habitants, comme nous le faisons sur LexImpact. Par exemple, la commune
            de XXXX à un potentiel financier de XXXX €, ce qui représente un potentiel
            financier par habitant de XXX €.
            <br />
            <br />
            Cette explication est volontairement simplifiée. Pour toute référence exacte,
            il faut vous fier uniquement au Code Général des Collectivités Territoriales,
            et/ou aux écrits de la DGCL.
          </div>
        </HelpWindow>
      </Fragment>
    );
  }
}

export default flow(
  withRouter,
  withRoot,
  connector,
)(DotationPage);
