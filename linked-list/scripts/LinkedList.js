import Node from './Node'

export default class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  push(data) {
    if(!this.head) {
      this.head = new Node(data)
    } else {
      let currNode = this.head

      while (currNode.next) {
        currNode = currNode.next
      }

      currNode.next = new Node(data)
    }

    this.length++
  }

  pop(data) {
    if(!this.head) {
      return null
    } else{
      this.length--
      let poppedData;

      if(this.length === 0){
        poppedData = this.head

        this.head = null

        return poppedData

      } else {
        let currNode = this.head

        while (currNode.next.next) {
          currNode = currNode.next
        }

        poppedData = currNode.next
        currNode.next = null

        return poppedData
      }
    }
  }

  delete(data) {

    if (this.head.data === data) {
      this.head = this.head.next
      this.length--
    } 

    let currNode = this.head
    let prevNode = null

    while (currNode) {
      if (currNode.data === data) {
        prevNode.next = currNode.next
        this.length--
        break;
      } else {
        prevNode = currNode
        currNode = currNode.next
      }
    }
  }
  
  include(data) {
    if(!this.head) {
      return false
    } else { 
      let currNode = this.head
      
      while (currNode.next) {

        if(currNode.data === data) {
          return true
        }

        currNode = currNode.next

      }
      return false
    }
  }

  toArray() {
    let arr = [];
    let currNode = this.head

    while (currNode) {
      arr.push(currNode.data)
      currNode = currNode.next
    }

    return arr
  }

  index(data) {
    let currNode = this.head
    let count = 0

    while ( currNode ) {
      if (currNode.data === data){
        return count
        break;
      } else if (!currNode.next && currNode.data !== data){
        return null
      } else {
        count++
        currNode = currNode.next
      }
    }
  }

  insert(index, data) {
    let count = 0
    let currNode = this.head
    let newNode = new Node(data)

    while ( count <= index ) {
      count ++;

      if (count === index ){
        newNode.next = currNode.next
        currNode.next = newNode 
        this.length++ 
      } 
      
      currNode = currNode.next
      }
    }

    insertAfter(find, data) {

    }

    distance(first, second) {

    }

}






















