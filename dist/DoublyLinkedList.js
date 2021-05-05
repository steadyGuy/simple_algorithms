"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DoublyLinkedListNode_1 = require("./DoublyLinkedListNode");
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    prepend(value) {
        const newNode = new DoublyLinkedListNode_1.default(value, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    }
    append(value) {
        const newNode = new DoublyLinkedListNode_1.default(value, null, this.tail);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }
    toArray() {
        const nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }
    toString(callback) {
        return (this.toArray()
            .map((node) => node.toString(callback))
            .toString());
    }
    find(value) {
        if (!this.head)
            return null;
        let currentNode = this.head;
        while (currentNode) {
            if (value !== undefined && currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
    deleteTail() {
        const deletedTail = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return deletedTail;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        this.tail = currentNode;
        return deletedTail;
    }
}
;
exports.default = DoublyLinkedList;
//# sourceMappingURL=DoublyLinkedList.js.map