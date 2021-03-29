class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(index, element) {
    if (arguments.length == 1) {
      // 说明是向尾部添加
      element = index;
      index = this.size;
    }
    if ((index === 0)) {
      let node = new Node(element, this.head);
      this.head = node;
    } else {
      let prevNode = this.getNode(index - 1);
      let node = new Node(element, prevNode.next);
      prevNode.next = node;
    }
    this.size++;
  }
  getNode(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  remove(index) {
    if (index > this.size) return;
    let oldNode;
    if ((index === 0)) {
      // 说明是删除的头部节点
      let oldNode = this.head;
      this.head = oldNode && oldNode.next;
    } else {
      let prevNode = this.getNode(index - 1);
      oldNode = prevNode.next;
      prevNode.next = oldNode.next;
    }
    this.size--;
    return oldNode.element;
  }
  reverseLinkedList() {
    // 反转链表
    let head = this.head;
    if (head == null || head.next == null) return head;
    let newHead = null;
    while (head !== null) {
        let temp = head.next
        head.next = newHead
        newHead = head
        head = temp
    }
    this.head = newHead
    return this.head
  }
  reverseLinkedList2() {
      function reverse(head) {
            if (head === null || head.next === null) return head  
            let newHead = reverse(head.next)
            head.next.next = head
            head.next = null
            return newHead
      }
      this.head = reverse(this.head)
      return this.head
  }
}
let ll = new LinkedList();
ll.add(0, 100);
ll.add(0, 200);
ll.add(300);
