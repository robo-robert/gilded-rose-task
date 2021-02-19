import { IUpdater } from "./updater";
/*
    Generic interface for Strategy instance
    It will have public switchStrategy method which will
    accept a generic Item and return specific Updater instance
*/
export interface IStrategy<T> {
    switchStrategy(item: T): IUpdater<T>;
}