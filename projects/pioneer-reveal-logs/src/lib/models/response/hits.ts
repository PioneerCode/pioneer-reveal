import { Property, KeyValue } from '../key-value';
import { PioneerRevealLogQueryBuilder } from '../../pioneer-reveal-logs-query-builder';
import { ServiceLocator } from '../../service-locator.service';

export enum IndexTypeEnum {
  Error = 'pioneer-logs-error',
  Usage = 'pioneer-logs-usage',
  Performance = 'pioneer-logs-performance',
  Diagnostic = 'pioneer-logs-diagnostic'
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

  /**
   * Reference to query builder that is set using the injector
   * manually. This is needed to adding tracking to isFilter prop in sourceMap
   */
  private _queryBuilder: PioneerRevealLogQueryBuilder;

  /**
   * @param source Log file
   * @param index Index log belongs to
   */
  constructor(source: any) {
    this.selected = false;
    this._queryBuilder = ServiceLocator.injector.get(PioneerRevealLogQueryBuilder);
    this.buildTrackingData(source);
  }

  private buildTrackingData(source: any) {
    Object.keys(source).map((key) => {
      this.sourceMap.push({
        key: key,
        value: source[key],
        isObject: typeof source[key] === 'object' && source[key] !== null,
        isFilter: this._queryBuilder.isCurrentFilter({ key: key, value: source[key] } as KeyValue),
        isPioneerProperty: key.charAt(0) === key.charAt(0).toUpperCase() && key.charAt(0) !== '@' && key.charAt(0) !== '$'
      } as Property);
    });
  }
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

  get iconClasses(): string {
    switch (this._index) {
      case IndexTypeEnum.Error: return 'fas fa-bug';
      case IndexTypeEnum.Usage: return 'fas fa-user-ninja';
      case IndexTypeEnum.Performance: return 'fas fa-thermometer-half';
      case IndexTypeEnum.Diagnostic: return 'fas fa-question-circle';
    }
  }

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
