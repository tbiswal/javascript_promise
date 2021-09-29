function add(xPromise, yPromise) {
	return Promise.all([xPromise, yPromise])
    .then(function (values) {
    	return values[0] + values[1];
    });
}

add(fetchX(), fetchY())
.then(
  function(sum) {
	console.log(sum);
  },

  function(err) {
	console.error(err)
  }
)

function fetchX() {
	return 20;
}

function fetchY() {
	return 30;
}
