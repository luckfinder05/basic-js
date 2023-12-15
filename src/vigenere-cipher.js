const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect) {
    reverse: isDirect === false ? true : false;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    let upStr = message.toUpperCase();
    const upKey = key.toUpperCase();
    let result = '';
    let j = 0;
    for (let i = 0; i < upStr.length; i += 1) {
      if (/[A-Z]/.test(upStr[i])) {
        const code = (upStr.charCodeAt(i) + upKey.charCodeAt(j % upKey.length) - 65 * 2) % 26 + 65;
        result += String.fromCharCode(code);
        j++;
      } else {
        result += upStr.charAt(i);
      }

    }
    return this.reverse ? result.split('').reverse().join('') : result;
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');
    let upStr = encryptedMessage.toUpperCase();
    const upKey = key.toUpperCase();
    let result = '';
    let j = 0;
    for (let i = 0; i < upStr.length; i += 1) {
      if (/[A-Z]/.test(upStr[i])) {
        const code = Math.abs(upKey.charCodeAt(j % upKey.length) - upStr.charCodeAt(i) - 65 * 2) % 26 + 65;
        result += String.fromCharCode(code);
        j++;
      } else {
        result += upStr.charAt(i);
      }

    }
    return this.reverse ? result.split('').reverse().join('') : result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
