export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  toString() {
    return this.val;
  }
}

/** 给定一个数字数组，转为一棵树 */
export const fromArrayToTree = (nums: number[]) => {
  let index = 0;
  let len = nums.length;
  let treeNodeArr: TreeNode[] = [];
  while (index < len) {
    treeNodeArr.push(new TreeNode(nums[index], null, null));
    index++;
  }

  index = 0;

  while (index <= Math.ceil(len / 2) - 1) {
    if (2 * index + 1 < len) {
      treeNodeArr[index].left = treeNodeArr[2 * index + 1];
    }
    if (2 * index + 2 < len) {
      treeNodeArr[index].right = treeNodeArr[2 * index + 2];
    }
    index++;
  }
  return treeNodeArr[0];
};
