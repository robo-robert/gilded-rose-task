import { AbstractItem, AbstractStrategy, AbstractUpdater } from "../abstract";

import {
    AgedBrieUpdater,
    ConcertUpdater,
    GeneralUpdater,
    SulfurasUpdater,
} from "./updaters";

import { Supply } from '../enums';

export class Strategy<T extends AbstractItem> extends AbstractStrategy<T> {
    private updater: AbstractUpdater<T> = new GeneralUpdater<T>()

    switchStrategy(item: T): AbstractUpdater<T> {
        switch (item.name) {
            case Supply.AGED_BRIE:
                this.updater = new AgedBrieUpdater<T>();
                break;
            case Supply.SULFURAS:
                this.updater = new SulfurasUpdater<T>();
                break;
            case Supply.CONCERT_TICKET:
                this.updater = new ConcertUpdater<T>();
                break;
            default:
                this.updater = new GeneralUpdater<T>();
                break;
        }

        return this.updater;
    }
}