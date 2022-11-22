function callName(name, key, value) {
    var spawn = require("child_process").spawn;
 
    var process = spawn('python',["./server.py",
                            name,
                            key,
							value] );
  
	console.log('jes');

}


callName('Sweet E', 'T_C_S_1', 3);