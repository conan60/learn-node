const fs = require('fs');

fs.readFile(`${process.argv[2]}`,(err,data)=>{
	if(err){
		console.log(err);
	}
	
	let contentFile = data.toString();
	let returnNumber = contentFile.split('\n').length-1;

	console.log(returnNumber);
	return ;
})


