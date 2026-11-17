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
     * 
     * Do a DFS and track the max depth?
     * Could be an aux function with depth param
     */
    maxDepth(root) {
        if(root == null) return 0;
        let max = 0;
        const aux = (cur, depth) => {
            if(cur == null) return;

            max = Math.max(max, depth);
            aux(cur.left, depth + 1);
            aux(cur.right, depth + 1);
        }

        aux(root, 0)

        return max + 1;
    }
}
