function myPromise(handle){
	this.status = "pending";
	this.resolvedData;
	this.rejectederr;
	
	this.resolvedCallback;
	
    this.then = function(callback){
        return new myPromise((resolveNext,rejectNext) =>{
            function fulfill(data){
                var value =callback(data); //callback方法返回了一个promise
                if(value instanceof myPromise){
                    value.then(resolveNext);
                }else{
                    resolveNext(value);
                }
            }
            
            if(this.status == "resolved"){
                fulfill(this.resolvedData);
            }else if(this.status == "pending"){
                this.resolvedCallback = fulfill;
            }
        });
    }
    
	var resolve = (data)=>{
		this.resolvedData = data;
		if(this.resolvedCallback){
			this.resolvedCallback(this.resolvedData);
		}
		this.status = "resolved";
	}
	
	var reject = (err)=>{
		this.rejectederr = err;
    }
    
	handle(resolve,reject);
}


new myPromise(function(resolve,reject){
	setTimeout(function(){
		resolve("1s passed");
	},1000);
})
.then(function(data){
	console.log(data);
	return new myPromise(function(resolve,reject){
		setTimeout(function(){
			resolve("10s passed");
		},10000);
	})

})
.then(function(data){
	console.log(data);
});
