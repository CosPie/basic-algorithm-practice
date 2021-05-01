import { log } from "./../../utils/index";
import { getLinkedList, LinkNode } from "../LinkNode";

const reverseLinkList = (head: LinkNode) => {
  // base cond
  if (head === null || head.next === null) return head;

  const last = reverseLinkList(head.next);

  head.next.next = head;
  head.next = null;
  return last;
};

const linkedList = getLinkedList(4);
log(linkedList);
const rev = reverseLinkList(linkedList);
log(rev);



const reverseLinkListWithWhile = (head: LinkNode) => {
  if (!head || !head.next) return head;

  let prev = null
  let curr = head
  
  while (curr) {
    let next = curr.next
    curr.next = prev

    prev = curr
    curr = next
  }
  
  return head;
}
