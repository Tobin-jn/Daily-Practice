import Node from './Node';
export default class Trie {
  constructor() {
    this.words = 0;
    this.root = new Node(); // root is set to a new node, created when trie is instantiated
  }
  insert(word) {
    let currNode = this.root; //this root is the current node
    let wordArray = [...word]; // makes an array, each letter is a string
    this.insertRecursive(wordArray, currNode); //recursive function
    this.totalWords++; //increase words count
  }
  insertRecursive(wordArray, currNode) {//pass in your array and the current node
    if (wordArray.length < 1) {//if length is 0, current node is the end
      currNode.end = true; 
      return;
    } 
    if (currNode.children[wordArray[0]]) {//if the current node child is the same as the first letter, ie we don't need the node
      currNode = currNode.children[wordArray.shift()]; //so then we shift- removes first element and returns it, off that letter from the array and set the currNode equal to that letter
    } else { //else would mean the letter does not exist
      let letter = wordArray[0] //declare and assign letter
      currNode.children[letter] = new Node(); //instantiate a new letter, currNode.children is that letter
      currNode = currNode.children[letter]; //set currNode to the letter
      wordArray.shift() //shift first letter off array
    }
    return this.insertRecursive(wordArray, currNode); //invoke function again with the updated array
  }
  count(){
    return this.words
  }
}