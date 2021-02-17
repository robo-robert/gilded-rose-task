import { IUpdater } from "../interfaces";
import { AbstractItem } from "./item";

/*
    Once again the same abstract updater class extends abstract item class
*/
export abstract class AbstractUpdater<T extends AbstractItem> implements IUpdater<T> {

    protected abstract updateQuality(item: T): void; // This is initial thought
    protected abstract updateSellIn(item: T): void; // This is initial thought

    update(item: T): void {
        this.updateQuality(item);
        this.updateSellIn(item);
    }
}