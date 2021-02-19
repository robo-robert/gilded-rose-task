import yargs from 'yargs';

import { Cli, Logger, AnswerRecursiveFetcher } from './packages/cli';
import { Item, Store, Supply } from './packages/gilded-rose';

const options = {
  days: {
    alias: 'd',
    type: 'number',
    description: 'Number of days',
  },
  requests: {
    alias: 'r',
    type: 'number',
    description: 'Number of requests',
  },
} as const;

const cliOptions = yargs
  .options(options)
  .check((argv) => {
    if (isNaN(argv.days)) return `Option days must be a number`;
    if (isNaN(argv.requests)) return `Option requests must be a number`;
    return true;
  })
  .help().argv;

const { days, requests } = cliOptions;

const logger = new Logger();

const recursiveFetcher = new AnswerRecursiveFetcher({
  logger,
});

const gildedRose = new Store<Item>([
  new Item('Random item 1', 5, 15),
  new Item('Random item 2', 10, 20),
  new Item(Supply.AGED_BRIE, 5, 25),
  new Item(Supply.CONCERT_TICKET, 15, 30),
  new Item(Supply.CONJURED, 10, 20),
  new Item(Supply.SULFURAS, 20, 80),
]);

const cli = new Cli({
  logger,
  recursiveFetcher,
  gildedRose,
});

cli.run({
  days,
  requests,
});
