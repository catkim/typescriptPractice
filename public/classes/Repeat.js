export class Repeat {
    constructor(str, num) {
        this.str = str;
        this.num = num;
    }
    get repeatStringNumTimes() {
        let result;
        if (Math.sign(this.num) !== -1) {
            result = Array(this.num).fill(this.str);
            result.join('');
            return result;
        }
        else {
            return (result = ['Please use a positive number']);
        }
    }
}
