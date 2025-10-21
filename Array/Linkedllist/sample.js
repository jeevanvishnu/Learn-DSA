class Node {
    constructor(data){
        this.head = data;
        this.next = null
    }
}

const first = new Node(10)
const secound = new Node(20)
const third = new Node(30)

first.next = secound
secound.next = third

let current = first

if(current !== null){
    console.log(current);
    current =  current.next
    
}