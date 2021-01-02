// 声明一个链表的节点
// 在function前使用new来创建对象
// 也可以使用ES6中的class特性来定义链表节点

function Node(element) { 
    this.element = element; //当前节点的元素 
    this.next = null; //下一个节点链接 
}

function generate(arr){
    var root = new linkNode(arr[0]);
    var head = root;
    for(var i=1;i<arr.length;i++){
        root.next = new linkNode(arr[i]);
        root= root.next;
    }
    return head;
} 
// 调用
generate([1,2,3,4,5]);

// generate方法实现的链表实际上是一个嵌套的对象，但这并不妨碍它拥有链表的性质
// 返回
// {
//     "data": 1,
//     "next" :{
//         "data":2,
//         "next":{
//             "data":3,
//             "next":{
//                 //.......
//             }
//         }
//     }
// } 