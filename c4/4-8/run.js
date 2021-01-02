var os = require('os'); 

var num = process.argv[2]; 
var idleTime=10; 

function Sleep(time) 
{ 
	return new Promise((resolve, reject) => { 
		setTimeout(() => { resolve(); }, time); 
	}); 
} 
 (async()=>{ 
	while (true){ 
		var startTime = Date.now();
		while( Date.now()-startTime < idleTime){ 
		} 
		
		await Sleep(idleTime); 
	} 
})();