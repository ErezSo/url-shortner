const alphanumric =
  "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
const base = alphanumric.length;

function encode(num) {
  let encoded = "";
  while (num) {
    let remainder = num % base;
    num = Math.floor(num / base);
    encoded = alphanumric[remainder].toString() + encoded;
  }
  return encoded;
}

function decode(str) {
  let decoded = 0;
  while (str) {
    let index = alphanumric.indexOf(str[0]);
    let power = str.length - 1;
    decoded += index * Math.pow(base, power);
    str = str.substring(1);
  }
  return decoded;
}

module.exports.encode = encode;
module.exports.decode = decode;
