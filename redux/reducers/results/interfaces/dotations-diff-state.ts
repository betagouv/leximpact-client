export interface DotationsDiffState {
  communes: {
    dsr: {
      nouvellementEligibles: number;
      plusEligibles: number;
      toujoursEligibles: number;
      communes: {
        code: string;
        diffDotationParHab: number;
      }[];
    },
    dsu: {
      nouvellementEligibles: number;
      plusEligibles: number;
      toujoursEligibles: number;
      communes: {
        code: string;
        diffDotationParHab: number;
      }[];
    },
    // DSR & DSU
    dgf: {
      communes: {
        code: string;
        diffDotationParHab: number;
      }[];
      strates: {
        diffDotationMoyenneParHab: number;
      }[];
    }
  }
}
