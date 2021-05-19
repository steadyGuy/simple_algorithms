"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListNode_1 = require("./LinkedListNode");
class LinkedList {
    constructor() {
        this.head = null;
    }
    prepend(value) {
        const newNode = new LinkedListNode_1.default(value, this.head);
        this.head = newNode;
        return this;
    }
    append(value) {
        const newNode = new LinkedListNode_1.default(value);
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
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
            if (currentNode.value === value) {
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
    myTask2GetData() {
        if (!this.head)
            return [];
        let currentNode = this.head;
        let [len, maxLen] = [1, 1];
        while (currentNode) {
            if (currentNode.next && currentNode.value > currentNode.next.value) {
                len++;
            }
            else {
                if (len > maxLen)
                    maxLen = len;
                len = 1;
            }
            currentNode = currentNode.next;
        }
        currentNode = this.head;
        len = 1;
        let currentStart = this.head;
        const results = [];
        while (currentNode) {
            if (currentNode.next && currentNode.value > currentNode.next.value) {
                len++;
            }
            else {
                if (len === maxLen) {
                    results.push([currentStart, currentNode]);
                    currentStart = currentNode.next;
                    len = 1;
                }
                currentStart = currentNode.next;
            }
            currentNode = currentNode.next;
        }
        return (results).reduce((prev, current) => {
            const newArr = [];
            while (current[0].value !== current[1].value) {
                newArr.push(current[0].value);
                current[0] = current[0].next;
            }
            newArr.push(current[1].value);
            return [...prev, newArr];
        }, []);
    }
    delete(value) {
        if (!this.head)
            return null;
        let deletedNode = null;
        while (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }
        let currentNode = this.head;
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
        }
    }
}
exports.default = LinkedList;
//# sourceMappingURL=LinkedList.js.map