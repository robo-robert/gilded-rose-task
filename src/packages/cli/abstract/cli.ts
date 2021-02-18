import { AbstractLogger } from "./logger";
import { AbstractRecursiveFetcher } from "./recursiveFetcher";
import { ICliProps } from "../interfaces";

import { AbstractStore, AbstractItem } from '../../gilded-rose/abstract'

interface AbstractCliProps<T, S extends AbstractItem> {
    logger: AbstractLogger;
    recursiveFetcher: AbstractRecursiveFetcher<T>;
    gildedRose: AbstractStore<S>;
}

export abstract class AbstractCli<T, S extends AbstractItem> {
    protected logger: AbstractLogger;
    protected recursiveFetcher: AbstractRecursiveFetcher<T>;
    protected gildedRose: AbstractStore<S>;

    constructor({ logger, recursiveFetcher, gildedRose }: AbstractCliProps<T, S>) {
        this.logger = logger;
        this.recursiveFetcher = recursiveFetcher;
        this.gildedRose = gildedRose;
    }

    abstract run({ }: ICliProps): void;
}