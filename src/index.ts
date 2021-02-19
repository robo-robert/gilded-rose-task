import yargs from 'yargs';

import { Cli, Logger, AnswerRecursiveFetcher } from './packages/cli';
import { Item, Store } from './packages/gilded-rose';

const options = {
    days: {
        alias: 'd',
        type: 'number',
        description: 'Number of days'
    },
    requests: {
        alias: 'r',
        type: 'number',
        description: 'Number of requests'
    }
} as const

const cliOptions = yargs
    .options(options)
    .check(argv => {
        if (isNaN(argv.days)) return `Option days must be a number`;
        if (isNaN(argv.requests)) return `Option requests must be a number`;
        return true;
    })
    .help()
    .argv;

const { days, requests } = cliOptions;

const logger = new Logger();

const recursiveFetcher = new AnswerRecursiveFetcher({
    logger
});

const gildedRose = new Store<Item>([

]);

const cli = new Cli({
    logger,
    recursiveFetcher,
    gildedRose
});

cli.run({
    days, requests
});
