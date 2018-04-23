function split(wholeArray) {
  let firstHalf = wholeArray.slice(0, Math.round(wholeArray.length / 2));

  let secondHalf = wholeArray.slice(Math.round(wholeArray.length / 2));

  console.log(firstHalf, secondHalf);

  return [firstHalf, secondHalf];
}

function merge(first, second) {
  let newArr = [];


  for (var i = 0; i < first.length; i++) {
    for(var j = 0; j < second.length; i++) {
      if (first[i] < second[j]) {
        newArr[i] = first[i];
        newArr[i+1] = second[j];
      }
    }
  }
  let newArr = [];
  if ( first < second) {

  }

}
