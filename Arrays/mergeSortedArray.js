// mergeSortedArrays([0,3,4,31], [4, 6, 30]);


// using built in methods

// O(n log n) time & O(n) space
// Time complexity of merging two array is O(a+b); where a, b are input array size
// Time complexity of sorting (in this case it use quicksort) so best case complexity O(n * log n)

function mergeSortedArrays(arr1, arr2){
    if(arr1.length===0){
        return arr2
    }
    if(arr2.length===0){
        return arr1
    }

    const arr3 = arr1.concat(arr2)
    return arr3.sort((arr1,arr2) => arr1-arr2)
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);





// Greedy Approach
//  O(n) time & O(n) space  where n is the length of the larger array amongst the 2 sorted arrays

function mergeSortedArrays2(arr1, arr2){
    const arr3 = []
    let arr1item = arr1[0]
    let arr2item = arr2[0]
    let i = 1
    let j = 1

    if(arr1.length===0){
        return arr2
    }
    if(arr2.length===0){
        return arr1
    }

    while(arr1item || arr2item) {
      // if array 2 item doesnt exist as index out of bounds happen as num of ele are diff in both arr

      // We have undefined at the end which will always happen since one of our arrays ran out of elements before we finished merging.

      if (!arr2item || arr1item < arr2item) {
        arr3.push(arr1item);
        arr1item = arr1[i];
        i++;
      } else {
        arr3.push(arr2item);
        arr1item = arr2[j];
        j++;
      }
    }
    return mergeSortedArrays2;
}

mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]);
