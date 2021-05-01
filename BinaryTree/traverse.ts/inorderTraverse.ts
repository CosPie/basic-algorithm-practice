import { log } from "../../utils";
import { fromArrayToTree, TreeNode } from "./../TreeNode";

const inorderTraverse = (root: TreeNode) => {
  const res = [];
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const node = stack.pop();
    res.push(node.val);
    root = node.right;
  }
  return res;
};

log(inorderTraverse(fromArrayToTree([1, 2, 3, 4, 5])));
