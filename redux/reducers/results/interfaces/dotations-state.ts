export interface DotationsState {
  communes: {
    dsr: {
      eligibles: number;
      strates: {
        // Nombre de communes éligibles
        eligibles: number;
        proportionEligibles: number;
        // Dotation moyenne par habitant
        dotationMoyenneParHab: number;
        // Part des dotations accordées à cette strate dans la dotation totale.
        partDotationTotale: number;
      }[],
      communes: {
        code: string;
        eligible: boolean;
        dotationParHab: number;
        dotationParHabAnneeSuivante: number;
        dureeAvantTerme: number;
      }[]
    }
    dsu: {
      eligibles: number;
      strates: {
        // Nombre de communes éligibles
        eligibles: number;
        proportionEligibles: number;
        // Dotation moyenne par habitant
        dotationMoyenneParHab: number;
        // Part des dotations accordées à cette strate dans la dotation totale.
        partDotationTotale: number;
      }[],
      communes: {
        code: string;
        eligible: boolean;
        dotationParHab: number;
      }[]
    }
  }
}
