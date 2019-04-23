function Node(value) {
    this.val = value
    this.left = null
    this.right = null
    this.add = function(newNode){
            if (newNode.val < this.val){
                if(this.left){
                    this.left.add(newNode)
                } else {
                    this.left = newNode
                }
                
            } else if (newNode.val >= this.val){
                if(this.right){
                    this.right.add(newNode)
                } else {
                    this.right = newNode
                }
                
            }
        } 
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    add(value) {
        const node = new Node(value)
        if(!this.root) {
            this.root = node
        } else {
            let curr = this.root
            while(curr) {
                if(node.val < curr.val) {
                    if(!curr.left) {
                        curr.left = node
                        break
                    }
                    curr = curr.left
                } else if (node.val >= curr.val) {
                    if(!curr.right) {
                        curr.right = node
                        break
                    }
                    curr = curr.right
                } else {
                    break
                }
            }
        }
    }

    rAdd(val){
        let newNode = new Node(val)
        if(this.root){
            rFindAndAdd(this.root)
            function rFindAndAdd(curr){
                if (newNode.val < curr.val){
                    if(curr.left){
                        return rFindAndAdd(curr.left)
                    } 
                    curr.left = newNode
                    
                } else if (newNode.val >= curr.val){
                    if(curr.right){
                        return rFindAndAdd(curr.right)
                    }
                    curr.right = newNode
                    
                }
            }

        } else {
            this.root = newNode
        }
    }

    selfAdd(val){
        let newNode = new Node(val)
        if(this.root){
            this.root.add(newNode)
        } else {
            this.root = newNode
        }
        return this
    }

    contains(val) {
        if(!this.root){
            return console.log('No root node found');
        }
        let curr = this.root
        while(curr){
            if(val===curr.val){
                return true
            }
            if(val<curr.val){
                curr = curr.left
            } else {
                curr = curr.right
            }
        }
        return false
    }
    min(node) {
        if(!node){
            node = this.root
        }
        while(node.left){
            node = node.left
        }
        return node.val
    }

    max(node) {
        if(!node){
            node = this.root
        }
        while(node.right){
            node = node.right
        }
        return node.val
    }

    printByLevel() {
        if(!this.root) {
            return console.log('No root node found');
        }
        const newline = new Node('\n')
        const queue = [this.root, newline]
        let string = ''
        while(queue.length) {
            const node = queue.shift()
            string += node.val.toString() + (node.val !== '\n' ? ' ' : '')
            if(node === newline && queue.length) {
                queue.push(newline)
            }
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        console.log(string.trim());
    }

    size(node){
        if(!node){
            node = this.root;
        }
        let counter = 1;
        rCount(node)
        function rCount(node){
            if(node.left){
                counter += 1
                rCount(node.left)
            }
            if(node.right){
                counter += 1
                rCount(node.right)
            }
            return counter
        }
        return counter
    }
}

const BST = new BinarySearchTree()
BST.add(5)
BST.add(3)
BST.add(7)
BST.add(2)
BST.add(4)
BST.add(4)
BST.add(6)
BST.add(8)
BST.rAdd(11)
BST.printByLevel()
console.log(BST.contains(10));
console.log(BST.contains(8));
// const myBST = new BinarySearchTree()
// console.log(myBST.contains(2));
console.log(BST.min());
console.log(BST.max());
console.log(BST.size());


