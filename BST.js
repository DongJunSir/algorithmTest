class Node {
    constructor(element, parent) {
        this.element = element;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    add(element) {
        // 开始创建树的结构
        if (this.root === null) {
            // 创建根节点
            this.root = new Node(element, null)
            this.size++
        } else {
            // 计算根节点和当前添加节点的差值
            let parentNode = this.root
            let currentNode = this.root;
            let compare;
            while (currentNode !== null) {
                parentNode = currentNode
                compare = element - currentNode.element
                if (compare < 0) {
                    currentNode = currentNode.left
                } else {
                    currentNode = currentNode.right
                }
            }
            if (compare < 0) {
                // 如果小于0，就添加到左子树
                let node = new Node(element, parentNode)
                parentNode.left = node
            } else {
                // 如果大于0，就添加到右子树
                let node = new Node(element, parentNode)
                parentNode.right = node
            }
            this.size++
        }
    }
    // 前序遍历
    preorderTraversal() {
        const traversal = (node) => {
            if (node == null) return;
            console.log(node.element)
            traversal(node.left)
            traversal(node.right)
        }
        traversal(this.root)
    }
    // 中序遍历
    inorderTraversal() {
        const traversal = (node) => {
            if (node == null) return;
            traversal(node.left)
            console.log(node.element)
            traversal(node.right)
        }
        traversal(this.root)
    }
    // 后续遍历
    postorderTraversal() {
        const traversal = (node) => {
            if (node == null) return;
            traversal(node.left)
            traversal(node.right)
            console.log(node.element)
        }
        traversal(this.root)
    }
    levelOrderTraversal() {
        if (this.root == null) return;
        // 层序遍历 对应每一层都按顺序遍历一遍出来
        let stack = [this.root]
        let index = 0
        while (stack[index]) {
            if (stack[index].left) {
                stack.push(stack[index].left)
            }
            if (stack[index].right) {
                stack.push(stack[index].right)
            }
            index++
        }
    }
    inverse() {
        if (this.root === null) return;
        let stack = [this.root]
        let index = 0
        let currentNode
        while (currentNode = stack[index++]) {

            let temp = currentNode.left
            currentNode.left = currentNode.right
            currentNode.right = temp

            if (currentNode.left) {
                stack.push(currentNode.left)
            }
            if (currentNode.right) {
                stack.push(currentNode.right)
            }
        }
    }
    inverse2() {
        const inverseFunc = (node) => {
            if (node === null) return;
            if (node.left) inverseFunc(node.left)
            if (node.right) inverseFunc(node.right)
            let left  = node.left
            let right = node.right
            node.left = right
            node.right = left
        }
        inverseFunc(this.root)
    }
}

let bst = new BST()
let arr = [10, 8, 6, 19, 15, 22, 20]
arr.forEach(item => {
    bst.add(item)
})
bst.inverse2()
console.log(bst.root)