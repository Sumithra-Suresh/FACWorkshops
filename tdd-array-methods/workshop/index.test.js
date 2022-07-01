// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test("map() should transform first element of the array using the fn argument", () => {
  let result = map([1], (x) => x + 1);
  equal(result[0], 2);

  result = map([1], (x) => x + 2);
  equal(result[0], 3);

  result = map([3], (x) => x * 2);
  equal(result[0], 6);

});

test("map() should transform each element of the array using the fn argument", () => {
  result =  map([1,2,3], (x) => x * 2);
  equal(result[0], 2);
  equal(result[1], 4);
  equal(result[2], 6);
});

// testing filter()

test("filter() should return empty array if the condition fails for all array elements", () => {
  let result = filter([1], (x)=>x<0);
  equal(result[0], []);
});

test("filter() should return true if element passes the filter condition", () => {
  let result = filter([1, 2], (x) => x > 0);
  equal(result[0], 1);
  equal(result[1], 2);
});

test("filter() should return false if element fails the filter condition", () => {
  let result = filter([1, 12], (x) => x > 10);
  equal(result[0], 12);
});

// testing every()

test("every() should return true if all element meet the condition", () => {
  let result = every([1], (x) => x );
  equal(result, true);

  result = every([20,30], (x) => x > 10 );
  equal(result, true);

});

test("every() should return false if any element fails the condition", () => {
  let result = every([1], (x) => x<0 );
  equal(result, false);
});

// testing some()
test("some() should return true if any element meet the condition", () => {
  let result = some([1], (x) => x );
  equal(result, true);

  result = some([20,30], (x) => x > 10 );
  equal(result, true);
});

test("some() should return false if any element fails the condition", () => {
  let result = some([1,2], (x) => x<0);
  equal(result, false);
});

// testing find()

test("find() should return first element that meet the condition", () => {
  let result = find([1], (x) => x );
  equal(result, 1);

  result = find([1, 2, 3], (x) => x>1 );
  equal(result, 2);
});

test("find() should return undefined if it fails to meet the condition", () => {
  result = find([1, 2, 3], (x) => x>5 );
  equal(result, undefined);
});

// testing reduce()
test("reduce() should call the fn and use the return value as accumulator", () => {
  let result = reduce([1, 2, 3], (total, x) => total + x, 0);
  equal(result, 6);

  result = reduce([1, 2, 3], (total, x) => total + x, 2);
  equal(result, 8);
});