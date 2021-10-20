function *foo(x,y) {
	return x * y;
}

var it = foo( 6, 7 );

console.log(it);

var res = it.next();

console.log(res);

console.log(res.value); //42
