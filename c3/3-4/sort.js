var arr = [1,4,2,3];
//sort方法接受一个函数作为参数，来决定升序还是降序排列。
arr.sort(function(a,b){return a-b});

function swap(arr,a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


function comparable(a,b){
    return a-b;
}
function mSort(arr ,comparable){
    var length = arr.length;
    for(var i = 0;i<length;i++){
        for(var j =i+1;j<length;j++){
            if(comparable(arr[i],arr[j])>0){
                swap(arr,i,j)
            }
        }
    }
    return arr;
}

// 使用
mSort([,4,2,1,3,5], comparable);
// 返回
//[1,2,3,4,5]