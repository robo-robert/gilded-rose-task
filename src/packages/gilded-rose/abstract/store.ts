import { IStore } from '../interfaces';
import { AbstractItem } from './item';

/*
    I went with abstract store approach in order to make code more flexible for future use
*/
export abstract class AbstractStore<T extends AbstractItem> implements IStore<T> {
  items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  abstract updateQuality(): T[];
}
