const textEntered = document.getElementById('text-input');
const btn = document.getElementById('check-btn');
const textResult = document.getElementById('result');

// str(textEntered) is filtered, lowercased, and split. Then it is compared to itself to check if it is a palindrome. 
// returns true if palindrome is entered
function palindromeChecker(str) {
    newStr = str.toLowerCase().replace(/[\W_]/g, "")

    if (newStr === newStr.split("").reverse().join("")) {
        return true;
    }
}

// when button is clicked a if/else statement is initiated checking the possible inputs
// alerts the user or modifies the HTML in textResult depending on the textEntered
btn.addEventListener('click', () => {
    if( textEntered.value === "") {
        alert('please input a value');
    } else if ( palindromeChecker(textEntered.value) === true ) {
        textResult.innerHTML = `Congrats! <strong>${textEntered.value}</strong> is a palindrome.`
    } else {
        textResult.innerHTML = `Sorry, <strong>${textEntered.value}</strong> is not a palindrome.`
    }
});


