import { Fragment, PureComponent } from "react";

import { StateParameter } from "../../../articles-inputs/parameter";
import { ExpandablePanelSubTitle, ExpandableText } from "../../../expandable-panels";


export class DsuIndice extends PureComponent {
  render() {
    return (
      <Fragment>

       <ExpandablePanelSubTitle subTitle="§ 1 à 5" title="Structure de l'indice synthétique" />
        L&apos;indice synthétique de ressources et de charges mentionné 
        à l&apos;article L. 2334-16 pour les communes de 10 000 habitants 
        et plus est constitué :
        <br />
        <br />
        1° Du rapport entre le potentiel financier par habitant des communes 
        de 10 000 habitants et plus et le potentiel financier par habitant 
        de la commune, tel que défini à l&apos;article L. 2334-4 ;
        <br />
        <br />
        2° Du rapport entre la proportion de logements sociaux dans le total 
        des logements de la commune et la proportion de logements sociaux dans 
        le total des logements des communes de 10 000 habitants et plus ;
        <br />
        <br />
        3° Du rapport entre la proportion du total des bénéficiaires 
        d&apos;aides au logement, y compris leur conjoint et les personnes 
        à charge vivant habituellement dans leur foyer, dans le nombre 
        total de logements de la commune et cette même proportion constatée 
        dans l&apos;ensemble des communes de 10 000 habitants et plus ;
        <br />
        <br />
        4° Du rapport entre le revenu moyen par habitant des communes 
        de 10 000 habitants et plus et le revenu par habitant de la commune, 
        calculé en prenant en compte la population définie au premier alinéa 
        de l&apos;article L. 2334-2.
        <br />
        <br />
         <ExpandablePanelSubTitle subTitle="§ 7 à 8" 
         title="Définition des paramètres considérés" />
        <ExpandableText caption="Les logements sociaux retenus pour 
        l&apos;application du présent article sont">  
        Les logements sociaux retenus pour l&apos;application du présent article sont 
        les logements locatifs appartenant aux organismes d&apos;habitations 
        à loyer modéré, aux sociétés 
        d&apos;économie mixte locales et aux filiales de la société ICADE, 
        à l&apos;exclusion des logements-foyers mentionnés au 5° de l&apos;article L. 351-2 du
        code de la construction et de l&apos;habitation. Sont aussi retenus comme 
        des logements sociaux pour l&apos;application du présent article les logements
        de la Société nationale immobilière ou de ses filiales qui appartenaient 
        au 1er janvier 2006 à la société ICADE et qui sont financés dans les 
        conditions fixées par le troisième alinéa de l&apos;article L. 2335-3 et 
        le dernier alinéa des articles L. 5214-23-2, L. 5215-35 et 
        L. 5216-8-1 du présent code. Sont égalEment considérés comme des 
        logements sociaux pour l&apos;application du présent article les logements 
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
        <ExpandableText caption="Les aides au logement retenues pour l&apos;application du 
        présent article sont">
        Les aides au logement retenues pour l'application du présent article sont, dans
        des conditions définies par décret en Conseil d'Etat, les prestations prévues
        aux articles L. 351-1 du code de la construction et de l'habitation et L. 542-1
        et L. 831-1 du code de la sécurité sociale.
        </ExpandableText>
        <br />
        <br />
        Le revenu pris en considération pour l'application du 4° est le dernier revenu imposable connu.
        <br />
        <br />
        <ExpandablePanelSubTitle subTitle="§ 9 à 11" 
        title="Calcul de l'indice synthétique" />
        L'indice synthétique de ressources et de charges est obtenu par addition des 
        rapports visés aux 1°, 2°, 3° et 4°, 
        <br />
        en pondérant le premier par 45 %,
        <br />
        le deuxième par 15 %, 
        <br />
         le troisième par 30 %  
        <br />
        et le quatrième par 10 %.   
        <br />
        <br />
        Toutefois, chacun des pourcentages de pondération peut être majoré ou 
        minoré pour l'ensemble des communes bénéficiaires d'au plus [cinq] 5 points 
        dans des conditions fixées par un décret en Conseil d'État.
        <br />
        <br />
        Les communes sont classées en fonction de la valeur décroissante 
        de leur indice synthétique.


      </Fragment>
    );
  }
}
