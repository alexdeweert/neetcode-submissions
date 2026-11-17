/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {

        /**
         * Coould treat this as graph problem.
         * Have fast and slow pointer. While slow and fast, do slow.next, fast.next.next
         * 
         * If fast is never null then we know there can't be a cycle.
         * 
         * if slow ever equals fast we know there was a cycle.
         */

        let slow = head;
        let fast = head.next;

        while(fast) {
            if(slow == fast) return true;

            if(slow.next) slow = slow.next;
            if(fast.next) fast = fast.next;
            else fast = null;
            if(fast && fast.next) fast = fast.next;
            else fast = null;
        }

        return false;
    }
}
