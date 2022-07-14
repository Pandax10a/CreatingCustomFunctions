// a function that takes sum of 2 numbers and multiply by 5.  The 2 number will be set as argument of the function

function function_1(num1, num2) {
    let new_num = (num1 + num2)*5;
    // just for my reference to see what number the funtion prints out
    console.log(new_num);
    return new_num;
}

function_1(-0.11111, 0.33333);


function check_length (blah1) {
    let word_length = blah1.length;
    if(word_length > 10){
        return true;
    } else {
        return false;
    }
}

check_length(`asdfasdfasdf`);