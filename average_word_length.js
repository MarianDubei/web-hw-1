function avgWordLengthCalc(s){
	split_s = s.split(" ");
	sum = 0;
	for (var i = 0; i < split_s.length; i++){
    	sum += split_s[i].replace(/\W/g, '').length;
  	}
    
	return sum/split_s.length;
}