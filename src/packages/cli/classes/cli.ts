import co from 'co';

import { AbstractCli } from "../abstract";
import { ICliProps } from '../interfaces';

import { AbstractItem } from '../../gilded-rose/abstract';

export class Cli<T, S extends AbstractItem> extends AbstractCli<T, S> {
    run({ days, requests }: ICliProps) {
        const self = this;
        return co(function* () {
            try {
                for (let day = 1; day <= days; day++) {
                    self.logger.info(`DAY no. ${day}`);
                    yield self
                        .recursiveFetcher
                        .recursiveGet({
                            url: 'https://yesno.wtf/api',
                            times: requests,
                            iteration: 0,
                            output: []
                        });
                    self.gildedRose.updateQuality();
                }
                self.logger.info(`CLI application finished running.`);
            }
            catch {
                self.logger.error(`An unexpected error has occurred.`);
            }
        });
    }
}