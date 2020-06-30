var obj ={}
var arr = [
	{name:"Lear"},
	{name:"Lily"}
];

for(var i = 0;i<arr.length;i++){
	var item = arr[i];
	obj[item.name] = function(){
		console.log(item.name);
	}
}

obj["Lear"](); // lily

obj["Lily"](); // lily
