import { AbstractStore, AbstractItem, AbstractStrategy } from "../abstract";
import { Strategy } from "./strategy";

/*
    Generic class Store will accept only classes which are of AbstractItem
*/
export class Store<T extends AbstractItem> extends AbstractStore<T> {
    private strategy: AbstractStrategy<T> = new Strategy<T>();

    /* 
       Ok. Now I think i should implement rest of updaters
       and implement a switch statement in switchStrategy method.

       * I removed Mr. Leeroy's code considering that it exists in Kata repo.

       Decided to keep numbers in updater classes hardcoded because in the future bussiness requirements
       might change and even might be different in each supply case.

       There are some edge cases which must be tested. I feel a little bit tired, thus It will be finished tomorrow.

       After those edge cases are covered I will proceed with CLI package task in which I reuse GildedRose implementation.
   */
    updateQuality(): T[] {
        for (const item of this.items) {
            // It passes tests with random items so OK
            this.strategy
                .switchStrategy(item)
                .update(item);
        }

        return this.items;
    }
}