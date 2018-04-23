describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    const wholeArray = [1,4,3,2,5];
    expect(split(wholeArray)).toEqual([[1,4,3],[2,5]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    const firstArray = [1,3,5];
    const secondArray = [2,4];
    expect(merge(firstArray, secondArray)).toEqual([1,2,3,4,5]);
  });
});
