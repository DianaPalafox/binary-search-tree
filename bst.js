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
        this.root = buildTree(array, 0, array.length-1)
    }
}

function buildTree(array, start, end){

    if(start > end) return null;
    let mid = (start + end)/2; 

    let root = new Node(array[mid]);

    root.left = buildTree(array, start, mid-1);
    root.right = buildTree(array, mid+1, end);

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

const array = [1, 2, 3 , 4, 5, 6, 7, 8, 9]
const tree = new Tree(array)

prettyPrint(tree.root, prefix = '', isLeft = true)
