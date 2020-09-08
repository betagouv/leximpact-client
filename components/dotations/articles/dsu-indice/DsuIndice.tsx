import { Fragment, PureComponent } from "react";

import { ExpandablePanelSubTitle, ExpandableText, ParameterValues } from "../../../common";


export class DsuIndice extends PureComponent {
  render() {
    return (
      <Fragment>

        <ExpandablePanelSubTitle subTitle="§ 1 à 5" title="Structure de l&apos;indice synthétique" />
        L&apos;indice synthétique de ressources et de charges mentionné
        à&nbsp;
        <a
          href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=77D4545E5B93968FCA804A193A0C9A54.tplgfr38s_3?idArticle=LEGIARTI000033814578&cidTexte=LEGITEXT000006070633&dateTexte=20170101"
          rel="noopener noreferrer"
          target="_blank"
        >
          l&apos;article L. 2334-16
        </a>
        &nbsp;pour les communes de
        {" "}
        <ParameterValues amendementInputSize="small" path="dotations.communes.dsu.eligibilite.popMinSeuilHaut" />
        {" "}
        habitants
        et plus est constitué :
        <br />
        <br />
        1° Du rapport entre le potentiel financier par habitant des communes
        de
        {" "}
        <ParameterValues amendementInputSize="small" path="dotations.communes.dsu.eligibilite.popMinSeuilHaut" />
        {" "}
        habitants et plus et le potentiel financier par habitant
        de la commune, tel que défini à&nbsp;
        <a
          href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=77D4545E5B93968FCA804A193A0C9A54.tplgfr38s_3?idArticle=LEGIARTI000036589500&cidTexte=LEGITEXT000006070633&categorieLien=id&dateTexte=20181231"
          rel="noopener noreferrer"
          target="_blank"
        >
          l&apos;article L. 2334-4
        </a>
        &nbsp;;
        <br />
        <br />
        2° Du rapport entre la proportion de logements sociaux dans le total
        des logements de la commune et la proportion de logements sociaux dans
        le total des logements des communes de
        {" "}
        <ParameterValues path="dotations.communes.dsu.eligibilite.popMinSeuilHaut" />
        {" "}
        habitants et plus ;
        <br />
        <br />
        3° Du rapport entre la proportion du total des bénéficiaires
        d&apos;aides au logement, y compris leur conjoint et les personnes
        à charge vivant habituellement dans leur foyer, dans le nombre
        total de logements de la commune et cette même proportion constatée
        dans l&apos;ensemble des communes de
        {" "}
        <ParameterValues path="dotations.communes.dsu.eligibilite.popMinSeuilHaut" />
        {" "}
        habitants et plus ;
        <br />
        <br />
        4° Du rapport entre le revenu moyen par habitant des communes
        de
        {" "}
        <ParameterValues path="dotations.communes.dsu.eligibilite.popMinSeuilHaut" />
        {" "}
        habitants et plus et le revenu par habitant de la commune,
        calculé en prenant en compte la population définie au premier alinéa
        de&nbsp;
        <a
          href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000033878277&cidTexte=LEGITEXT000006070633&dateTexte=20170101"
          rel="noopener noreferrer"
          target="_blank"
        >
          l&apos;article L. 2334-2
        </a>
        .
        <br />
        <br />
        <ExpandablePanelSubTitle
          subTitle="§ 7 à 8"
          title="Définition des paramètres considérés" />
        Les logements sociaux retenus pour l&apos;application du présent article sont&nbsp;
        <ExpandableText caption="... en savoir plus">
          les logements locatifs appartenant aux organismes d&apos;habitations
          à loyer modéré, aux sociétés
          d&apos;économie mixte locales et aux filiales de la société ICADE,
          à l&apos;exclusion des logements-foyers mentionnés au 5° de l&apos;article L. 831-1 du
          code de la construction et de l&apos;habitation. Sont aussi retenus comme
          des logements sociaux pour l&apos;application du présent article les logements
          de la Société nationale immobilière ou de ses filiales qui appartenaient
          au 1er janvier 2006 à la société ICADE et qui sont financés dans les
          conditions fixées par le troisième alinéa de l&apos;article L. 2335-3 et
          le dernier alinéa des articles L. 5214-23-2, L. 5215-35 et
          L. 5216-8-1 du présent code. Sont égalEment considérés comme des
          logements sociaux pour l&apos;application du présent article les logements
          faisant l&apos;objet d&apos;une opération de requalification de copropriétés dégradées
          reconnue d&apos;intérêt national selon les modalités définies à l&apos;article L. 741-2
          du code de la construction et de l&apos;habitation. Sont également considérés comme
          des logements sociaux pour l&apos;application du présent article les logements
          appartenant à l&apos;Entreprise minière et chimique et aux sociétés à
          participation majoritaire de l&apos;Entreprise minière et chimique,
          les logements appartenant aux houillères de bassin,
          aux sociétés à participation majoritaire des houillères de bassin
          ainsi qu&apos;aux sociétés à participation majoritaire des Charbonnages de France,
          les logements de la Société nationale immobilière qui appartenaient
          au 1er janvier 2001 aux Houillères du bassin de Lorraine et aux sociétés
          à participation majoritaire des Houillères du bassin de Lorraine et les
          logements appartenant à l&apos;Etablissement public de gestion immobilière
          du Nord-Pas-de-Calais et les logements locatifs ayant bénéficié de prêts
          spéciaux consentis par le Crédit foncier de France appartenant à des personnes
          morales autres que celles citées ci-dessus à la condition qu&apos;ils constituent
          sur le territoire d&apos;une commune un ensemble d&apos;au moins 2 000 logements.
          Les organismes d&apos;habitations à loyer modéré et les sociétés d&apos;économie mixte
          locales sont tenus de fournir au représentant de l&apos;État dans la région,
          chaque année avant le 31 octobre, un inventaire par commune des logements
          sociaux dont ils sont propriétaires au 1er janvier. Le défaut de production de
          cet inventaire ou la production d&apos;un inventaire manifestement erroné donne lieu
          à l&apos;application d&apos;une amende de 1 500 euros recouvrée comme en matière de taxe
          sur les salaires. Un décret fixe le contenu de l&apos;inventaire mentionné ci-dessus.
        </ExpandableText>
        <br />
        <br />
        Les aides au logement retenues pour l&apos;application du
        présent article sont,&nbsp;
        <ExpandableText caption="... en savoir plus">
          dans des conditions définies par décret en Conseil d&apos;État, les prestations prévues
          à l&apos;article L. 821-1 du code de la construction et de l&apos;habitation.
        </ExpandableText>
        <br />
        <br />
        Le revenu pris en considération pour l&apos;application du 4°
        est le dernier revenu imposable connu.
        <br />
        <br />
        <ExpandablePanelSubTitle
          subTitle="§ 9 à 11"
          title="Calcul de l&apos;indice synthétique" />
        L&apos;indice synthétique de ressources et de charges est obtenu par addition des
        rapports visés aux 1°, 2°, 3° et 4°,
        <br />
        en pondérant le premier par
        {" "}
        <ParameterValues
          editable
          amendementInputSize="small"
          path="dotations.communes.dsu.eligibilite.indiceSynthetique.ponderationPotentielFinancier"
          symbol="%" />
        <br />
        le deuxième par
        {" "}
        <ParameterValues
          editable
          amendementInputSize="small"
          path="dotations.communes.dsu.eligibilite.indiceSynthetique.ponderationLogementsSociaux"
          symbol="%" />
        ,
        <br />
        le troisième par
        {" "}
        <ParameterValues
          editable
          amendementInputSize="small"
          path="dotations.communes.dsu.eligibilite.indiceSynthetique.ponderationAideAuLogement"
          symbol="%" />
        <br />
        et le quatrième par
        {" "}
        <ParameterValues
          editable
          amendementInputSize="small"
          path="dotations.communes.dsu.eligibilite.indiceSynthetique.ponderationRevenu"
          symbol="%" />
        .
        <br />
        <br />
        Toutefois, chacun des pourcentages de pondération peut être majoré ou
        minoré pour l&apos;ensemble des communes bénéficiaires d&apos;au plus cinq points
        dans des conditions fixées par un décret en Conseil d&apos;État.
        <br />
        <br />
        Les communes sont classées en fonction de la valeur décroissante
        de leur indice synthétique.
      </Fragment>
    );
  }
}
