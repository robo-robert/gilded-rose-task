import { IItem } from '../interfaces';

/*
    Once again I did not alter implementation of Item class
*/
export abstract class AbstractItem implements IItem {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
