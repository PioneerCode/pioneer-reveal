export class Query {
  bool: Bool;
  filter: Filter[];
  should: Should[];
  must_not: MustNot[];
}

export class Bool {
  must: (BoolMustMatchAll | BoolMustPhrase | BoolRange)[];
}

export class BoolMustMatchAll {
  match_all: BoolMustMatchObject;
}

export class BoolMustMatchObject {
  match_all: object;
}

export class BoolMustPhrase {
  match_phrase: BoolMustPhraseObject;
}

export class BoolMustPhraseObject {
  [val: string]: any;
}

export class BoolRange {
  range: BoolRangeObject;
}

export class BoolRangeObject {
  timestamp: BoolRangeObjectTimestamp;
}

export class BoolRangeObjectTimestamp {
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
