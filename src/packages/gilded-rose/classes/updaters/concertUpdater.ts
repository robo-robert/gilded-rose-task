import { AbstractItem, AbstractUpdater } from '../../abstract';

/*
    Initial implementation of concert ticket updater
*/
export class ConcertUpdater<T extends AbstractItem> extends AbstractUpdater<T> {
  validateInput(item: T): void {
    if (item.quality < 0) {
      item.quality = 0;
    }

    if (item.quality > 50) {
      item.quality = 50;
    }
  }

  updateQuality(item: T): void {
    if (item.quality > 0 && item.quality < 50) {
      item.quality += 1;
    }
  }

  updateSellIn(item: T): void {
    item.sellIn -= 1;

    if (item.sellIn < 0) {
      item.quality = 0;
      return;
    }

    if (item.sellIn < 11) {
      this.updateQuality(item);
    }

    if (item.sellIn < 6) {
      this.updateQuality(item);
    }
  }
}
