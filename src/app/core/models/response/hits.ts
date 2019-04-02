import { Property, KeyValue } from 'src/app/logs/models/key-value';
import { PioneerRevealLogQueryBuilder } from 'src/app/logs/query-builder';
import { ServiceLocator } from 'src/app/core/service-locator.service';

export enum IndexTypeEnum {
  Error = 'pioneer-logs-error',
  Usage = 'pioneer-logs-usage',
  Performance = 'pioneer-logs-performance',
  Diagnostic = 'pioneer-logs-diagnostic'
}

/**
 * Pioneer Logs extension fields for Elastic Hit objects
 */
export class PioneerLogHit {
  /**
   * Internal tracking
   */
  pioneerRevelTracking: PioneerRevealTracking;

  constructor(source: any) {
    this.pioneerRevelTracking = new PioneerRevealTracking(source);
  }
}

export class PioneerLogSource {
  Id: string;
  CreationTimestamp: string;
  InnermostExceptionMessage: string;
  Message: string;
  ApplicationName: string;
  ApplicationLayer: string;
  ApplicationLocation: string;

  /**
   * row.component
   */
  get error(): string {
    return this.InnermostExceptionMessage ? this.InnermostExceptionMessage : this.Message;
  }

  /**
   * row.component
   */
  get location(): string {
    let loc = '';
    if (this.ApplicationName) {
      loc += `${this.ApplicationName} -`;
    }

    if (this.ApplicationLayer) {
      loc += `${this.ApplicationLayer} -`;
    }

    if (this.ApplicationLocation) {
      loc += `${this.ApplicationLocation} -`;
    }
    return loc + ' ';
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
        isPioneerProperty: key.charAt(0) === key.charAt(0).toUpperCase() && key.charAt(0) !== '@' && key.charAt(0) !== '$',
        humanKey: key.replace(/([a-z])([A-Z])/g, '$1 $2').trim()
      } as Property);
    });

    this.sourceMap.sort((a, b) => {
      if (a.key < b.key) {
        return -1;
      }
      if (a.key > b.key) {
        return 1;
      }
      return 0;
    });
  }
}

export class HitsParent {
  total: number;
  max_score: number;
  hits: Hit[];
}

/**
 * Elastic tracking fields
 */
export class Hit extends PioneerLogHit {
  _id: string;
  _index: string;
  _score: number;
  _source: PioneerLogSource;
  _type: string;

  get iconClasses(): string {
    switch (this._index) {
      case IndexTypeEnum.Error: return 'fas fa-bug';
      case IndexTypeEnum.Usage: return 'fas fa-user-ninja';
      case IndexTypeEnum.Performance: return 'fas fa-chart-bar';
      case IndexTypeEnum.Diagnostic: return 'fas fa-question-circle';
    }
  }

  constructor(hit: Hit) {
    super(hit._source);
    this._id = hit._id;
    this._index = hit._index;
    this._score = hit._score;
    this._source = Object.assign(new PioneerLogSource(), hit._source);
    this._type = hit._type;
  }
}
