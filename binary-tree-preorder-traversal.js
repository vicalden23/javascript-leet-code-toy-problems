/**
 * Given a binary tree, return the preorder traversal of its nodes' values.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let output = []
    let traverse = (node) => {
        if (!node) {
            return
        }
        output.push(node.val)
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return output
};
