function cross(_r)
{
}
function bar(_r)
{
	return 5;
}
function foo(_r)
{
	var b=_r('import bar');
	console.log(b);
}
var _req=function(_request)
{
	//write your code within this block
	var regex = /import\s([a-z]+:w)/g;
	var str = _request;
	var m=regex.exec(str);
	var n=eval(m[1]);
console.log(m);
	return n(_req);
//===============================================
}

foo(_req);

