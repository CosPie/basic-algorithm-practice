import { defalutLinkedList } from "./../LinkNode";
import { log } from "../../utils";
import { LinkNode } from "../LinkNode";

let succesor = null;
/** 反转前N个 */
const reverseLinkedListN = (head: LinkNode, n: number) => {
  if (n === 1) {
    succesor = head.next;
    return head;
  }
  let last = reverseLinkedListN(head.next, n - 1);

  head.next.next = head;
  head.next = succesor;

  return last;
};

log(defalutLinkedList);

log(reverseLinkedListN(defalutLinkedList, 2));
