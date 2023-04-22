// TODO: write your code here
/* import sum from './basic';
console.log('worked');
console.log(sum([1, 2])); */

export default class ArrayBufferConverter {
  constructor(buffer) {
    this.buffer = buffer;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    let result = '';
    const bufferView = new Uint16Array(this.buffer);
    for (let i = 0; i < bufferView.length; i += 1) {
      result += String.fromCharCode(bufferView[i]);
    }
    return result;
  }
}
