/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let max = 0;
        const aux = (cur) => {
            if(cur == null) return 0;

            let left = aux(cur.left)
            let right = aux(cur.right)

            max = Math.max(max, left + right)

            return 1 + Math.max(left, right)
        }

        aux(root)
        return max
    }
}
