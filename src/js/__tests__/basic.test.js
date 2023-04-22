/* import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
}); */

import ArrayBufferConverter from '../app';

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

test('test ArrayBufferConverter', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buffer = getBuffer();
  const arrayBufferConverter = new ArrayBufferConverter(buffer);
  const result = arrayBufferConverter.toString();
  expect(result).toBe(data);
});
