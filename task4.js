var array = ["GUVI", "I", "am", "Geek"];
var fElement = array[0];

function transformFirstAndLast(arr) {
    var newObject = {}
    newObject[arr[0]]= arr[arr.length-1];
    
    return newObject;
   }
   transformFirstAndLast(array);