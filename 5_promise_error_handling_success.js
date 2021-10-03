function foo(x) {
	return new Promise( function(resolve, reject){
		if( x > 30) {
			resolve(x); // fulfilled
		} else {    
			reject('Promise is rejected!');  
		}
		
	})
}

var p = Promise.reject("Oops").defer();

foo(42)
.then(
	function fullfilled() { 
		return p ;
	},
	function rejected(err) {
		// never gets here
		console.log('Inside rejected');
	}
);
