import { hasKey } from "../../utils/utils";

export class Base {
  /**
   * @param key the field to return a value for
   * @returns the value at the specified field, or undefined
   */
  getFieldValue(key: string): any {
    if (!hasKey(this, key)) {
      throw new Error(`Field ${key} does not exist on this collection`);
    }
    return this[key];
  }
}
