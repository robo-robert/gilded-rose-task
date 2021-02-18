import { Logger } from 'winston';

export abstract class AbstractLogger {
    protected logger: Logger;

    protected abstract initialize(): void;

    abstract info(message: string): void;
    abstract error(message: string): void;
}