// a function that takes sum of 2 numbers and multiply by 5.  The 2 number will be set as argument of the function

function function_1(num1, num2) {
    let new_num = (num1 + num2)*5;
    // just for my reference to see what number the funtion prints out
    console.log(new_num);
    return new_num;
}

function_1(-0.11111, 0.33333);
function_1(-9,55);
function_1(999, -888);

// this function will check the string length and return a boolean.  true if string > 10 char
function check_length (blah1) {
    let word_length = blah1.length;
    if(word_length > 10){
        console.log(`${blah1} is true`);
        return true;
    } else {
        console.log(`${blah1} is false`);
    }
}

check_length(`EETTATEAEsdfasdfasdf`);
check_length(`asdfadf`);
check_length(`open sesame`);



//this function searches for 1 string that start with "ph", starting from index 0 in array. once found it returns that and stops
function first_element(array_of_string) {
    for (let counter = 0; counter < array_of_string.length; counter++) {
        let lower_element = array_of_string[counter].toLowerCase();
        
        if (lower_element.startsWith(`ph`)) {
            console.log(array_of_string[counter]);
            return array_of_string[counter];
        }
    }
    
}

first_element([`bdkall`, `PH`, `apH`, `phil`, `notPh`]);
first_element([`bdkall`, `zPH`, `apH`, `phil`, `notPh`]);
first_element([`bdkall`, `bPH`, `apH`, `ephil`, `notPh`, `pHxxx`]);
    