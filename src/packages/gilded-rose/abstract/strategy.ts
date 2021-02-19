import { IStrategy, IUpdater } from "../interfaces";
import { AbstractItem } from "./item";

/*
    Abstract strategy also extends Abstract item class same as store
*/
export abstract class AbstractStrategy<T extends AbstractItem> implements IStrategy<T> {
    abstract switchStrategy(item: T): IUpdater<T>;
}