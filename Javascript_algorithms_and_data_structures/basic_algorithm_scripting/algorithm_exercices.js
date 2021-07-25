/*
Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
Your response should be a number.*/

function findLongestWordLength(str) {
    let arr = str. split(' ');
    let lengthArr = [];
    for(let i = 0; i<arr.length; i++){
      lengthArr.push(arr[i].length);
      
    }; 
    let biggest = Math.max(...lengthArr);
    return biggest;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

/*Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].*/

function largestOfFour(arr) {
    let maxNum = [];
    for(let i = 0; i<arr.length; i++){
      let num = Math.max(...arr[i]);
      maxNum.push(num);
    }
    console.log(maxNum)
    return maxNum;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.*/

function confirmEnding(str, target) {
    let end = target.length;
    let lengthStr = str.length;
    if(str.substring(lengthStr-end)==target){
      return true;
    }else{
      return false;
    }
    
  }
  
  confirmEnding("Bastian", "n");

  /*Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method. */

function repeatStringNumTimes(str, num) {
    let originalStr = str;
    if(num > 0){
      for(let i = 1; i < num; i++){
        str+=originalStr; 
      }
      return str;
    }else{
      return '';
    }
    
  }
  
  repeatStringNumTimes("abc", 3);


/*Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.*/

function truncateString(str, num) {
    if(str.length > num){
      str = str.slice(0, num)+'...';
      
    }return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

 /*Finders Keepers

Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.*/

function findElement(arr, func) { 
    for(let num = 0; num < arr.length; num++){
      var x = true;
      if(func(arr[num]) == true){
        x = arr[num];
        break;
      }else{
        x = undefined;
      };
    }return x;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

/* Boo who

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.*/

function booWho(bool) {
    if(typeof(bool)== 'boolean'){
      return true;
    }else{
      return false;
    }
  }
  
  booWho(null);

/* Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.*/

function titleCase(str) {
    let arr = str.toLowerCase().split(' ');
    for(let i = 0; i<arr.length; i++){
      arr[i] = arr[i].charAt(0).toUpperCase()+ arr[i].substring(1);
    }
    str = arr.join(' ');
    return str;
  
  }
  
  titleCase("I'm a little tea pot");

/*Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.*/

function frankenSplice(arr1, arr2, n) {
    let resultArr = [...arr2];
    resultArr.splice(n, 0 , ...arr1);
    return resultArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

/*Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.*/

  function bouncer(arr) {

    for(let i = 0; i < arr.length; i++){
      if(!arr[i]){
        arr.splice(i,1);
          i--
          }
        }
      
    
      console.log(arr);
      return arr;
    }
    
    bouncer([7, "ate", "", false, 9]);

    /*Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).*/

function getIndexToIns(arr, num) {
    if(arr.indexOf(num) == -1){
    arr.push(num);
    }
  
    arr.sort(function(a, b) {
    return a - b;
    });
    
    return arr.indexOf(num);
  }
  
  getIndexToIns([3, 10, 5], 3);

 /*Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.*/

function mutation(arr) {
    var a = arr[0].toLowerCase().split('');
    var b = arr[1].toLowerCase().split('');
  
    for(let i = 0; i < b.length; i++){
      if(a.indexOf(b[i]) > -1){
      b[i] = true;
    }else{
      b[i] = false;
    }}
  
    if(b.indexOf(false) > -1){
      return false;
    }else{
      return true;
    }}
  
  mutation(["hello", "Hello"]);

  /*Chunky Monkey
  
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/

function chunkArrayInGroups(arr, size) {
    let newArr= [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr.splice(i, size));
        i--;
    }
      
      console.log(newArr)
      return newArr;
    }
    
    chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);



