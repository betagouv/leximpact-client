export interface DotationsState {
  communes: {
    dsr: {
      eligibles: number;
      strates: {
        // Borne supérieure de la strate
        habitants: number;
        // Représentation de la strate dans la population totale
        partPopTotale: number;
        // Potentiel financier moyen par habitant
        potentielFinancierMoyenParHab: number;
        // Nombre de communes éligibles
        eligibles: number;
        // Dotation moyenne par habitant
        dotationMoyenneParHab: number;
        // Part des dotations accordées à cette strate dans la dotation totale.
        partDotationTotale: number;
      }[],
      communes: {
        code: string; // OR id, I'm ok with both.
        eligible: boolean;
        dotationParHab: number;
      }[]
    }
  }
}
