/*
    Generic interface for Updater instance
    It will have public update method which will
    accept a generic Item
*/
export interface IUpdater<T> {
    update: (item: T) => void;
}