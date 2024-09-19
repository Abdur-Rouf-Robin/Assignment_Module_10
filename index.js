// Assignment Question No 1
/* 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.*/

const calculateDifference =(a, b) => a > b ?  a-b : b-a
console.log(`The difference between two number is : ${calculateDifference(3,4)}`);
console.log(`The difference between two number is : ${calculateDifference(5,1)}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Asssignment Question No 2

/* 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not */

const isOdd = a => a % 2 === 0;

console.log(`Is Odd ? : ${isOdd(6)}`);
console.log(`Is Odd ? : ${isOdd(7)}`);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Assignment Question No 3

/* 3) Write a funtion named findMin that takes an array of numbers and returns the smallest number in the array */

const findMin = arr => arr.reduce((a,b) => a > b ? b : a)

console.log(`Minimum Number is: ${findMin([4,7,5,90])}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Assignment Question No 4

/* 4) Write a funtion named filterEvenNumbers that takes an array of numbers and return a new array containing only the even numbers*/

const filterEvenNumbers = arr => arr.filter( num => num%2 ===0)

console.log(`Even Number Array is:`);
console.log(filterEvenNumbers([2,3,4,5,6,7]));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Assignment Question No 5 
/* 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array stored in descending order */

const sortArrayDescending = arr => arr.sort((a,b) => b-a)

console.log("Array of Descending Order is:");
console.log(sortArrayDescending([4,5,3,6,8,5,9,2]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Assignment Question No 6

/* 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased*/

const lowercaseFirstLetter = str => {
    let trimedStr = str.trim();
    let firstLetter = trimedStr.slice(0,1);
    let lowerFirst = firstLetter.toLowerCase()
    let restString = trimedStr.slice(1);
    return lowerFirst.concat(restString);
}

console.log( `String with first letter lowercase is : ${lowercaseFirstLetter("Father is at home.")}`);
console.log( `String with first letter lowercase is : ${lowercaseFirstLetter("   Father is at home.  ")}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Assignment Question No 7

/* 7) Write a funtion named countVowels that takes a string and returns the number of vowels(a,e,i,o,u,A,E,I,O,U) in the string. It should filter vowels from the string */



const countVowels = str => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelsInString = [];
    for(let char of str){
        if(vowels.includes(char)){
            vowelsInString.push(char);
        }
    }
    console.log(`Vowels in the string are:`);
    console.log(vowelsInString);
    console.log(`Number of vowels in the string is ${vowelsInString.length}`);
}

countVowels("I am Robin Hood.");
countVowels("       I am a student.     ");


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Assignment Question No 8

/* 8) Write a function named findAverage that takes an array of numbers and returns the average of all element */

const findAverage = arr =>  (arr.reduce((a,b) => a+b))/arr.length;

console.log(`The Average of the array is : ${findAverage([12,13,14])}`);
console.log(`The Average of the array is : ${findAverage([1,2,3,4,5])}`);