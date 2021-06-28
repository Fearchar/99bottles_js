import { downTo, capitalize } from './helpers';

export class Bottles {
  constructor() {
    this.verseNumber = 99;
  }

  fooNoMore(number, foo) {
    return number === 0 ? 'no more' : foo || number;
  }

  currentBottles() {
    return this.verseNumber;
  }

  currentBottles1() {
    return capitalize(this.fooNoMore(this.currentBottles()));
  }

  currentBottles2() {
    return this.fooNoMore(this.currentBottles());
  }

  nextBottleNumber() {
    return this.verseNumber === 1 ? 'no more' : this.currentBottles() - 1;
  }

  bottleText(bottleNumber) {
    return bottleNumber !== 1 ? 'bottles' : 'bottle';
  }

  takeDown() {
    return this.verseNumber === 1 ? 'it' : 'one';
  }

  verse(verseNumber) {
    this.verseNumber = verseNumber;
    const currentBottles = this.currentBottles();
    const nextBottleNumber = this.nextBottleNumber();
    const takeDown = this.takeDown();

    return (
      `${this.currentBottles1()} ${this.bottleText(
        currentBottles
      )} of beer on the wall, ` +
      `${this.currentBottles2()} ${this.bottleText(
        currentBottles
      )} of beer.\n` +
      `Take ${takeDown} down and pass it around, ` +
      `${nextBottleNumber} ${this.bottleText(
        nextBottleNumber
      )} of beer on the wall.\n`
    );
  }
}
