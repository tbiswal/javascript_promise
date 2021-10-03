function foo(x) {
	return new Promise( function(resolve, reject){
		if( x > 30) {
			resolve(x); // fulfilled
		} else {    
			reject('Promise is rejected!');  
		}
		
	})
}

foo(42)
.then(
	function fullfilled(msg) { 
		// numbers don't have string functions,
		// so will throw error
		console.log(msg.toLowerCase());
	},
	function rejected(err) {
		// never gets here
		console.log('Inside rejected');
	}
);
