

export enum BoolMustObjectOrderEnum {
  BoolMustMatchAll = 0,
  BoolMustMatchPhrase = 1,
  BoolMustRange = 2
}

export class Bool {
  must: (BoolMustMatchAll | BoolMustMatchPhrase | BoolMustRange)[];

  constructor() {
    this.must = [];
    this.must.push({
      match_all: {}
    } as BoolMustMatchAll);
  }
}

export class BoolMustMatchAll {
  match_all: BoolMustMatchObject;
}

export class BoolMustMatchObject {
  match_all: object;
}

export class BoolMustMatchPhrase {
  match_phrase: BoolMustMatchPhraseObject;
}

export class BoolMustMatchPhraseObject {
  [val: string]: any;
}

export class BoolMustRange {
  range: BoolMustRangeObject;
}

export class BoolMustRangeObject {
  timestamp: BoolMustRangeObjectTimestamp;
}

export class BoolMustRangeObjectTimestamp {
  gte: number;
  lte: number;
  format: string;
}

export class Filter {
}

export class Should {
}

export class MustNot {
}

export class Query {
  bool: Bool;
  filter: Filter[];
  should: Should[];
  must_not: MustNot[];

  constructor() {
    this.bool = new Bool();
  }
}
