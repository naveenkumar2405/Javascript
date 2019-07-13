var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

function fromListToObject(arr) {
    var obj = {}
    var l = arr.length;
    for(i=0;i<l;i++)
    {
        var func = arr[i];
    obj[func[0]]=func[1];
    }
 
 return obj;
}
console.log(fromListToObject(array));