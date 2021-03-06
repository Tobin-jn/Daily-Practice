import Node from './Node'

class BinaryTree{
  constructor(){
    this.rootNode = null
  }

  insert(value) {
    if(!this.rootNode){
      this.rootNode = new Node(value)
    } else {
      this.addNode(value)
    }
  }

  addNode(value) {
    let currentNode = this.rootNode

    while (currentNode) {
      if (currentNode.value >= value){
        if(!currentNode.left){
          currentNode.left = new Node(value)
          currentNode = null;
          break;
        } else {
        currentNode = currentNode.left
        }
      } else {
          if(!currentNode.right){
            currentNode.right = new Node(value)
            currentNode = null;
            break;
          } else {
            currentNode = currentNode.right
          }
      }
    } 
  }
  
  min() {
    if(!this.rootNode){
      return null;
    }

    let currentNode = this.rootNode;
    let min = null;

    while(currentNode){
      if(currentNode.left){
        currentNode = currentNode.left
      } else {
        min = currentNode.value
        currentNode = null
      }
    }
    return min
  }

  max() {
    if(!this.rootNode){
      return null;
    }

    let currentNode = this.rootNode;
    let max = null;

    while(currentNode){
      if(currentNode.right){
        currentNode = currentNode.right
      } else {
        max = currentNode.value
        currentNode = null
      }
    }
    return max
  }
  

  find(value) {
    let currentNode = this.rootNode

    while (currentNode) {
      if(value === currentNode.value){
        return currentNode
      } else {
        if(value <= currentNode.value && currentNode.left){
          currentNode = currentNode.left
        } else if (value > currentNode.value && currentNode.right){
          currentNode = currentNode.right
        } else {
          return null
        }
      }
 
    }
  }
//From lesson
  delete(value) {
    let currentNode = this.rootNode;
    let nodeToDelete = this.find(value)
    let deletedNode = null;
    let deletedFound = false;

    if (!nodeToDelete) {
      deletedNode = undefined;
      deletedFound = true;
    } else if (currentNode.value === value) {
      deletedNode = currentNode;
      this.rootNode = null;
      deletedFound = true
    }

    while (!deletedFound) {

      if (currentNode.right && currentNode.value < value) {
        
        if (currentNode.right.value === value) {
          deletedNode = currentNode.right
          if (currentNode.right.right && !currentNode.left.left) {
            currentNode.right = currentNode.right.right;
          } else {
            currentNode.right = null;
          }
          deletedFound = true
        } else {
          currentNode = currentNode.right
        }
      } else if (currentNode.left && currentNode.value > value) {
        if(currentNode.left.value === value) {
          deletedNode = currentNode.left

          if (currentNode.left.left && !currentNode.right.right) {
            currentNode.left = currentNode.left.left;
          } else {
            currentNode.left = null;
          }
          deletedFound = true;
        } else {
          currentNode = currentNode.left
        }
      }
    }
    return deletedNode
  }
}

export default BinaryTree














































// import Node from './Node';

// export default class BinaryTree {
//   constructor() {
//     this.rootNode = null;
//   }





// insert(value) {
//     var newNode = new Node(value);
                     
//     if (!this.rootNode)
//         this.rootNode = newNode;
//     else 
//         this.insertNode(this.rootNode, newNode);
// }

// insertNode(node, newNode) {

//     if(newNode.value < node.value){
//         if(node.left === null)
//             node.left = newNode;
//         else {
//           this.insertNode(node.left, newNode);
//         } 
//     }
//     else
//     {
//         if(node.right === null)
//             node.right = newNode;
//         else
//             this.insertNode(node.right,newNode);
//     }
// }









// min() {
//   if (!this.rootNode){
//     return null
//   }

//   //begin at the root
//   //move down always to the left
//   //set the prevNode
//   //stop when the value is null
//   //return the previous node


// }

// max() {
//   if (!this.rootNode){
//     return null
//   }
// }

// find() {

// //if value doesn't exist return null
// //move to the root node and return the value
// //move to the root, move to the left and return
// //move all the way to the left and return
// //take value and compare to all the nodes, keep moving down until the value === current node
// //

//  }

// }






















