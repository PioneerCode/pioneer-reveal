export class KeyValue {
  key: string;
  value: string | number | any;
}

export class Property extends KeyValue {
  /**
   * Is prop value an object?
   * Used to drive UI
   */
  isObject: boolean;

  /**
   * Is prop currently being filtered by?
   * Used to drive UI
   */
  isFilter: boolean;
}

