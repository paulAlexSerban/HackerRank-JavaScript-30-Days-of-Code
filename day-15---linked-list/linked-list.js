class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Solution {
  constructor(head, data) {
    this.head = head;
    this.data = data;
  }

  insert(head, data) {
    this.newNode = new Node(data);
    this.curNode = head;

    if (this.curNode != null) {
      while (this.curNode.next != null) {
        this.curNode = this.curNode.next;
      }
      this.curNode.next = newNode;
    } else {
      head = newNode;
    }
    return head;
  };

  display(head) {
    this.start = head;
    while (start) {
      process.stdout.write(start.data + " ");
      start = start.next;
    }
  };
}

function main() {
  let head = null;
  let mylist = new Solution();
  for (let i = 0; i < T; i++) {
    let data = parseInt(readLine());
    head = mylist.insert(head, data);
  }
  mylist.display(head);
}