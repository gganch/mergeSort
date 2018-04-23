function split(wholeArray) {
  let firstHalf = wholeArray.slice(0, Math.round(wholeArray.length / 2));
  let secondHalf = wholeArray.slice(Math.round(wholeArray.length / 2));
  return [firstHalf, secondHalf];
}

function merge(first, second) {
  let newArr = [];
  let held = [];

  for (let i = 0; i < first.length; i++){
   if (first[i] < second[i]){
    newArr[i] = first[i]
    held = second[i]
   }
   else {
    newArr[i] = second[i]
    held = first[i]
   }
  }
  console.log(newArr)
  return newArr
}
