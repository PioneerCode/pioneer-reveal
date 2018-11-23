import { Query } from './query';
import { Aggs } from './aggs';

/**
 * Search request contract returned for Elastic
 * url/{index}/_search
 */
export class SearchRequest {
  /**
   * Number of results to be returned
   */
  size = 0;

  /**
   * Offset of results to be returned
   */
  from?: number;

  /**
   *
   */
  query?: Query;

  /**
   *
   */
  aggs?: Aggs;
}
