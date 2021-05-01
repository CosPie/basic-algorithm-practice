import { log } from "./../../utils/index";
import { fromArrayToTree, TreeNode } from "../TreeNode";

/** 迭代法前序遍历Tree */
const preOrderTraverse = (root: TreeNode) => {
  const res = [];
  const stack = [];
  while (root || stack.length) {
    while (root) {
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }
    let node = stack.pop();
    root = node.right;
  }
  return res;
};
const root = fromArrayToTree([1, 2, 3, 4, 5]);

log(preOrderTraverse(root));
