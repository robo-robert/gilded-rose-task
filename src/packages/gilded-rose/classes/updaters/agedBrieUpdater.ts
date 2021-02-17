import { AbstractItem, AbstractUpdater } from "../../abstract";

/*
    Initial implementation of aged brie updater
*/
export class AgedBrieUpdater<T extends AbstractItem> extends AbstractUpdater<T> {

    updateQuality(item: T): void {
        if (item.quality > 0 && item.quality < 50) {
            item.quality += 1;
        }
    }

    updateSellIn(item: T): void {
        item.sellIn -= 1;

        if (item.sellIn < 0) {
            this.updateQuality(item);
        }
    }
}