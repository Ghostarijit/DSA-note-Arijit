
// 10->1->2->3->4
//       g = 2
//       1->newNode.next->g->3
class linkedList{

constructor(data){
    this.head={                            // this.head =1  // this.tail.next =2    // this.tail = newNode
        value: data,
        next:null
    }
    this.tail = this.head
    this.length =1
}
append(data){
const newNode = {
    value:data,
    next:null
}
this.tail.next= newNode
this.tail =newNode
this.length++
}

prepend(data){
    const newNode = {
        value:data,
        next:null
    }
    newNode.next= this.head
    this.head = newNode
}


traversing(req){
    let counter = 0
    let currentNode= this.head
    while(counter !=req){
        counter++
        currentNode = currentNode.next

    }
    return currentNode
}
    insert(index,data){
        const newNode = {
            value:data,
            next:null
        }
        const leaderNode = this.traversing(index-1)
        const nextNode = leaderNode.next
        leaderNode.next = newNode
        newNode.next = nextNode
    }  

    deleteNode(index){
      const leaderNode = this.traversing(index-1)
      const unwantedNode = leaderNode.next
     const NextNode = unwantedNode.next
     leaderNode.next = NextNode
     this.length--
    }
}

const myList = new linkedList(1)
myList.append(2)
myList.append(2)
//myList.prepend(10)
//myList.insert(1,4)
//myList.deleteNode(1)
console.log(myList)
