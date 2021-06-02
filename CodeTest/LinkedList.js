class Node {
    constructor(element, next) {
        this.element = element
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    add(index, element) {
        if (arguments.length == 1) {
            element = index;
            index = this.size
        }
        if (index === 0) {
            let node = new Node(element, this.head)
            this.head = node
        } else {
            let prevNode = this.getNode(IDBIndex - 1)
            let node = new Node(index, prevNode.next)
            prevNode.next = node
        }
        this.size++
    }
    getNode(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }
    remove() {

    }
}

let ll = new LinkedList()
ll.add(0, 100)
ll.add(0, 200)
ll.add(300)
console.log(ll)