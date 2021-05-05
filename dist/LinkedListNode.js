"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
    ;
    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}
exports.default = LinkedListNode;
//# sourceMappingURL=LinkedListNode.js.map