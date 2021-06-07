// [1, 2, 3, 9] sum = 8
// [1,2,4,4] sum = 8

// naive O(n^2) time
array = [1, 2, 3, 4];
sum = 8;
function twoPair(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}
twoPair(array, sum);


// Better Approach O(nlogn)
array = [1,2,3,4,5];
num = 9
function hasTwoPair(arr, sum){
	const mySet = new Set()
	len = arr.length
	for(let i=0;i<len;i++){
		if(mySet.has(arr[i])){
			return true
		}
		mySet.add(sum - arr[i]);
	}
	return false
}
hasTwoPair(array, num);