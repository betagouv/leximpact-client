import { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../redux/reducers";
import {
  ExpandablePanelSubTitle, ExpandableText, ParameterValues,
} from "../../../common";
import styles from "./DsrFractionBourgCentre.module.scss";

const mapStateToProps = ({ parameters }: RootState) => ({
  plafonnementPopulation: parameters.amendement.dotations
    .communes.dsr.bourgCentre.attribution.plafonnementPopulation,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class DsrFractionBourgCentre extends PureComponent<PropsFromRedux> {
  render() {
    const { plafonnementPopulation } = this.props;
    // Article L2334-21 du CGCT
    return (
      <Fragment>
        <ExpandablePanelSubTitle subTitle="§ 1 à 9" title="Éligibilité" />
        <br />
        La première fraction de la dotation de solidarité rurale est attribuée aux communes
        dont la population représente au moins
        {" "}
        <ParameterValues
          editable
          amendementInputSize="small"
          path="dotations.communes.dsr.bourgCentre.eligibilite.partPopCantonMin"
          symbol="%"
        />
        {" "}
        de la population du canton, aux communes
        sièges des bureaux centralisateurs, ainsi qu&apos;aux communes chefs-lieux de canton
        au 1er janvier 2014 ;
        <br />
        <br />
        Ne peuvent être éligibles les communes :
        <br />
        <br />
        <div className={styles.list1}>
        1° Situées dans une agglomération :
          <br />
          <br />
          <div className={styles.list2}>
        a) Représentant au moins
            {" "}
            <ParameterValues
              editable
              amendementInputSize="small"
              path="dotations.communes.dsr.bourgCentre.eligibilite.exclusion.agglomeration.partPopDepartementMin"
              symbol="%"
            />
            {" "}
            de la population du département ou comptant plus de
            {" "}
            <ParameterValues
              editable
              path="dotations.communes.dsr.bourgCentre.eligibilite.exclusion.agglomeration.popMin"
            />
            {" "}
        habitants ;
            <br />
            <br />
        b) Comptant une commune soit de plus de
            {" "}
            <ParameterValues
              editable
              path="dotations.communes.dsr.bourgCentre.eligibilite.exclusion.agglomeration.popCommuneMin"
            />
            {" "}
        habitants, soit chef-lieu de département ;
          </div>
          <br />
        2° Situées dans un canton dont la commune chef-lieu compte plus de
          {" "}
          <ParameterValues
            editable
            path="dotations.communes.dsr.bourgCentre.eligibilite.exclusion.canton.popChefLieuMin"
          />
          {" "}
        habitants,
        à l&apos;exception des communes sièges des bureaux centralisateurs ;
          <br />
          <br />
        3° Alinéa abrogé ;
          <br />
          <br />
        4° Dont le potentiel financier par habitant est supérieur
          <span className={styles.bold}>
            {" "}
            au double du [ à
            {" "}
            <ParameterValues
              editable
              amendementInputSize="small"
              path="dotations.communes.dsr.bourgCentre.eligibilite.exclusion.potentielFinancier.rapportPotentielFinancierMoyen"
            />
            {" "}
            fois le ]
            {" "}
          </span>
          {" "}
        potentiel financier
        moyen par habitant des communes de moins de
          {" "}
          <ParameterValues
            path="dotations.communes.dsr.eligibilite.popMax"
          />
          {" "}
        habitants.
        </div>
        <br />
        <br />
        Bénéficient également de cette fraction les chefs-lieux d&apos;arrondissement au
        31 décembre 2014, dont la population est comprise entre
        {" "}
        <ParameterValues
          path="dotations.communes.dsr.eligibilite.popMax" />
        {" "}
        et
        {" "}
        <ParameterValues
          path="dotations.communes.dsr.eligibilite.popChefLieuMax" />
        {" "}
        habitants,
        qui n&apos;entrent pas dans les cas prévus aux 1° et 4° ci-dessus.
        <br />
        <br />
        <ExpandablePanelSubTitle subTitle="§ 10 à 14" title="Répartition" />
        <br />
        L&apos;attribution revenant à chaque commune est déterminée en fonction :
        <br />
        <br />
        <div className={styles.list1}>
        a) De la population prise en compte dans la limite de
          {" "}
          <ParameterValues
            editable
            path="dotations.communes.dsr.bourgCentre.attribution.popLimite"
          />
          {" "}
        habitants ;
          <br />
          <br />
        b) De l&apos;écart entre le potentiel financier moyen par habitant des communes de moins
        de
          {" "}
          <ParameterValues
            path="dotations.communes.dsr.eligibilite.popMax"
          />
          {" "}
        habitants et le potentiel financier par habitant de la commune ;
          <br />
          <br />
        c) De l&apos;effort fiscal pris en compte dans la limite de
          {" "}
          <ParameterValues
            editable
            amendementInputSize="small"
            path="dotations.communes.dsr.bourgCentre.attribution.effortFiscalLimite"
          />
          {" "}
        ;
          <br />
          <br />
        d) D&apos;un coefficient multiplicateur égal à
          {" "}
          <ParameterValues
            editable
            amendementInputSize="small"
            path="dotations.communes.dsr.bourgCentre.attribution.coefMultiplicateurRevitalisationRurale"
          />
          {" "}
        pour les communes situées en zones de
        revitalisation rurale telles que définies à l&apos;article 1465 A du code général des
        impôts.
        </div>
        <br />
        <ExpandablePanelSubTitle subTitle="§ 15 à 18" title="Garanties" />
        Lorsqu&apos;une commune cesse de remplir les conditions requises pour bénéficier de
        cette fraction de la dotation de solidarité rurale, cette commune perçoit, à titre
        de garantie non renouvelable, une attribution égale à la moitié de celle qu&apos;elle
        a perçue l&apos;année précédente.
        <br />
        <br />
        <ExpandableText caption="Alinéas caducs">
        Par dérogation, les communes ayant cessé d&apos;être
        éligibles en 2017 à la suite du plafonnement de leur population en application des cinq
        derniers alinéas du présent article perçoivent en 2018 une garantie de sortie égale à
        celle perçue en 2017
          <br />
        Lorsqu&apos;une commune cesse d&apos;être éligible en 2012 à cette fraction de la dotation
        de solidarité rurale, elle perçoit, à titre de garantie, une attribution égale à 90 % en
        2012, 75 % en 2013 et 50 % en 2014 du montant perçu en 2011.
        </ExpandableText>
        <br />
        <br />
        À compter de 2012, l&apos;attribution d&apos;une commune éligible ne peut être ni
        inférieure à 90 % ni supérieure à 120 % du montant perçu l&apos;année précédente.
        <br />
        <br />
        <ExpandablePanelSubTitle subTitle="§ 19 à 24" title="Plafonnement de la population prise en compte" />
        Pour l&apos;application du présent article, les limites territoriales des cantons sont
        appréciées au 1er janvier 2014.
        <br />
        <br />
        La population prise en compte est celle définie à
        {" "}
        <a
          href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000033878277&cidTexte=LEGITEXT000006070633&dateTexte=20170101"
          rel="noopener noreferrer"
          target="_blank"
        >
          l&apos;article L. 2334-2
        </a>
        &nbsp;:
        <br />
        <br />
        <div className={styles.list1}>
          {
            plafonnementPopulation.map((_, index) => {
              if (index === 0) {
                return (
                  <Fragment>
                    – plafonnée à
                    {" "}
                    <ParameterValues
                      editable
                      path={`dotations.communes.dsr.bourgCentre.attribution.plafonnementPopulation.${index}.plafonnement`}
                    />
                    {" "}
                    habitants pour les communes dont la population issue du dernier
                    recensement est inférieure à
                    {" "}
                    <ParameterValues
                      editable
                      path={`dotations.communes.dsr.bourgCentre.attribution.plafonnementPopulation.${index}.popMax`}
                    />
                    {" "}
                    habitants ;
                    <br />
                    <br />
                  </Fragment>
                );
              }
              return (
                <Fragment>
                  – plafonnée à
                  {" "}
                  <ParameterValues
                    editable
                    path={`dotations.communes.dsr.bourgCentre.attribution.plafonnementPopulation.${index}.plafonnement`}
                  />
                  {" "}
                  habitants pour les communes dont la population issue du dernier
                  recensement est comprise entre
                  {" "}
                  <ParameterValues
                    path={`dotations.communes.dsr.bourgCentre.attribution.plafonnementPopulation.${index - 1}.popMax`}
                  />
                  {" "}
                  et
                  {" "}
                  <ParameterValues
                    editable
                    offset={-1}
                    path={`dotations.communes.dsr.bourgCentre.attribution.plafonnementPopulation.${index}.popMax`}
                  />
                  {" "}
                  habitants
                  {
                    index !== plafonnementPopulation.length - 1 ? (
                      <Fragment>
                        {" "}
                        ;
                        <br />
                        <br />
                      </Fragment>
                    ) : "."
                  }
                </Fragment>
              );
            })
          }
        </div>
        <br />
        Ce plafond s&apos;applique uniquement à la population de la commune concernée et
        n&apos;intervient pas dans le calcul du potentiel financier par habitant.
      </Fragment>
    );
  }
}

const ConnectedDsrFractionBourgCentre = connector(DsrFractionBourgCentre);

export { ConnectedDsrFractionBourgCentre as DsrFractionBourgCentre };
