//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  // Return a new array with the strings filtered out
  var filter =[];
  for (i=0; i<l.length;i++){
    if(typeof l[i] !== "string"){
    filter.push(l[i]);
    }
  }
  return filter;
}

// Other Best Practice Answers provided

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number';});
}
