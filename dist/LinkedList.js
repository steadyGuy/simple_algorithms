"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListNode_1 = require("./LinkedListNode");
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    prepend(value) {
        const newNode = new LinkedListNode_1.default(value, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    }
    append(value) {
        const newNode = new LinkedListNode_1.default(value);
        if (!this.head || !this.tail) {
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
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        while (currentNode) {
            if (value !== undefined && currentNode.value === value) {
                if (currentNode.next && currentNode.next.next) {
                    let tmp = currentNode.next.next.next;
                    [currentNode.next, currentNode.next.next] = [currentNode.next.next, currentNode.next];
                    currentNode.next.next.next = tmp;
                }
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}
exports.default = LinkedList;
//# sourceMappingURL=LinkedList.js.map