import { AbstractItem, AbstractUpdater } from '../../abstract';

/*
    Initial implementation of general updater
*/
export class GeneralUpdater<T extends AbstractItem> extends AbstractUpdater<T> {
  validateInput(item: T): void {
    if (item.quality < 0) {
      item.quality = 0;
    }

    if (item.quality > 50) {
      item.quality = 50;
    }
  }

  updateQuality(item: T): void {
    if (item.quality > 0) {
      item.quality -= 1;
    }
  }

  updateSellIn(item: T): void {
    item.sellIn -= 1;

    if (item.sellIn < 0) {
      this.updateQuality(item);
    }
  }
}
