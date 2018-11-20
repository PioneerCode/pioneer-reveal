import { Query } from './query';

export class SearchRequest {
  size: 500;
  from: 0;
  query = new Query();
}
