export default class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//Creating a Node class.
//We are going to have many nodes so it makes sense to have a node class here that we can instantiate repeatedly.
// The node has two parts- the data and the pointer. 
//We can accept a data parameter
// Pointer defaults to Null because if there are is only one node, it cant point to anything. Also any additional node that is added to the end as the tail will point to the end.