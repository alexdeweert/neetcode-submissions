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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const aux = (foo, bar) => {
            //base case is they're both null
            if(!foo && !bar) return true
            
            //else gotta check the current node values for both
            if(foo && bar && foo.val == bar.val) {
                return aux(foo.left, bar.left) && aux(foo.right, bar.right)
            }
            else return false
        }
        return aux(p, q)
    }
}
