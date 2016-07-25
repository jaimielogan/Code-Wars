//Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

function GetSum( a,b ){
   var summation = 0;
   if (a !== b) {
     if (a<b){
       for(i=a; i<=b; i++){
         summation += i;
       }
       return summation;
      }
     else {
       for(i=b; i<=a; i++){
         summation += i;
        }
      return summation;
   }
  }
  else {
    return 1;
  }
}
