function foo(x) {
	setTimeout(function() { 
		console.log('Doing something here which will take a while');
	}, 3000);

	return new Promise( function(resolve, reject){
		if( x > 30) {
			setTimeout(function(){
				console.log('Inside promise - True');
				resolve("Promise is resolved!"); // fulfilled
			}, 300);
		} else {    
			console.log('Inside promise - False');
			reject('Promise is rejected!');  
		}
		
	})
}

var p = foo(42);

function bar(fooPromise) {
	fooPromise.then(
		function() {
			let x = 10;
			let y = 20;
			console.log(`bar ${x + y}`);
		},
		function() {
			console.log('oops, something went wrong in foo(...)');
		}
	)
}

bar(p);


function baz(fooPromise) {
	fooPromise.then(
		function() {
			let x = 10;
			let y = 20;
			console.log(`baz ${x - y}`);
		},
		function() {
			console.log('oops, something went wrong in foo(...)');
		}
	)
}

baz(p);
