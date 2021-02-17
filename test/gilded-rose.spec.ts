import { expect } from 'chai';

import { Item, Store, Supply } from '../src';

/*
    Intially I will separate test cases
    -- With single random item
    -- With single Aged Brie
    -- With single Sulfuras, Hand of Ragnaros
    -- With single Backstage passes to a TAFKAL80ETC concert

    Finished initial testing
    -- % Stms 100%
    -- % Branch 100%
    -- % Funcs 100%
    -- % Lines 100%
*/
describe(`Gilded Rose package`, () => {

    describe(`It works`, () => {
        let gildedRose: Store<Item>;

        beforeEach(() => {
            gildedRose = new Store();
        });

        it(`Should create an empty instance of GuildedRose`, () => {
            expect(gildedRose.items.length).to.equal(0);
        });
    });

    describe(`With single random item`, () => {
        let gildedRose: Store<Item>;

        beforeEach(() => {
            gildedRose = new Store([new Item('Random item 1', 10, 15)]);
        });

        it(`Should add Random item 1 to to the Store instance`, () => {
            expect(gildedRose.items[0].name).to.equal('Random item 1');
        });

        it(`Should reduce sellIn from 10 to 9 on updateQuality`, () => {
            gildedRose.updateQuality();
            expect(gildedRose.items[0].sellIn).to.equal(9);
        });

        it(`Should reduce quality from 15 to 14 on updateQuality`, () => {
            gildedRose.updateQuality();
            expect(gildedRose.items[0].quality).to.equal(14);
        });

        it(`When sellIn < 0 should reduce quality from 15 to 13 on updateQuality`, () => {
            gildedRose.items[0].sellIn = -1;
            gildedRose.updateQuality();
            expect(gildedRose.items[0].quality).to.equal(13);
        });

        it(`When sellIn < 0 and quality is 1 should reduce quality from 1 to 0 on updateQuality`, () => {
            gildedRose.items[0].sellIn = -1;
            gildedRose.items[0].quality = 1;
            gildedRose.updateQuality();
            expect(gildedRose.items[0].quality).to.equal(0);
        });

        it(`When quality is 0 should not reduce quality on updateQuality`, () => {
            gildedRose.items[0].quality = 0;
            gildedRose.updateQuality();
            expect(gildedRose.items[0].quality).to.equal(0);
        });

        /* I will be back here in the future */
    });

    describe(`With single ${Supply.AGED_BRIE}`, () => {
        let gildedRose: Store<Item>;

        beforeEach(() => {
            gildedRose = new Store([new Item(Supply.AGED_BRIE, 5, 10)]);
        });

        it(`Should increase quality from 10 to 11 on updateQuality`, () => {
            gildedRose.updateQuality();
            expect(gildedRose.items[0].quality).to.equal(11);
        });

        it(`When quality is 50 should not increase quality on updateQuality`, () => {
            gildedRose.items[0].quality = 50;
            gildedRose.updateQuality();
            expect(gildedRose.items[0].quality).to.equal(50);
        });

        it(`When sellIn < 0 should increase quality from 10 to 12 on updateQuality`, () => {
            gildedRose.items[0].sellIn = -1;
            gildedRose.updateQuality();
            expect(gildedRose.items[0].quality).to.equal(12);
        });

        it(`When sellIn < 0 should increase quality from 49 to 50 on updateQuality`, () => {
            gildedRose.items[0].sellIn = -1;
            gildedRose.items[0].quality = 49;
            const actualUpdatedItem = gildedRose.updateQuality()[0];
            expect(actualUpdatedItem.quality).to.equal(50);
        });
    });

    describe(`With single ${Supply.SULFURAS}`, () => {
        let gildedRose: Store<Item>;

        beforeEach(() => {
            gildedRose = new Store([new Item(Supply.SULFURAS, 20, 30)]);
        });

        it(`Should not alter quality on updateQuality`, () => {
            gildedRose.updateQuality();
            expect(gildedRose.items[0].quality).to.equal(30);
        });

        it(`Should not alter sellIn on updateQuality`, () => {
            gildedRose.updateQuality();
            expect(gildedRose.items[0].sellIn).to.equal(20);
        });

        it('When sellIn < 0 should not decrease quality on updateQuality', () => {
            gildedRose.items[0].sellIn = -1;
            gildedRose.updateQuality();
            expect(gildedRose.items[0].quality).to.equal(30);
        });
    });

    describe(`With single ${Supply.CONCERT_TICKET}`, () => {
        let gildedRose: Store<Item>;

        beforeEach(() => {
            gildedRose = new Store([new Item(Supply.CONCERT_TICKET, 15, 20)]);
        });

        it(`When sellIn > 11 should increase quality to 21 on updateQuality`, () => {
            gildedRose.items[0].sellIn = 12;
            gildedRose.updateQuality();
            expect(gildedRose.items[0].quality).to.equal(21);
        });

        it(`When sellIn < 6 should increase quality from 20 to 23 on updateQuality`, () => {
            gildedRose.items[0].sellIn = 5;
            gildedRose.updateQuality();
            expect(gildedRose.items[0].quality).to.equal(23);
        });

        it(`When sellIn < 6 and quality is 49 should increase quality to 50 on updateQuality`, () => {
            gildedRose.items[0].sellIn = 5;
            gildedRose.items[0].quality = 49;
            gildedRose.updateQuality();
            expect(gildedRose.items[0].quality).to.equal(50);
        });

        it(`When sellIn < 11 should increase quality from 20 to 22 on updateQuality`, () => {
            gildedRose.items[0].sellIn = 10;
            gildedRose.updateQuality();
            expect(gildedRose.items[0].quality).to.equal(22);
        });

        it(`When SellIn < 0 should decrease quality to 0 on updateQuality`, () => {
            gildedRose.items[0].sellIn = -1;
            gildedRose.updateQuality();
            expect(gildedRose.items[0].quality).to.equal(0);
        });
    });
});