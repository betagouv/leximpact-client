import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import { Fragment, PureComponent } from "react";

import { PrimaryExpandablePanel, SecondaryExpandablePanel } from "../../common";
import { DsrEligibilite } from "./dsr-eligibilite";
import { DsrFractionBourgCentre } from "./dsr-fraction-bourg-centre";
import { DsrFractionCible } from "./dsr-fraction-cible";
import { DsrFractionPerequation } from "./dsr-fraction-perequation";
import { DsuEligibilite } from "./dsu-eligibilite";
import { DsuIndice } from "./dsu-indice";
import { DsuRepartition } from "./dsu-repartition";
// import { MontantDgf } from "./montant-dgf";
// import { MontantDgfCommunes } from "./montant-dgf-communes";
import { MontantDsrDsu } from "./montant-dsr-dsu";

export class Articles extends PureComponent {
  render() {
    const url = new URLSearchParams(window.location.search);
    const isDsuVisible = url.has("dsu");
    return (
      <Fragment>
        {/* Article header */}
        <div style={{ marginRight: "1em" }}>
          <PrimaryExpandablePanel
            expanded
            icon={<LocalFloristIcon />}
            title="Dotation de solidarité rurale (DSR)">
            <SecondaryExpandablePanel
              expanded
              subTitle="Article L2334-20 du CGCT"
              title="Périmètre général d&apos;éligibilité">
              <DsrEligibilite />
            </SecondaryExpandablePanel>
            <SecondaryExpandablePanel
              subTitle="Article L2334-21"
              title="Fraction &quot;bourg-centre&quot;">
              <DsrFractionBourgCentre />
            </SecondaryExpandablePanel>
            <SecondaryExpandablePanel
              subTitle="Article L2334-22"
              title="Fraction &quot;péréquation&quot;">
              <DsrFractionPerequation />
            </SecondaryExpandablePanel>
            <SecondaryExpandablePanel
              subTitle="Article L2334-22-1"
              title="Fraction &quot;cible&quot;">
              <DsrFractionCible />
            </SecondaryExpandablePanel>
          </PrimaryExpandablePanel>
          {isDsuVisible && (
            <PrimaryExpandablePanel
              icon={<LocationCityIcon />}
              title="Dotation de solidarité urbaine (DSU)">
              <SecondaryExpandablePanel
                subTitle="Article L2334-16 du CGCT"
                title="Périmètre général d&apos;éligibilité">
                <DsuEligibilite />
              </SecondaryExpandablePanel>
              <SecondaryExpandablePanel
                subTitle="Articles L2334-18-2 et L2334-18-4 du CGCT"
                title="Répartition">
                <DsuRepartition />
              </SecondaryExpandablePanel>
              <SecondaryExpandablePanel
                subTitle="Article L2334-17 du CGCT"
                title="Définition de l’indice synthétique">
                <DsuIndice />
              </SecondaryExpandablePanel>
            </PrimaryExpandablePanel>
          )}
          {/* <PrimaryExpandablePanel
            title="Montant des dotations">
            <SecondaryExpandablePanel
              expanded
              subTitle="Article L1613-1 du CGCT"
              title="Montant de la dotation globale de fonctionnement (DGF)">
              <MontantDgf />
            </SecondaryExpandablePanel>
            <SecondaryExpandablePanel
              subTitle="Article L2334-1"
              title="Montant de la DGF communes">
              <MontantDgfCommunes />
            </SecondaryExpandablePanel>
            <SecondaryExpandablePanel
              subTitle="Article L2334-13 du CGCT"
              title="Montants de la DSR et de la DSU">
              <MontantDsrDsu />
            </SecondaryExpandablePanel>
          </PrimaryExpandablePanel> */}
        </div>
      </Fragment>
    );
  }
}
