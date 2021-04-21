module.exports = class DoublyLinkedListNode {
  constructor(value, next = null, pevious = null) {
    this.value = value;
    this.next = next;
    this.previous = pevious;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
};
