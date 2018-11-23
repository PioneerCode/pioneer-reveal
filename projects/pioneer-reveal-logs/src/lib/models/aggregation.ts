/**
 * Provide the ability to group and extract statistics from your data.
 */
export class Aggs {
  [string: string]: AggregationTerm;
}

export class AggregationTerm {
  terms: Terms;
  aggs?: Aggs;
}

export class Terms {
  field: string;
}
