// Your custom Reduce
const reduce = (arrs, fn, initialValue) => {
  // Your implementation
  const replace = (arr, index, fn) => {
    if (index == arr.length - 1) {
      return arr[index];
    } else {
      return fn(arr[index], replace(arr, index + 1, fn));
    }
  };

  return replace(arr, 0, fn) + initialValue;
};

// Inputs
const arr = [1, 2, 3, 4];
const sum = (accumulator, val) => accumulator + val;
const initialValue = 1;

// Generating the Sums
const sum01 = arr.reduce(sum, initialValue); // Plain JS Reduce
const sum02 = reduce(arr, sum, initialValue); // Custom Reduce

// Logging
console.log({ sum01, sum02 });

// Assertions
console.assert(sum01 === sum02, "Sum01 does not match Sum02");
console.assert(
  JSON.stringify(arr) === JSON.stringify([1, 2, 3, 4]),
  "Array should not be mutated"
);
