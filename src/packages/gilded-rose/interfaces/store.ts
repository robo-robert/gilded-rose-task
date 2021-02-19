/*
    Generic interface for the store instance
    It will have a public property items
    And public method updateQuality which should
    return items after mutation
*/
export interface IStore<T> {
  items: T[];
  updateQuality(): T[];
}
