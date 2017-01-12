// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// WARNING: only works with one class in `className`. It does not support
// multiple class selectors seperated by spaces.
var getElementsByClassName = function(className) {
	var result = [];

	f([document.body]);
	function f(elements){
		var i, j;
		for(i = 0; i < elements.length; i++){
			if(elements[i].classList){
				for(j = 0; j < elements[i].classList.length; j++){
					if(className === elements[i].classList[j]){
						result.push(elements[i]);
					}
				}
			}

			f(elements[i].childNodes);
		}
	}

	return result;
};
