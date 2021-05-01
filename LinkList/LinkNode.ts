export class LinkNode {
  data: any;
  next: LinkNode;

  constructor(data) {
    this.data = data;
    this.next = null;
  }

  append(node) {
    this.next = node;
    return node;
  }
}

export const getLinkedList = (length: number) => {
  const head: LinkNode = new LinkNode(1);
  let last: LinkNode = head;
  for (let index = 2; index < length; index++) {
    last.next = new LinkNode(index);
    last = last.next;
  }

  return head;
};

export const defalutLinkedList = getLinkedList(5);
