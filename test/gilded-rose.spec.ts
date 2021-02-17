import { expect } from 'chai';

import { GildedRose } from '../src/gilded-rose';

describe(`Gilded Rose package`, () => {
    describe(`It works`, () => {
        let gildedRose: GildedRose;

        beforeEach(() => {
            gildedRose = new GildedRose();
        });

        it(`Should create an empty instance of GuildedRose`, () => {
            expect(gildedRose.items.length).to.equal(0);
        });
    });
});