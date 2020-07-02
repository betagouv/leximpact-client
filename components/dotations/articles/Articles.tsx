import { Fragment, PureComponent } from "react";

import { PrimaryExpandablePanel, SecondaryExpandablePanel } from "../../expandable-panels";
import { DsrEligibilite } from "./dsr-eligibilite";
import { DsrFractionBourgCentre } from "./dsr-fraction-bourg-centre";
import { DsrFractionCible } from "./dsr-fraction-cible";
import { DsrFractionPerequation } from "./dsr-fraction-perequation";
import { MontantDgf } from "./montant-dgf";
import { MontantDgfCommunes } from "./montant-dgf-communes";

export class Articles extends PureComponent {
  render() {
    return (
      <Fragment>
        {/* Article header */}
        <div style={{ marginRight: "1em" }}>
          <PrimaryExpandablePanel
            expanded
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
          </PrimaryExpandablePanel>
          <PrimaryExpandablePanel
            title="Dotation de solidarité rurale">
            <SecondaryExpandablePanel
              subTitle="Article L2334-20 du CGCT"
              title="Périmètre général d'éligibilité">
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
        </div>
      </Fragment>
    );
  }
}
