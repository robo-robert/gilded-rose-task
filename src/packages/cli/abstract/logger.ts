import { Logger } from 'winston';

export abstract class AbstractLogger {
    protected logger: Logger;

    constructor() {
        this.initialize();
    }

    protected abstract initialize(): void;

    abstract info(message: string): void;
    abstract error(message: string): void;
}