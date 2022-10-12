class Node {
    constructor(data){
        this.data = data,
        this.left = null,
        this.right = null
    }
}

class Tree{
    constructor(array){
        this.array = array,
        this.root = buildTree(this.array, 0, this.array.length - 1)
    }

    insert(root = this.root, value){
        let node = new Node(value)
        if(root === null){
            return root = node; 
        }
        else if(root.data < value){
            root.right = this.insert(root.right, value)
        }
        else if(root.data > value){
            root.left = this.insert(root.left, value)
        }
        return root; 
    }

    delete(root = this.root, value){
        if(root === null) return root; 
        if(root.data < value) {
            root.right = this.delete(root.right, value)
        }
        else if(root.data > value){
            root.left = this.delete(root.left, value)
        }
        else{
            if(root.left === null) return root.right; 
            else if(root.right === null) return root.left; 

            root.data = this.minValue(root.right)
            root.right = this.delete(root.right, root.data)
        }
        return root; 
    }

    minValue(root= this.root){
        let min = root.data; 
        while(root.left !== null){
            min = root.left.data; 
            root = root.left;
        }
        return min; 
    }

    find(root = this.root, value){
        if(root === null) return false;
        if(root.data === value) return root; 
        if(root.data < value){
            return this.find(root.right, value)
        }
        else if(root.data > value){
            return this.find(root.left, value)
        } 
        else return false; 
    }

    levelOrder(root = this.root){
        if(root === null) return;
        else{
            let queue = [];
            queue.push(root)
            while(queue.length !== 0){
                let current = queue.shift()
                console.log(current)
                if(current.left !== null) queue.push(current.left)
                if(current.right !== null) queue.push(current.right)
            }
            return queue;
        }
    }
}

function buildTree(array, start, end){

    if(start > end) return null;
    let mid = parseInt((start + end)/2); 

    let root = new Node(array[mid]);

    root.left = buildTree(array, start, mid - 1);
    root.right = buildTree(array, mid + 1, end);

    return root;
}


const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const tree = new Tree(array)
//console.log(tree.find(tree.root, 16))
//tree.insert(tree.root, 10)
//tree.delete(tree.root, 9)
console.log(tree.levelOrder(tree.root))

prettyPrint(tree.root, prefix = '', isLeft = true)
