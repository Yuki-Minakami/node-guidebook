function swap(nums,i,j){
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

var perm = function(nums){
    var result = [];
    var perm = function(nums,start) {
        if(start == nums.length){
		  // 复制一个数组，避免弱引用
            result.push(JSON.parse(JSON.stringify(nums)));
        }
        for(var i = start;i < nums.length;i++){
            swap(nums,start,i);
            perm(nums,start+1);
            swap(nums,start,i);
        }
    };
    perm(nums,0);
    return result;
}