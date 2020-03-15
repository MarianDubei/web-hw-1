function maxTotal(arr){
	arr.sort(function(a, b){return b - a});
	sum = 0;
	for (var i = 0; i < 5; i++){
    	sum += arr[i];
  	}
  	return sum;
}