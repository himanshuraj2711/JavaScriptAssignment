//whether the character at the provided (character) index is upper case or not

function isUpperCaseAt(str, index) {
    if(str.charAt(index).toUpperCase() === str.charAt(index))
    {
        return true;
    }
    else
    return false
    }
console.log(isUpperCaseAt('HImanshu', 4));
