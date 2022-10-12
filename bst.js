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

    levelOrder(){
        if(this.root === null) return;
        else{
            let queue = [];
            queue.push(this.root)
            while(queue.length !== 0){
                let current = queue.shift()
                console.log(current)
                if(current.left !== null) queue.push(current.left)
                if(current.right !== null) queue.push(current.right)
            }
            return queue;
        }
    }

    preorder(root){
        if(root === null) return;
        console.log(root.data); 
        this.preorder(root.left);
        this.preorder(root.right); 
    }

    inorder(root = this.root){
        if(root === null) return;
        this.inorder(root.left);
        console.log(root.data); 
        this.inorder(root.right);
    }

    postorder(root = this.root){
        if(root === null) return;
        this.postorder(root.left);
        this.postorder(root.right);
        console.log(root.data);

    }

    heigth(root = this.root, value){
        if(this.root == null) return -1;
        else{
            let left = this.heigth(root.left, value)
            let right = this.heigth(root.right, value)

            let current = Math.max(left, right) + 1;

            if(root.data == value) return current; 
        }
    }

    heigthTree(root = this.root){
        if(root = null) return -1;
        else{
            let left = this.heigth(root.left)
            let right = this.heigth(root.right)

            return Math.max(left, right) + 1;
        }
    }

    depth(root = this.root, node){
        if(root === null) return -1;
        else{
            let dist = -1;
            if((root.data === node) || 
            (dist = this.depth(root.left, value)) >= 0 ||
            (dist = this.depth(root.right, value)) >= 0 ) {
                return dist + 1;
            }
            return dist;   
        }
    }

    isBalanced(root = this.root){
        if(root === null) return false;

        let left = root.left;
        let right = root.right;

        if(Math.abs(this.heigthTree(left) - this.heigthTree(right)) > 1){
            return false;
        }
        else return true;
    }

    traverse(root= this.root, array) {
        if (array !== undefined) array.push(root.data);
        if (root.left !== null) {
          this.traverse(root.left, array);
        }
    
        if (root.right !== null) {
          this.traverse(root.right, array);
        }
        return array;
      }
    
    rebalance() {
        if (this.isBalanced(this.root)) return this.root;
    
        let rebalancedTree = [];
        rebalancedTree = this.traverse(this.root, rebalancedTree);
    
        let balancedTree = new Tree(rebalancedTree);
    
        return balancedTree.root;
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



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const tree = new Tree(array)
//console.log(tree.find(tree.root, 16))
//tree.insert(tree.root, 10)
//tree.delete(tree.root, 9)
//console.log(tree.levelOrder(tree.root))
console.log(tree.preorder(tree.root))


