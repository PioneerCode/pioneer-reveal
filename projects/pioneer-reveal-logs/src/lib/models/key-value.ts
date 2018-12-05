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

  /**
   * Font awesome icon classes
   */
  iconClasses: string;

  /**
   * Determine if the field has been selected in the pioneer-reveal-logs-fields components
   */
  isFieldSelected: boolean;

  /**
   * Denotes if this is a property of Pioneer Logs
   */
  isPioneerProperty: boolean;
}

