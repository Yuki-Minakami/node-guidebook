// 声明一个二叉树节点
// 包括值和左右子树

function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

function generateBST(arr){
    function gene(node, index){
        var left = 2*index+1;
        var right = 2*index+2;
        if(left<=arr.length && arr[left] != null){
            node.left = new TreeNode(arr[left]);
            gene(node.left,left)
        }
        if(right<=arr.length && arr[right] != null){
            node.right = new TreeNode(arr[right]);
            gene(node.right,right);
        }
    }
    var root = new TreeNode(arr[0]);
    gene(root,0)

    return root;
};


const root = generateBST([1,2,3,4,5])
//TreeNode {
//     val: 1,
//     right: TreeNode { val: 3, right: null, left: null },  
//     left: TreeNode {
//       val: 2,
//       right: TreeNode { val: 5, right: null, left: null },
//       left: TreeNode { val: 4, right: null, left: null }  
//     }
//   }