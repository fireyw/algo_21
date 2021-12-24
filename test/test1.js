/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    var init = new ListNode(0)
    var cur = init;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = list1;
            list1 = list1.next;
        } else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur=cur.next
    }
    cur.next=list1||list2

    return init.next;
};


var n1 = {
    val: 1,
}
var n2 = {
    val: 2,
}
var n3 = {
    val: 4,
}
n1.next = n2;
n2.next = n3;

var s1 = {
    val: 1,
}
var s2 = {
    val: 3,
}
var s3 = {
    val: 4,
}
s1.next = s2;
s2.next = s3;

console.log('n1 :', n1);
console.log('s1 :', s1);
