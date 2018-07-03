/*=====================================================
Numbers
=======================================================*/
// Swap Two Number Variables Without Using a Temp Variable.
let a = 10,
  b = 20;
a = a + b;
b = a - b;
a = a - b;

// Swap Two String Variables Without Using a Temp Variable.
let w1 = "hello";
let w2 = "goodbye";
w1 = w2 + w1;
w2 = w1.slice(w2.length);
w1 = w1.slice(0, w1.length - w2.length);
console.log(w1); //goodbye
console.log(w2); //hello


/*=====================================================
Loops
=======================================================*/
//Create a variable N with a randomized number in it (you can use the Math.random , or just request an input from the user)
//Print in console view a sequence of N lines, each line consisting of a string of "*"'s according to the line number.
// for example: For N =  5:
// *
// **
// ***
// ****
// *****

let N = Math.ceil(Math.random() * (5 - 1)) + 1; // num between 1 to 5
for (let i = 0, j = "*"; i < N; i++ , j += "*") {
  console.log(j);
}


console.log(""); // just for space in the console..

// Now do it the other way around:
// For example: For N =  4:
// ****
// ***
// **
// *

let j = 0,
  star = "";
while (j < N) {
  star += "*"; // star will be N times "*"
  j++;
}

for (let i = 0; i < N; i++) {
  console.log(star);
  star = star.slice(1);
}

/*=====================================================
 Strings
=======================================================*/
// REVERSE - Write some code that takes a string and reverses it:
function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverse("dog")) // return "god"
console.log(reverse("fast car")) //return "rac tsaf"

// PALINDROME
// function that checks if a string is a palindrome. It should return true if it is, false otherwise.
function checkPalindrome(str) {
  for (let i = 0, j = str.length - 1; i < str.length / 2; i++ , j--) {
    if (str[i] !== str[j])
      return false;
  }
  return true;
}

console.log(checkPalindrome('abbba')); // true

// Given a string, encrypt it. For example: let's say I want to encrypt the word "cat". An easy way would be to just 'shift' every letter by one to the right, so:
// Hence, "cat" becomes "dbu" when encrypted. Write a function that takes a string and returns an encrypted version in this simple fashion.

function encrypt(str) {
  let encryptStr = "";
  for (let i = 0; i < str.length; i++) {
    encryptStr += String.fromCharCode(str.charCodeAt(i) + 1);
  }
  return encryptStr;
}

console.log(encrypt('dog')); // eph


// DECRYPTION!
//function that decrypts what you've encrypted.

function decrypt(str) {
  let encryptStr = "";
  for (let i = 0; i < str.length; i++) {
    encryptStr += String.fromCharCode(str.charCodeAt(i) - 1);
  }
  return encryptStr;
}

console.log(decrypt('eph')); // dog


/*=====================================================
Array
=======================================================*/
// DUPES
// Given an array, return a new array that removes any duplicates

function removeDup(arr) {

  let checkDup = {};
  for (let i = 0; i < arr.length; i++) {
    if (checkDup[arr[i]]) {
      arr.splice(i, 1) // remove the exist item from the original array
      i--;  // in order to check the next item in array
      //because the length of array has been changed, so after i-- and i++ , i will be in the position of the next item
    }
    else
      checkDup[arr[i]] = true; // mark the item as exist- "true"
  }

}

let dupArr = ["dog", "cat", "camel", "bee", "dog", "cat", "elephant", "dolphin"];
removeDup(dupArr);
console.log(dupArr); // [ 'dog', 'cat', 'camel', 'bee', 'elephant', 'dolphin' ]



/*=====================================================
Sort
=======================================================*/

function sort(arr) {

  let temp;
  let lenArr = arr.length;
  let swap = true;
  // I do lanArr-- ,because after each loop end -the last item in array always will be the big item so i dont need over him again
  while (lenArr-- && swap) {
    // console.count('in loop 1');
    swap = false;
    for (let i = 0; i < lenArr; i++) {
      console.count('in loop ');
      if (arr[i] > arr[i + 1]) {
        // do swap...
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swap = true;
      }
    }
  }

}

let arr1 = [1, 5, 2, 7, 3, 8, 3, 4];
// let arr1 = [8, 7, 6, 5, 4];
sort(arr1);
console.log("arr1: ", arr1); // arr1:  [ 1, 2, 3, 3, 4, 5, 7, 8 ]
