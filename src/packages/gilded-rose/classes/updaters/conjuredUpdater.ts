import { AbstractItem, AbstractUpdater } from "../../abstract";

/*
    Initial implementation of conjured updater
*/
export class ConjuredUpdater<T extends AbstractItem> extends AbstractUpdater<T> {

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
            item.quality -= 2;
        }
    }

    updateSellIn(item: T): void {
        item.sellIn -= 1;

        if (item.sellIn < 0) {
            this.updateQuality(item);
        }
    }
}