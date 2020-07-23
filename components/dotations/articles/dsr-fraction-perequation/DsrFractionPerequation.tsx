import { Fragment, PureComponent } from "react";

import { StateParameter } from "../../../common";

export class DsrFractionPerequation extends PureComponent {
  render() {
    // Article L2334-22 du CGCT
    return (
      <Fragment>
        La deuxième fraction de la dotation de solidarité rurale est attribuée aux
        communes dont le potentiel financier par habitant, tel qu&apos;il est défini
        à l&apos;article L. 2334-4, est inférieur [à
        {" "}
        <StateParameter
          editable
          amendementInputSize="small"
          path="dotations.communes.dsr.perequation.eligibilite.rapportPotentielFinancier"
        />
        {" "}
        fois] du potentiel financier
        moyen par habitant des communes appartenant au même groupe démographique.
        <br />
        <br />
        Cette fraction est répartie :
        <br />
        <br />
        1° Pour
        {" "}
        <StateParameter
          editable
          amendementInputSize="small"
          path="dotations.communes.dsr.perequation.attribution.repartition.ponderationPotentielFinancier"
        />
        {" "}
        % de son montant, en fonction de la population pondérée par
        l&apos;écart entre le potentiel financier par habitant de la commune et le
        potentiel financier moyen par habitant des communes appartenant au même
        groupe démographique ainsi que par l&apos;effort fiscal plafonné à 1,2 ;
        <br />
        <br />
        2° Pour
        {" "}
        <StateParameter
          editable
          amendementInputSize="small"
          path="dotations.communes.dsr.perequation.attribution.repartition.ponderationLongueurVoirie"
        />
        {" "}
        % de son montant, proportionnellement à la longueur de la voirie
        classée dans le domaine public communal ; pour les communes situées en zone
        de montagne ou pour les communes insulaires, la longueur de la voirie est
        doublée. Pour l&apos;application du présent article, une commune insulaire
        s&apos;entend d&apos;une commune de métropole située sur une île qui,
        n&apos;étant pas reliée au continent par une infrastructure routière,
        comprend une seule commune ou un seul établissement public de coopération
        intercommunale ;
        <br />
        <br />
        3° Pour
        {" "}
        <StateParameter
          editable
          amendementInputSize="small"
          path="dotations.communes.dsr.perequation.attribution.repartition.ponderationNbreEnfants"
        />
        {" "}
        % de son montant, proportionnellement au nombre d&apos;enfants de
        trois à seize ans domiciliés dans la commune, établi lors du dernier recensement.
        <br />
        <br />
        4° Pour
        {" "}
        <StateParameter
          editable
          amendementInputSize="small"
          path="dotations.communes.dsr.perequation.attribution.repartition.ponderationPotentielFinancierParHectare"
        />
        {" "}
        % de son montant au maximum, en fonction de l&apos;écart entre le
        potentiel financier par hectare de la commune et le potentiel financier moyen
        par hectare des communes de moins de
        {" "}
        <StateParameter
          path="dotations.communes.dsr.eligibilite.popMax"
        />
        {" "}
        habitants.
        <br />
        <br />
        Toutefois, sous réserve des dispositions du 4° ci-dessus, chacun des pourcentages
        de pondération peut être majoré ou minoré pour l&apos;ensemble des communes
        bénéficiaires d&apos;au plus cinq points dans des conditions fixées par décret
        en Conseil d&apos;Etat, après avis du comité des finances locales.
        <br />
        <br />
        Lorsqu&apos;une commune cesse d&apos;être éligible en 2012 à cette fraction de
        la dotation de solidarité rurale, elle perçoit, à titre de garantie, une
        attribution égale à 90 % en 2012,75 % en 2013 et 50 % en 2014 du montant perçu
        en 2011.
        <br />
        <br />
        A compter de 2012, l&apos;attribution au titre de cette fraction d&apos;une commune
        éligible ne peut être ni inférieure à 90 % ni supérieure à 120 % du montant perçu
        l&apos;année précédente.
      </Fragment>
    );
  }
}
