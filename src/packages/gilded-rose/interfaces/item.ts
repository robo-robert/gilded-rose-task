/*
    Interface for item class

    I know that I should alter Item class
    and practically I would alter it because
    I will not change property names and add extra
    methods to it.
*/
export interface IItem {
  name: string;
  sellIn: number;
  quality: number;
}
