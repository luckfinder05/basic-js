const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.store.length
  },
  addLink(value) {
    const chain = `( ${String(value)} )`
    if (this.store === undefined) {
      this.store = [chain]
    }
    else {
      this.store.push(chain);
    }
    return this
  },
  removeLink(position) {
    if (position < 1 || position > this.store.length || Number.isNaN(position) || !Number.isInteger(position)) {
      this.store = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.store = this.store.reduce((acc, item, index) => {
      if (index !== position - 1) {
        acc.push(item);
      }
      return acc
    }, []);
    return this;
  },
  reverseChain() {
    this.store.reverse();
    return this
  },
  finishChain() {
    const result = this.store
    this.store = [];
    return result.join('~~')
  }
};

module.exports = {
  chainMaker
};
