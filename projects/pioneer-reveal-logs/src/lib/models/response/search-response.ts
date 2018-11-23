import { HitsParent } from './hits';

/**
 * Search result contract returned by Elastic
 * url/{index}/_search
 */
export class SearchResponse {
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
