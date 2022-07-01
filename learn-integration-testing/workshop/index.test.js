

//==================================================================================
// Challege #1
//==================================================================================
test("Calculate function can add numbers", ()=>{
    equal(calculate(2,'+',4), 6, "adding positive numbers");
    equal(calculate(20, '+', 0.5),20.5, "adding decimal numbers");
    equal(calculate(-2, '+', -4),-6, "adding negative numbers");
});

test("Calculate function can subtract numbers", ()=>{
    equal(calculate(4,'-',2), 2, "subtracting positive numbers");
    equal(calculate(20, '-', 0.5),19.5, "subtracting decimal numbers");
    equal(calculate(-2, '-', -4),2, "subtracting negative numbers");
});

test("Calculate function can multiply numbers", ()=>{
    equal(calculate(4,'*',2), 8, "multiplying positive numbers");
    equal(calculate(2.5, '*', 1.5),3.75, "multiplying decimal numbers");
    equal(calculate(-2, '*', -4),8, "multiplying negative numbers");
});

test("Calculate function can divide numbers", ()=>{
    equal(calculate(8,'/',2), 4, "dividing positive numbers");
    equal(calculate(2.5, '/', 0.5),5, "dividing decimal numbers");
    equal(calculate(-8, '/', -2),4, "dividing negative numbers");
});

test("Errors for invalid signs", ()=>{
    equal(calculate(8,'=',2), 4);

});

// This test will pass because 3 is not equal to "3"
test("Can not add string numbers", ()=>{
    notEqual(calculate("1",'+',"2"), "3");

});

test("Can add string numbers", ()=>{
    equal(calculate("1",'+',"2"), 3);

});

//==================================================================================
// Challege #2
//==================================================================================

test("Calculator adds two numbers and update page correctly", ()=>{
    
    // Populate the form fields
    const a = document.querySelector("input[name='a']");
    const b = document.querySelector("input[name='b']");
    const sign = document.querySelector("select");

    a.value = '2';
    b.value = '4';
    sign.value = '+';

    // Trigger submit click
    const submitButton = document.querySelector("button[type='submit']");
    submitButton.click(); // step 3

    // Check the results
    const result = document.querySelector("#result");

    equal(result.textContent, '6');

    // reset the page
    result.textContent = "";

});
