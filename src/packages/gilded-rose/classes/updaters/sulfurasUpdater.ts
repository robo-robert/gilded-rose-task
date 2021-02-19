import { AbstractItem, AbstractUpdater } from '../../abstract';

/*
    Initial implementation of sulfuras updater
*/
export class SulfurasUpdater<T extends AbstractItem> extends AbstractUpdater<T> {
  validateInput(item: T): void {
    // If I understand correctly Sulufuras quality must be always equal to 80
    item.quality = 80;
  }

  updateQuality(_item: T): void {} // eslint-disable-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function

  updateSellIn(_item: T): void {} // eslint-disable-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
}
