var SinglyLinkedList = require('./singly');

var sll = new SinglyLinkedList();
sll.insert(6, "head");
sll.insert(5, 6);
sll.insert(3, 5);
sll.insert(1, 3);
sll.insert(8, 1);
sll.insert(7, 8);
sll.insert(2, 7);
sll.insert(4, 2);

//6,5,3,1,8,7,2,4
// 1,8,7,2,4,6,5,3

function mergeSortLinkedList(sll) {

  if(!sll.head || !sll.head.next ){ return sll; }
  var min;
  var current = sll.head.next;
  var sorted = sll.head;

  while(current){
    min = current;

    while(current){
      if(current.element<min.element){
        min=current;
      }
      current = current.next;
    }

    var temp = sorted.next;
    var end = sll.findPrevious(min.element);
    sorted.next = min;
    if(sorted!=end){
      end.next = null;
      sll = mergeLinkedLists(sll, temp);
    }

    current = min.next;
    sorted = min;
  }

  return sll;
}

function mergeLinkedLists(left, right) {
  var current = left.head.next;

  while(current.next){
    current= current.next;
  }

  current.next = right;

  return left;
}

var answer = mergeSortLinkedList(sll);
answer.display();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
