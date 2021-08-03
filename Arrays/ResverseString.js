// create a function to reverse string

function reverse(str){
    // check input first
    if( !str || str.length < 2 || typeof str !== 'string' ) {
        return str;
    }

    const backwards = [];
    // grab the length of str
    const totalItems = str.length-1;
    // loop throw the string backward and push items to the new array
    for(let i = totalItems ; i >= 0 ; i--) {
        backwards.push(str[i]);
    }
    // console.log(backwards);
    return backwards.join('');
}

function reverse2(str) {
    return str.split('').reverse().join('');
}

const reverse3 = (str) => str.split('').reverse().join('');

console.log("*************** Reverse Strings using Array ***************")
console.log(reverse('Hi My name is Maram'));

console.log("*************** Reverse Strings using Buit-in Methods ***************")
console.log(reverse2('Hi My name is Maram'));

console.log("*************** Reverse Strings using ES6 ***************")
console.log(reverse3('Hi My name is Maram'));