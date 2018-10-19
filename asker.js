//ХЗ
var nodePath = process.argv[0];
var appPath = process.argv[1];
//имя файла
var name = process.argv[2];
//тип преобразования
var type = process.argv[3];

console.log(process.argv);

var fs = require('fs');
var regular=null;
if (type=='elevator'){
	regular=require('./regular');
	console.log('преобразование элеватор');
}
if(type=='floor'){
	regular=require('./regularFloor');
	console.log('преобразование этаж холодильника');
}
if(type=='compressor'){
	regular=require('./regularCompressor');
	console.log('преобразование компрессорная');
}

var expressions=regular.regular;

fs.readFile(''+name+'.svg', 'utf8', function(error, data){	
  	for(let i in expressions){ 
  		console.log(i);	
        data = data.replace(expressions[i].re, expressions[i].change);
    }
    fs.writeFileSync(name+'_konv.svg', data);
});
