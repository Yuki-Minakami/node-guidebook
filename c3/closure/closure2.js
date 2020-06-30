var obj ={}
var arr = [
	{name:"Lear"},
	{name:"Lily"}
];

for(var i = 0;i<arr.length;i++){
	var item = arr[i];
    obj[item.name] = log(item.name);
}

function log(name){
    return ()=>{
        console.log(name);
    }
}

obj["Lear"](); // Lear
obj["Lily"](); // lily
