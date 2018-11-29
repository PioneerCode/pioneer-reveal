/**
 * Matches documents with fields that have terms within a certain range.
 */
export class Range {
  CreationTimestamp: CreationTimestampDate;

  constructor() {
    this.CreationTimestamp = new  CreationTimestampDate();
  }
}
export class CreationTimestampDate {
  gte: string;
  lte: string;
}
