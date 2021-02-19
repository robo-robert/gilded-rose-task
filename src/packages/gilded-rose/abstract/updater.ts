import { IUpdater } from "../interfaces";
import { AbstractItem } from "./item";

/*
    Once again the same abstract updater class extends abstract item class
*/
export abstract class AbstractUpdater<T extends AbstractItem> implements IUpdater<T> {

    protected abstract validateInput(item: T): void;
    protected abstract updateQuality(item: T): void;
    protected abstract updateSellIn(item: T): void;

    update(item: T): void {
        this.validateInput(item);
        this.updateQuality(item);
        this.updateSellIn(item);
    }
}