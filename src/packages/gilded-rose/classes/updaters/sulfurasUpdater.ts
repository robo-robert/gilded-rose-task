import { AbstractItem, AbstractUpdater } from "../../abstract";

/*
    Initial implementation of sulfuras updater
*/
export class SulfurasUpdater<T extends AbstractItem> extends AbstractUpdater<T> {

    updateQuality(_item: T): void { } // Sulfuras is legendary item and it's quality should not alter

    updateSellIn(_item: T): void { } // Sulfuras is legendary item and it's sellIn should not alter
}