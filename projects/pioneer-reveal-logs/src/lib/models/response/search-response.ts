import { HitsParent } from './hits';
import { Aggregations } from './aggregations';

/**
 * Search result contract returned by Elastic
 * url/{index}/_search
 */
export class SearchResponse {
  took: number;
  timed_out: false;
  _shards: Shard;
  hits: HitsParent;
  aggregations: Aggregations;
}

export class Shard {
  total: number;
  successful: boolean;
  skipped: number;
  failed: boolean;
}
