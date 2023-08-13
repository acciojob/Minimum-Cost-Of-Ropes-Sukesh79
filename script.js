function calculateMinCost() {
  //your code here

	let arr = [4,2,7,6,9];
	arr.sort();

	while(arr.size() > 1){
		let a = arr.shift();
		let b = arr.shift();
		let sum = a + b;
		let pivotIdx = findPivot(arr, sum);

		arr.splice(pivotIdx, 0, sum);
	}
	
  return arr[0];
  
}

function findPivot(arr, num){
	for(int i = 0; i < arr.length; i++){
		if(arr[i] > num) return i;
	}

	return arr.length;
}
