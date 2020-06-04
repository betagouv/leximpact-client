import { Fragment, PureComponent } from "react";

import NumberInput from "../../../articles-inputs/parameter/NumberInput";

export class DsrEligibilite extends PureComponent {
  render() {
    // Article L2334-20 du CGCT
    return (
      <Fragment>
        La dotation de solidarité rurale est attribuée aux communes de moins de
        <NumberInput value={10000} />
        habitants et à certains chefs-lieux d&apos;arrondissement de moins de
        <NumberInput value={20000} />
        habitants pour tenir compte, d&apos;une part, des charges qu&apos;ils supportent pour
        contribuer au maintien de la vie sociale en milieu rural, d&apos;autre part, de
        l&apos;insuffisance de leurs ressources fiscales.
        <br />
        <br />
        Cette dotation comporte trois fractions. La variation annuelle de la dotation de solidarité
        rurale est répartie par le comité des finances locales entre ces trois fractions.
      </Fragment>
    );
  }
}
