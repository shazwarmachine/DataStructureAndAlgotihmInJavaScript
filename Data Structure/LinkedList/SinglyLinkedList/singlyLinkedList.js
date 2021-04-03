

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next
    }
}


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    
   //Insert Head Node
   insertFirst(data){
       this.head = new Node(data, this.head)
       this.size++;
   }
   // Insert At End
   insertAtEnd(data){
       let currentNode ;
       let newNode = new Node(data);
       console.log(newNode);
       if(!this.head){
           this.head = node;
       }
       else{
            currentNode =  this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
       }
       
       this.size++;
   }
   
   //insert at index
   insertAt(data, index){
       if(index > 0 && index > this.size){
           return;
       }
       if(index === 0){
           this.insertFirst(data);
           this.size++;
           return;
       }

       const node  = new Node(data);
       let current, previous;
       current = this.head;
       let count = 0;
       while(count < index){
           previous = current;
           current =  current.next; 
           count++;
       }

       previous.next = node;
       node.next = current;

       this.size++;
   }

   //Get at Index
   getIndex(index){
    let current = this.head;
    let count = 0;
     while(current){
         if(count===index){
             console.log('Index at '+ index + ' = ' + current.data);
         }
         count++;
         current = current.next;
     }
      
     return null
}
   // Remove at Index
    removeAt(index){
        if(index >0 && (index > this.size || index == this.size)){
            return;
        }

        if(index === 0){
            this.head = this.head.next;
            this.size--;
            return ;
        }

        let current = this.head , previous, count = 0;
        while(count<index){
            previous = current;
            current = current.next;
            count ++;
        }
        previous.next  = current.next;
        this.size--;
        return;
    }
   // Clear List

   // Print List Data
   printListData(){
       let currNode = this.head;
       while(currNode){
           console.log(currNode.data );
           currNode = currNode.next;
       }
   }
}

let ll = new SinglyLinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);

// ll.printListData();

ll.insertAtEnd(400);
ll.insertAtEnd(500);

// ll.printListData();

ll.insertAtEnd(7700);
ll.insertAt(8800, 3);
// ll.insertAt(3300, 7);
console.log(ll.size);
ll.printListData();
ll.getIndex(6);
ll.removeAt(6);
ll.printListData();


