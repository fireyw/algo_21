//https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    var init = new ListNode(0);
    init.next= head;
    var p1 = init;
    var p2 = init;
    for (let i = 0; i < n+1; i++) {
        p1 = p1.next;
    }
    while(p1!=null){
        p1=p1.next;
        p2=p2.next
    }
    p2.next=p2.next.next;
    return init.next;
};
var n1 = {
    val: 1
}
var n2 = {
    val: 2
}
var n3 = {
    val: 3
}
var n4 = {
    val: 4
}
var n5 = {
    val: 5
}
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

console.log(removeNthFromEnd(n1, 3));

// Input: head = [1, 2, 3, 4, 5], n = 2
// Output: [1, 2, 3, 5]
