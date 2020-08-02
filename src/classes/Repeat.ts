export class Repeat {
  constructor(public str: string | number, public num: number) {}
  get repeatStringNumTimes(): string[] | number[] {
    let result: string[] | number[];
    if (Math.sign(this.num) !== -1) {
      result = Array(this.num).fill(this.str);
      result.join('');
      return result;
    } else {
      return (result = ['Please use a positive number']);
    }
  }
}
