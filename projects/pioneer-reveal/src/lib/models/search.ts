import { KeyValue, Property } from './key-value';
import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-log-query-builder';
import { ServiceLocator } from '../service-locator.service';

/**
 * Search result contract returned by Elastic
 * url/index/_search
 */
export class Search {
  took: number;
  timed_out: false;
  _shards: Shard;
  hits: HitsParent;
}

export class Shard {
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
    this.pioneerRevelTracking = new PioneerRevealTracking(this._source);
  }
}

export class PioneerRevealTracking {
  /**
   * User selects this hit on the logs UI with the
   * intent of expanding for more details.
   */
  selected: boolean;

  /**
   * Map source object to key value collection
   */
  sourceMap = [] as Property[];

  /**
   * Flag if object. Used to drive UI.
   */
  isObject = false;

  private queryBuilder: PioneerRevealLogQueryBuilder;

  constructor(source: any) {
    this.selected = false;
    this.queryBuilder = ServiceLocator.injector.get(PioneerRevealLogQueryBuilder);

    Object.keys(source).map((key) => {
      this.sourceMap.push({
        key: key,
        value: source[key],
        isObject: typeof source[key] === 'object' && source[key] !== null,
        isFilter: this.queryBuilder.isCurrentFilter({
          key: key, value: source[key]
        } as KeyValue)
      } as Property);
    });
    console.log(this.sourceMap);
  }
}
