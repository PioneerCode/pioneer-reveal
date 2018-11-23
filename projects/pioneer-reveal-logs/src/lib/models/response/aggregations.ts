export class Aggregations {
  [string: string]: Aggregation;
}

export class Aggregation {
  doc_count_error_upper_bound: number;
  sum_other_doc_count: number;
  buckets: Bucket[];
}

export class Bucket {
  key: string;
  doc_count: number;
  [string: string]: Aggregation;
}
