"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DoublyLinkedListNode {
    constructor(value, next = null, pevious = null) {
        this.value = value;
        this.next = next;
        this.previous = pevious;
    }
    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}
exports.default = DoublyLinkedListNode;
//# sourceMappingURL=DoublyLinkedListNode.js.map