function compose(fn){
	return function(){
        var args = Array.prototype.slice.call(arguments,0);
		fn.apply(this,args);
	}
}

var myLog = compose(console.log);

myLog(1,2,3)

// function test(name){
//     console.log(name);
// }

// test.call(this,"ass")



if(request.method == "POST"){
	var body = '';
	request.on('data',(chunk)=>{
		body+=chunk;
	});
	request.on('end',()=>{
		console.log(body.toString()); 
	});
}
