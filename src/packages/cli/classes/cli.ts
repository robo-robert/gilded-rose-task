import co from 'co';

import { AbstractCli } from '../abstract';
import { ICliProps } from '../interfaces';

import { AbstractItem } from '../../gilded-rose/abstract';

export class Cli<T, S extends AbstractItem> extends AbstractCli<T, S> {
  run({ days, requests }: ICliProps): Promise<void | Promise<T[]>> {
    const _logger = this.logger;
    const _recursiveFetcher = this.recursiveFetcher;
    const _gildedRose = this.gildedRose;
    return co(function* () {
      try {
        _logger.info(`CLI application has started running`);
        for (let day = 1; day <= days; day++) {
          _logger.info(`DAY no. ${day}`);
          yield _recursiveFetcher.recursiveGet({
            url: 'https://yesno.wtf/api',
            times: requests,
            iteration: 0,
            output: [],
          });
          _logger.info(`Starting to update store items.`);
          _gildedRose.updateQuality();
          _logger.info(`Finished updating store items`);
        }
        _logger.info(`CLI application finished running.`);
      } catch {
        _logger.error(`An unexpected error has occurred.`);
      }
    });
  }
}
