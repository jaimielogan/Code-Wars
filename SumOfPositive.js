// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
  var summation = 0;
  for(i=0; i<arr.length; i++){
    if(arr[i] > 0){
      summation += arr[i];
      }
   }
  return summation; 
}
