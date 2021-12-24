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
 * @return {ListNode}
 */
var deleteDuplicatesUnsorted = function (head) {
    var current = head;

    var mapList = new Map();
    //seacrh dupl value
    while (current) {
        if (mapList.get(current.val) == undefined) {
            mapList.set(current.val, 1);
        } else {
            mapList.set(current.val, 2);
        }
        current = current.next;
    }

    var dummy = new ListNode(0, head);
    current=dummy;

    //remove dupl value
    while(current){
        while(current.next && mapList.get(current.next.val)>1){
            current.next=current.next.next
        }
        current=current.next;
    }

    return dummy.next
};

var n1 = {
    val: 1
}
var n2 = {
    val: 3
}
var n3 = {
    val: 2
}
var n4 = {
    val: 1
}
n1.next = n2;
n2.next = n3;
n3.next = n4;

console.log(deleteDuplicatesUnsorted(n1));
