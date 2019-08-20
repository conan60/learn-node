const list = require('./module.js');

const callback = (err,arr)=>{
	const path = require('path');
	if(err){
		console.log(err);
		return;
	}

	arr.map(el=>{
			console.log(el)
	});

};

let dir = process.argv[2];
let ext = process.argv[3];

list(dir,ext,callback);
