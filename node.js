class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const one = new Node(5);
const two = new Node(3);
const three = new Node(7);
const four = new Node(42);

one.next = two;
two.next = three;
three.next = four;

/**
 * printList
 * 
 * @param {Node} head The head node of the list
 * @returns {string} The result string
 */
function printList(head) {
  let aux = head;
  let str = '';

  str = aux.value + ' -> ';

  while (aux.next !== null) {
    aux = aux.next;
    str = str + aux.value + ' -> ';
  }
  return str;
}

/**
 * addAfter
 * 
 * @param {Node} head 
 * @param {number} target 
 * @param {number} value 
 */
function addAfter(head, target, value) {
  let aux = head;
  while (aux.next) {
    if (aux.value === target) {
      const newNode = new Node(value);

      newNode.next = aux.next;
      aux.next = newNode;
    }
    aux = aux.next;
  }
}

// 5 -> 3 -> 7 -> 42
console.log(printList(one));

addAfter(one, 7, 13);
// 5 -> 3 -> 7 -> 13 -> 42
console.log(printList(one));
///Tarea
// Función Agregar antes de ""
function addBefore(head, target, value) {
    let prev = null;
    let current = head;
  
    while (current) {
      if (current.value === target) {
        const newNode = new Node(value);
        if (prev === null) {
          newNode.next = head;
          return newNode;
        } else {
          newNode.next = current;
          prev.next = newNode;
          return head;
        }
      }
      prev = current;
      current = current.next;
    }
  }
  addBefore(one, 7, 11)
  console.log(printList(one))

  // Función eliminar antes de ""
function deleteBefore(head, target) {
    let prev = null;
    let current = head;
    
    while (current) {
      if (current.value === target && prev !== null && prev !== undefined) {
        prev.next = current.next;
        return head;
      }
      prev = current;
      current = current.next;
    }
  
    return head;
  }
  deleteBefore(one, 3)
  console.log(printList(one))

// Función eliminar después de ""
  function deleteAfter(head, target) {
    let current = head;
  
    while (current) {
      if (current.value === target && current.next !== null) {
        current.next = current.next.next;
        return head;
      }
      current = current.next;
    }
  
    return head;
  }
  deleteAfter(one,13)
  console.log(printList(one))