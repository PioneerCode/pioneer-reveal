export class Search {
  took: number;
  timed_out: false;
  _shards: Shared;
  hits: HitsParent;
}

export class Shared {
  total: number;
  successful: boolean;
  skipped: number;
  failed: boolean;
}

export class HitsParent {
  total: number;
  max_score: number;
  hits: Hit[];
}

export class Hit {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: object;
}
