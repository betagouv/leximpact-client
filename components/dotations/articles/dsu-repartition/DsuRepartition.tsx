import { Fragment, PureComponent } from "react";

import { StateParameter } from "../../../articles-inputs/parameter";
import { ExpandableText } from "../../../expandable-panels";

export class DsuRepartition extends PureComponent {
  render() {
    // Article L2334-20 du CGCT
    return (
      <Fragment>
        La dotation revenant à chaque commune éligible est égale au produit
         de sa population par la valeur de l&apos;indice qui lui est attribué. 
         Ce produit est pondéré par l&apos;effort fiscal dans la limite de 1,3 et 
         par un coefficient variant uniformément de 4 à 0,5 dans l&apos;ordre 
         croissant du rang de classement des communes éligibles.
        <br />
        <br />
        Pour la détermination de la dotation revenant aux communes éligibles, 
        s&apos;appliquent au produit défini au premier alinéa deux coefficients 
        multiplicateurs supplémentaires, l&apos;un égal à un, augmenté du rapport 
        entre le double de la population des zones urbaines sensibles et, à 
        compter de 2017, des quartiers prioritaires de la politique de la ville 
        et la population totale de la commune, et l&apos;autre égal à un, augmenté du 
        rapport entre la population des zones franches urbaines et la population 
        totale de la commune. En 2016, la population des zones urbaines sensibles 
        t la population des zones franches urbaines - territoires entrepreneurs 
        prises en compte sont authentifiées à l&apos;issue du dernier recensement de 
        population dans les zones existant au 1er janvier 2014.
        <br />
        <br />
        L&apos;accroissement de la dotation de chaque commune ne peut excéder 
        4 millions d&apos;euros par an.
        <br />
        <br />
        À compter de 2017, les communes éligibles au titre de l&apos;article 
        L. 2334-16 perçoivent une dotation égale à celle perçue 
        l&apos;année précédente, majorée de l&apos;augmentation prévue à 
        l&apos;article L. 2334-18-4. Les communes qui n&apos;étaient pas éligibles
         à la dotation l&apos;année précédant l&apos;année de versement bénéficient 
         d&apos;une attribution calculée en application du présent article.
      </Fragment>
    );
  }
}
