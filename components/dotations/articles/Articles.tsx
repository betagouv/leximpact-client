import { Fragment, PureComponent } from "react";

import { PrimaryExpandablePanel, SecondaryExpandablePanel } from "../../expandable-panels";

export class Articles extends PureComponent {
  render() {
    return (
      <Fragment>
        {/* Article header */}
        <div style={{ marginRight: "1em" }}>
          <PrimaryExpandablePanel
            title="Montant des dotations">
            <SecondaryExpandablePanel
              subTitle="Article L1613-1 du CGCT"
              title="Montant de la dotation globale de fonctionnement (DGF)"
            />
            <SecondaryExpandablePanel
              subTitle="Article L2334-1"
              title="Montant de la DGF communes"
            />
          </PrimaryExpandablePanel>
          <PrimaryExpandablePanel
            title="Dotation de solidarité rurale">
            <SecondaryExpandablePanel
              subTitle="Article L2334-20 du CGCT"
              title="Périmètre général d'éligibilité"
            />
            <SecondaryExpandablePanel
              subTitle="Article L2334-21"
              title="Fraction &quot;bourg-centre&quot;"
            />
            <SecondaryExpandablePanel
              subTitle="Article L2334-22"
              title="Fraction &quot;péréquation&quot;"
            />
            <SecondaryExpandablePanel
              subTitle="Article L2334-22-1"
              title="Fraction &quot;cible&quot;"
            />
          </PrimaryExpandablePanel>
        </div>
      </Fragment>
    );
  }
}
