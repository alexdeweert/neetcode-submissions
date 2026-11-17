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
     * @return {boolean}
     */
    isBalanced(root) {
        const dfs = (cur) => {
            //base case - node is a leaf (its null)
            if(!cur) return [true, 0]

            //recursive case - its an actual node

            const left = dfs(cur.left)
            const right = dfs(cur.right)

            const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1

            return [balanced, 1 + Math.max(left[1], right[1])]
        }

        return dfs(root)[0]
    }
}
