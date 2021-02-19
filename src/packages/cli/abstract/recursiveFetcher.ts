import fetch from 'node-fetch';
import { AbstractLogger } from './logger';
import { IGetProps, IRepeatedGetProps, IRecursiveGetProps } from '../interfaces';

interface IAbstractRecursiveFetcherProps {
    logger: AbstractLogger
}

export abstract class AbstractRecursiveFetcher<T> {
    private fetch: typeof fetch;
    protected logger: AbstractLogger;

    constructor({ logger }: IAbstractRecursiveFetcherProps) {
        this.fetch = fetch;
        this.logger = logger;
    }

    protected async get({ url }: IGetProps): Promise<T> {
        try {
            const response = await this.fetch(url);
            const json = await response.json() as T;
            return json;
        }
        catch {
            this.logger.error(`An error occurred while fetching single response from ${url}.`);
        }
    }

    protected async repeatedGet({
        url,
        times
    }: IRepeatedGetProps): Promise<T[]> {
        try {
            return await Promise.all(
                Array.from({ length: times })
                    .fill(0)
                    .map(_ => this.get({ url }))
            );
        }
        catch {
            this.logger.error(`An error occured while fetching multiple reponses from ${url}.`);
        }
    }

    abstract recursiveGet({
        url,
        times,
        iteration,
        output
    }: IRecursiveGetProps<T>): Promise<T[]>
}