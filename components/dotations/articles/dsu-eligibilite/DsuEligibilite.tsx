import { Fragment, PureComponent } from "react";

export class DsuEligibilite extends PureComponent {
  render() {
    // Article L2334-20 du CGCT
    return (
      <Fragment>
        Bénéficient de la dotation prévue à&nbsp;
        <a href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=F44078F38E38A1654AF303BFACDD5B7E.tplgfr38s_3?idArticle=LEGIARTI000033878737&cidTexte=LEGITEXT000006070633&categorieLien=id&dateTexte=" target="_blank">l&apos;article L. 2334-15</a>
        &nbsp;:
        <br />
        <br />
        1° Les [deux premiers tiers] 66 premiers % des communes de 10 000 habitants et plus,
         classées, chaque année, en fonction d&apos;un indice synthétique de ressources
         et de charges défini à
        {" "}
        <a href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=77D4545E5B93968FCA804A193A0C9A54.tplgfr38s_3?idArticle=LEGIARTI000038834291&cidTexte=LEGITEXT000006070633&categorieLien=id&dateTexte=" target="_blank">l&apos;article L. 2334-17 ;</a>
        <br />
        <br />
        2° Le [premier dixième] 10 premiers % des communes dont la population est
        comprise entre 5 000 et 9 999 habitants, classées, chaque année,
        en fonction d&apos;un indice synthétique de ressources
        et de charges défini à
        {" "}
        <a href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=77D4545E5B93968FCA804A193A0C9A54.tplgfr38s_3?idArticle=LEGIARTI000006390830&cidTexte=LEGITEXT000006070633&dateTexte=20170101" target="_blank">l&apos;article L. 2334-18.</a>
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
