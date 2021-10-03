function foo(x) {
	return new Promise( function(resolve, reject){
		if( x > 30) {
			resolve(x); // fulfilled
		} else {    
			reject('Promise is rejected!');  
		}
		
	})
}

foo(42) // Step 1
.then( // Step 2
	function(response1) { 
		foo.bar();  // undefined, error!
		return foo(50);
	}
)
.then( // Step 3
	function fullfilled(response2) { 
		console.log(response2);
	},
	function rejected(err) {
		console.log(err);
		return 42;
	}
)
.then( // Step 4
	function(msg){
		console.log(msg);
	}
);


// A thrown exception inside either the fullfillment or rejection handler of
// a then(..) call causes the next(chained) promise to be immediately rejected
// In the above example, the exception thrown in the step-2 rejects the step3
// promise immediately
