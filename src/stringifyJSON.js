// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var result = "";
	var property;
	var item;
	var i;

	switch(typeof obj){
		case 'function':
			result = "";
		case 'string':
			result = '"' + obj + '"';
		break;
		case 'object':
			if(obj === null){
				result = 'null';
			} else if(obj.constructor === Array){
				result += '['
				for(i = 0; i < obj.length; i++){
					if(typeof obj[i] !== 'undefined' && typeof obj[i] !== 'function'){
						result += stringifyJSON(obj[i]) + ',';
					} else {
						//censor undefined and function values
						result += 'null,';
					}
				}
				//remove trailing commas
				if(result[result.length-1] === ","){
					result = result.slice(0,-1);
				}
				result += ']';
			} else {
				result += '{';
				for(property in obj){
					if(obj.hasOwnProperty(property) && typeof obj[property] !== 'undefined' && typeof obj[property] !== 'function'){
						//censor undefined and function values
						result += '"' + property + '":' + stringifyJSON(obj[property]) + ",";
					}
				}
				//remove trailing commas
				if(result[result.length-1] === ","){
					result = result.slice(0,-1);
				}
				result += "}";
			}
		break;
		default:
			//Boolean, Number, Undefined, NaN
			result = String(obj);
	}

	return result;
};
