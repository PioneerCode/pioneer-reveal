export enum SortOrder {
  descending = 'desc',
  ascending = 'asc'
}
export class Sort {
  [name: string]: SortOrder;
}
