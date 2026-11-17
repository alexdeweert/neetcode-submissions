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
     * @return {TreeNode}
     * 
     * at each root node, swap the left and right children?
     */
    invertTree(root) {
        const aux = (cur) => {
            //leaf
            if(cur == null) return;

            //recursive
            //at each node (there may or may not be children)
            // swap the left and right values
            let tmp = cur.left;
            cur.left = cur.right;
            cur.right = tmp;
            aux(cur.left);
            console.log(cur.val)
            aux(cur.right);
        }

        aux(root);

        return root;
    }
}
