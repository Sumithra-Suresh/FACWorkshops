
// Writing testable code
test("makeUrl should create the correct URL", () => {
    equal(makeUrl('pikachu'),"https://pokeapi.co/api/v2/pikachu");
});

test("makeUrl should create the incorrect URL", () => {
    equal(makeUrl('pikachu'),"https://pokeapi.co/api/v2/pika");
});



// Deep equality
test("searchParamsToObject will create an object from the querystring", () => {
    const actual = searchParamsToObject( "name=oliver&email=hello@oliverjam.es");
    const expected = { name: "oliver", email: "hello@oliverjam.es" };

    equal(actual.name, expected.name);
    equal(actual.email, expected.email);
});

test("searchParamsToObject will create an incorrect object from the querystring", () => {
    const actual = searchParamsToObject( "name=oliver&email=hello@oliverjam");
    const expected = { name: "oliver", email: "hello@oliverjam.es" };

    equal(actual.name, expected.name);
    equal(actual.email, expected.email);
});

// Edege cases
test("isLeapYear handles multiples of 400", () => {
    equal(isLeapYear(2000), true, "2000 is a leap year");
    equal(isLeapYear(1600), true, "1600 is a leap year");
});

test("isLeapYear handles multiples of 100", () => {
    equal(isLeapYear(1900), false, "1900 is not a leap year");
    equal(isLeapYear(500), false, "500 is not a leap year");
});


test("isLeapYear handles multiples of 4", () => {
    equal(isLeapYear(2020), true, "2020 is a leap year");
    equal(isLeapYear(2024), true, "2024 is a leap year");
});

test("isLeapYear should handle invalid inputs", () => {
    equal(isLeapYear('2020'), "Please enter a number", "Input must be a number");
    equal(isLeapYear(-2000), "Year cannot be negative or 0", "Input can not be negative");
    equal(isLeapYear(0), "Year cannot be negative or 0", "Input can not be zero");
});