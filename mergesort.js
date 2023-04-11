
// Given an unsorted array of numbers return the sorted array in ascending order
function mergeSortArray(arr){
  if(arr.length <= 1){
  return arr
  }
   
   const middle = Math.floor(arr.length / 2);
   const left = arr.slice(0,middle);
   const right = arr.slice(middle);
   
  return SortedArray(mergeSortArray(left),mergeSortArray(right))
}
function SortedArray(left,right){
  const results = [];
  while(left.length && right.length){
    if(left[0] < right[0]){
      results.push(left.shift())
    }else{
      results.push(right.shift())
    }
     return[...results, ...left, ...right]
  } 
 
}
let arr = [2,8,0,23,5,45,76]
console.log(mergeSortArray(arr))



// Given an unsorted array of numbers return the sorted array in Descending order
  
function divideArray(array){
 if(array.length <= 1){
  return array
 }
  let middle = Math.floor(array.length /2)
  let left = array.slice(0,middle)
  let right = array.slice(middle)

  return newArray(divideArray(left),divideArray(right))
}
function newArray(left,right){
  const emptyArray = []
  while(left.length && right.length){
    if (left[0]> right[0]){
      emptyArray.push(left.shift())
    }else{
      emptyArray.push(right.shift())
    }
    return[...emptyArray,...left,...right]
  }
}
let array = [20,90,100,65,38]
console.log(divideArray(array))

  

