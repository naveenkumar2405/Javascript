// Test case 1: Passed
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}


function assertObjectsEqual(actual, expected){
    
    var flag=0;
    for(var key in actual){
 
            if(actual[key]==expected[key]){
               flag+=1
            }
        
    }
    if(flag==2){
        console.log("Passed")
    }else{
        console.log("Failed")
    }
       
    }
   

   assertObjectsEqual(actual,expected,"check equality")

// Test case 2: Failed

var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}


function assertObjectsEqual(actual, expected){
    
    var flag=0;
    for(var key in actual){
 
            if(actual[key]==expected[key]){
               flag+=1
            }
        
    }
    if(flag==2){
        console.log("Passed")
    }else{
        console.log("Failed")
    }
       
    }
   

   assertObjectsEqual(actual,expected,"check equality")

