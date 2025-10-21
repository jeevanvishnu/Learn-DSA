class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Linkedlist {
    constructor(){
        this.head = null
    }

    append(value){
        const newValu = new Node(value)
        if(!this.head){
            this.head = newValu
            return 
        }
        let current = this.head
    
        while(current.next){
            current = current.next
        }
        current.next = newValu
    }
    print(){
        let current = this.head
        let res = ''
        while(current){
            res += current.value + '->'
            current = current.next
        }
        res += 'null'
        console.log(res);
        
    }

}
const list = new Linkedlist()
list.append(10)
list.append(20)
list.append(30)
list.append(40)

list.print()