import { Fragment, PureComponent } from "react";

export class DsuEligibilite extends PureComponent {
  render() {
    // Article L2334-20 du CGCT
    return (
      <Fragment>
        Bénéficient de la dotation prévue à l&apos;article L. 2334-15 :
        <br />
        <br />
        1° Les [deux premiers tiers] 66 premiers % des communes de 10 000 habitants et plus,
         classées, chaque année, en fonction d&apos;un indice synthétique de ressources
         et de charges défini à l&apos;article L. 2334-17 ;
        <br />
        <br />
        2° Le [premier dixième] 10 premiers % des communes dont la population est
        comprise entre 5 000 et 9 999 habitants, classées, chaque année,
        en fonction d&apos;un indice synthétique de ressources
        et de charges défini à l&apos;article L. 2334-18.
        <br />
        <br />
        Toutefois, ne peuvent être éligibles les communes dont le potentiel financier
         par habitant est supérieur à [deux fois et demi] 2,5 le potentiel
         financier moyen par habitant des communes de même groupe démographique
         défini aux 1° et 2°.
      </Fragment>
    );
  }
}
