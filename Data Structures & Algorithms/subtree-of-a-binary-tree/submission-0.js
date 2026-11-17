class Solution {
    sameTree = (s, t) => {
        if(!s && !t) return true

        if(s && t && s.val == t.val) {
            return this.sameTree(s.left, t.left) && this.sameTree(s.right, t.right)
        }
        return false
    }
    
    isSubtree(root, subRoot) {

        if(!subRoot) return true
        if(!root) return false

        if(this.sameTree(root, subRoot)) return true

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)

        
    }
}
