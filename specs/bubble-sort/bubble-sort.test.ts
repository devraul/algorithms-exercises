/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end

  To run the tests, change the `test.skip(…)` below to `test(…)`

  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums: number[]) {
  const copy = [...nums];
  let hasBeenSwaped: boolean = false;

  do {
    hasBeenSwaped = false;

    for (let currentIndex = 0; currentIndex < copy.length; currentIndex++) {
      const nextIndex = currentIndex + 1;
      const currentElement = copy[currentIndex];
      const nextElement = copy[nextIndex];

      if (currentElement > nextElement) {
        copy[currentIndex] = nextElement;
        copy[nextIndex] = currentElement;

        hasBeenSwaped = true;
      }
    }
  } while (hasBeenSwaped);

  return copy;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
