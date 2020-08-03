export interface DotationsDiffState {
  communes: {
    dsr: {
      nouvellementEligibles: number;
      plusEligibles: number;
      toujoursEligibles: number;
    },
    dsu: {
      nouvellementEligibles: number;
      plusEligibles: number;
      toujoursEligibles: number;
    }
  }
}
