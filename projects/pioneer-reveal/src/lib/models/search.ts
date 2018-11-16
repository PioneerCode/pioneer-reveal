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
  _id: string;
  _index: string;
  _score: number;
  _source: object;
  _type: string;


  /**
   * Internal tracking
   */
  pioneerRevelTracking: PioneerRevealTracking;

  constructor(hit: Hit) {
    this._id = hit._id;
    this._index = hit._index;
    this._score = hit._score;
    this._source = hit._source;
    this._type = hit._type;
    this.pioneerRevelTracking = new PioneerRevealTracking();
  }
}

export class PioneerRevealTracking {
  /**
   * User selects this hit on the logs UI with the
   * intent of expanding for more details.
   */
  selected: boolean;

  constructor() {
    this.selected = false;
  }
}
