module.exports  = (directory,fileExtention, callbackFuction)=>{
	const fs = require('fs');
	const path = require('path');

	return fs.readdir(directory,function(err,data){
		if(err){
			return callbackFuction(err);
		}
		let list = data.filter(el=>path.extname(el) === `.${fileExtention}`)
			callbackFuction(null,list);
		
	});
}